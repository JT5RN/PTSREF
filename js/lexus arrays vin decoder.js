//4-15-2016 coppied from read-csv file // 4-25 coppied from LexusVinDecoder file
// 7-2-2016 coppied onto Laptop and down cape cod...
var thiscar = {
  modelyear: "",
  modelprefix: "",
  modelkatacode: "",
  wmi: "",
  vds1: "",
  vds2: "",
  vin: "",
  model: "",
  vin4: "",
  vin5: "",
  vin10: "",
  engine: "",
  bodystyle: ""
};
var engine_family_1990_1993 = {//90 THRU '93'
    F: "1UZ-FE (Early)",
    V: "2VZ-FE (Early)",
    K: "3VZ-FE (Early)",
    Z: "2JZ-GE OR 1UZ-FE (Early)",
    S: "2JZ-GE (Early)"        
};
var engine_family_1994_1995 = {//90 THRU '93'
    F: "1UZ-FE (Early)",
    K: "1MZ-FE",
    Z: "2JZ-GE OR 1UZ-FE (Early)",
    S: "2JZ-GE (Early)"  
};
var engine_family_1996_2005 = { // THRU 2005
    A: "3MZ-FE",
    F: "1MZ-FE",
    D: "2JZ-GE",
    H: "1UZ-FE",
    J: "1FZ-FE",
    L: "3UZ-FE",
    N: "3UZ-FE",
    T: "2UZ-FE"  
};
var engine_family_2006_2009 = { // THRU 2009
    A: "3MZ-FE",
    C: "2GR-FSE + L110",
    E: "2GR-FSE",
    H: "3GR-FSE",
    J: "2GR-FE",
    K: "4GR-FSE OR 2GR-FE",
    L: "1UR-FSE",
    N: "3UZ-FE",
    P: "2UR-GSE",
    T: "2UZ-FE",
    U: "2UR-FSE",
    W: "3MZ-FE",
    Y: "3UR-FE"
};

var engine_family_2010_2013 = { // THRU 2013
    B: "2AZ-FXE OR 2GR-FXE",
    C: "2GR-FSE",
    D: "2ZR-FXE",
    E: "2GR-FSE",
    F: "4GR-FSE",
    K: "2GR-FE",
    L: "1UR-FSE",
    M: "1UR-FE",
    N: "3UZ-FE",
    P: "2UR-GSE",
    S: "2GR-FXE",
    U: "2UR-FSE",
    X: "1LR-GUE", //LFA Motor. VDS:  HX8BH (#8 LETTER " B " BACK TO BACK- CUTE.)
    W: "2AR-FXE 2.8L Hybrid",
    Y: "3UR-FE"   
};

var engine_family_2014_2017 = { //2014-2016 the 2016 map 
    A: "8AR-FTS 2.0 Turbo",
    B: "2GR-FXE",
    C: "2GR-FXE",
    D: "2ZR-FXE",
    E: "2GR-FSE",
    F: "2GR-FXS or 4GR-FSE",
    G: "2GR-FXS",
    J: "2AR-FXE",
    K: "2GR-FE",
    L: "1UR-FSE",
    M: "2GR-FSE or 1UR-FE",
    P: "2UR-GSE",
    S: "2GR-FXE",
    U: "2UR-FSE",
    W: "2AR-FXE 2.8L Hybrid",
    Y: "3UR-FE",
    Z: "2GR-FKS"
    
};


var pv_bodytype_2016 = {
    B: "4 Door Sedan 2WD",
    C: "4 Door Sedan AWD",
    D: "4 Door Sedan AWD (LS460L, LS600hL)",
    E: "5 Door Hatchback 2WD", // made up for IS-SportCXross
    F: "2 Door Convertible 2WD",
    G: "4 Door Sedan 2WD (LS460L)",
    H: "2 Door Coupe 2WD",
    K: "5 Door Hatchback 2WD",
    S: "2 Door Coupe AWD"
    
};

var mpv_bodytype_2016 = {
    B: "5 Door Wagon AWD",
    J: "5 Door Wagon AWD",
    Y: "5 Door Wagon 2WD",
    Z: "5 Door Wagon 2WD",
    G: "4 Door Wagon 2WD",
    H: "4 Door Wagon 4WD"
};

var modelyearmap = {
  A: 2010,
  B: 2011,
  C: 2012,
  D: 2013,
  E: 2014,
  F: 2015,
  G: 2016,
  H: 2017,
  J: 2018,
  K: 2019,
  L: 1990,
  M: 1991,
  N: 1992,
  P: 1993,
  R: 1994,
  S: 1995,
  T: 1996,
  V: 1997,
  W: 1998,
  X: 1999,
  Y: 2000,
  1: 2001,
  2: 2002,
  3: 2003,
  4: 2004,
  5: 2005,
  6: 2006,
  7: 2007,
  8: 2008,
  9: 2009
};
var veh = { // highest level direction for this.  would be 500 long with maps similar to these others.
  "JTH": "lexuspv",
  "58A": "lexuspv",
  "JT8": "lexuspv",
  "JTJ": "lexusmpv",
  "2T2": "lexusmpv",
  "JT6": "lexusmpv",
  "JT5": "toyotampv"
};
var lexuspv = { // addt'l #s work so that it switches on the vds678
  "5BH": "Ct",
  "1BA": "Hs",
  "1GG": "Es",
  "1EG": "Es",
  "46G": "Es", 
  "30G": "Es",
  "28G": "Es2", //97-01
  "12G": "Es1", //Random old model
  "13T": "Es",
  "22T": "Es",
  "22G": "Es2", //Random old model
  "1EF": "Ls",
  "5EF": "Ls",
  "46F": "Ls",
  "36F": "Ls",
  "30F": "Ls",
  "28F": "Ls",
  "22E": "Ls",
  "22F": "Ls",
  "11E": "Ls1",
  "1BL": "Gs4", //new model;  4th gen GS
  "1KS": "Gs3", //new model;  3rd gen GS
  "96S": "Gs3", //3g Gs
  "69S": "Gs",
  "68S": "Gs",
  "68X": "Gs",
  "42S": "Gs1",  //freakshow 
  "47E": "Gs",
  "5BC": "Rc",
  "48Y": "Sc", //430
  "45Y": "Sc", //430
  "32Z": "Sc",
  "31C": "Sc",
  "30C": "Sc",
  "2EY": "Sc", //430 thomas iglecias's
  "1D2": "Is3", //3g Is
  "2C2": "Is",
  "5C2": "Is2",
  "5CF": "Is2", //2g Is
  "262": "Is2", //2g Is
  "192": "Is",
  "182": "Is",
  "32Y": "Sc"
};
var lexusmpv = {
  "RBZ": "Nx",
  "88J": "Lx",
  "00W": "Lx",
  "7AX": "Lx",
  "7FX": "Gx",
  "20X": "Gx",
  "10U": "Rx",
  "31U": "Rx",
  "1BA": "Rx",
  "MCA": "Rx"
};
var Ct = {
  KD: ["ZWA10"]
};

var Hs = {
  BB: "ANF10"
};
var Es = {
  BA: "MCV31",
  BF: "MCV30",
  BJ: "GSV40",
  BK: "GSV60",
  BW: "AVV60",
  GK: "MCV10",
  VK: "VCV10",
  VV: "VZV21" //1990
};
var Es1 = {
  BF: "MCV10" 
};
var Es2 = {
  BF: "MCV20"  
};
var Gs = {
  BD: "JZS160",
  BH: "UZS160",
  BL: "UZS161",
  CE: "GRS196",
  CH: "GRS195",
  JS: "JZS147"
};
var Gs1 = {
    BD: "JZS147"
};
var Gs3 = { //1KS AND 96S 3rd gen cars
  BC: "GWS191",
  BE: "GRS191",
  BH: "GRS190",
  BL: "URS190",
  BN: "UZS190",
  BZ: "GRL19#",
  CE: "GRS196",
  CH: "GRS195"
};
var Gs4 = { // 1BL 4th gen cars  // postmortem interesting to see that i built the GS like this (# for later gen;  and with ES i did the oposite.)
  BA: "ARL10", // 200t
  BE: "GRL10", // GRL11 //GRL12 GRL15 GRL16 
  BP: "URL10", // GS-F 2016+
  BS: "GWL10", // 450H
  BZ: "GRL12", // GRL11 maybe a GS250..
  CE: "GRL15", // 350 2013/14/15
  CZ: "GRL16" //  350 2016I THINK ITS GRL12. 
};
var Gx = {
  BM: "URJ150",
  BT: "UZJ120",
  JM: "URJ150"
};
var Is = {
  
  BD: "JCE10",
  BK: "GSE20",
  BN: "UZS190",
  BP: "USE20",
  CK: "GSE25",
  CM: "GSE37",
  ED: "JCE10", // sportcross...
  FF: "GSE20",
  FE: "GSE21"
};
var Is2 = { // 262 & 5C2
  BE: "GSE21",
  BF: "GSE20",
  BK: "GSE20",
  BP: "USE20",
  CE: "GSE26",
  CK: "GSE25",
  CF: "GSE25"  
};
var Is3 = { // 1D2 
  BA: "ASE30", //200t  2WD 4Dr. Sedan N-GRADE L4 8AT
  BE: "GSE31", //350
  BF: "GSE30", // 
  CE: "GSE36",//350awd
  CF: "GSE35",//250awd thru 15
  CM: "GSE37"//300awd
};
var Ls = {

  BH: "UCF20",
  BN: "UCF30",
  BL: "USF40",
  CL: "USF45",
  DL: "USF46",
  GL: "USF41",
  DU: "UVF46",
  UF: "UCF20"
};
var Ls1 = {
  UF: "UCV10" //1990
};
var Lx = {
  HT: "UZJ100",
  HY: "URJ201",
  HJ: "FZJ80"
};
var Nx = {
  BA: "AGZ15",//200t
  BJ: "AYZ15",
  YA: "AGZ10",
  YW: "AYZ10"
};
var Rc = {
  HA: "ASC10",
  HE: "GSC10",
  SE: "GSC15",
  SM: "GSC16",
  HP: "USC10"
};
var Rx = {
  BC: "GYL15",
  BG: "GYL25",
  BZ: "GGL25",
  BK: "GGL15",
  GA: "MCU33",
  GF: "MCU10",
  GK: "GSU30",
  GW: "MHU33",
  HA: "MCU38",
  HF: "MCU15",
  HK: "GSU35",
  HW: "MHU38",
  ZB: "GYL10",
  ZF: "GYL20",
  ZK: "GGL10",
  ZZ: "GGL20"
};
var Sc = {
  CD: "JZZ31",
  CH: "UZZ30",
  JZ: "JZZ31",
  FN: "UZZ40",
  UZ: "UZZ30"
};


function decodeVinNo(vin) {
    var wmi = vin.toString().substring(0, 3);
    var vin678 = vin.toString().substring(5, 8);
    var vin45 = vin.toString().substring(3, 5);
    var vin4 = vin.toString().substring(3,4);
    var vin5 = vin.toString().substring(4,5);
    var vin_my = vin.toString().substring(9, 10);
    
    var thisCarsWmi = veh[wmi];// the intitail direction it takes
  
  
  if (!thisCarsWmi) 
  { ///COULD Expound on this logic some..
    return(vin); // PUNTS if its not a valid vin to decode
    console.log(vin.toString() + " errors out");
 }  else {
        
        thiscar.vin = vin;          // moved this up trying to catch errors. 
        
    var thisCarsBodystyle = window[thisCarsWmi][vin678]; //pv or mpv with 3 digits in
    var thisCarsvds1 = window[thisCarsBodystyle][vin45]; //engine designation with known bodystyle
    var thisCarModelYear = modelyearmap[vin_my];
    var thisCarEngine = findTheEngine(vin_my, vin5); // I really need to figure out how to do these calls with 1 vin variable
    var thisCarBodyStyle = findTheBodyStyle(vin_my, vin4, thisCarsWmi);

        thiscar.wmi = wmi; // not thisCarsWmi ;  that variable drives driection.
        thiscar.vds1 = vin45;
        thiscar.vds2 = vin678;
        thiscar.modelprefix = thisCarsBodystyle;
        thiscar.modelkatacode = thisCarsvds1;
        thiscar.modelyear = thisCarModelYear;
        thiscar.model = thisCarsBodystyle.substring(0,2).toUpperCase();
        thiscar.engine = thisCarEngine;
        thiscar.bodystyle = thisCarBodyStyle;
}
return(thiscar.modelkatacode); // This is the output
}
 
 
 
 
 
 //functions
    
var findTheEngine = function(vin_my, vin5) {  // this is the best way i could figure to map like this...
    switch(vin_my) {
        case "L":
        case "M":
        case "N":
        case "P":
            var thisCarEngine = engine_family_1990_1993[vin5];
            return thisCarEngine;       
        case "R":
        case "S":
            var thisCarEngine = engine_family_1994_1995[vin5];
            return thisCarEngine;         
        case "T":
        case "V":
        case "W":
        case "Y":
        case "X":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
            var thisCarEngine = engine_family_1996_2005[vin5];
            return thisCarEngine;      

        case "6":
        case "7":
        case "8":
        case "9": 
            var thisCarEngine = engine_family_2006_2009[vin5];
            return thisCarEngine;
        case 'A' :
        case 'B' :
        case 'C' :
        case 'D' :
            //do something
            var thisCarEngine = engine_family_2010_2013[vin5];
            return thisCarEngine;
        case 'E' :
        case 'F' :
        case 'G' :
        case 'H' :
            var thisCarEngine = engine_family_2014_2017[vin5];
            return thisCarEngine;
        };
    };
    
    
var findTheBodyStyle = function(vin_my, vin4, thisCarsWmi) {
    switch(vin_my) {
        case "L":
        case "M":
        case "N":
        case "P":
        case "R":
        case "S":
            var thisCarBodyStyle = "";
            return thisCarBodyStyle;
        case "T":
        case "V":
        case "W":
        case "Y":
        case "X":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": 
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
            switch(thisCarsWmi) {
                case "lexuspv": 
                    var thisCarBodyStyle = pv_bodytype_2016[vin4];
                    return thisCarBodyStyle;
                case "lexusmpv": 
                    var thisCarBodyStyle = mpv_bodytype_2016[vin4];
                    return thisCarBodyStyle;                    
            }
        };
    };
    