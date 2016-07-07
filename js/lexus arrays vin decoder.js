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
  "2T3": "toyotampv",
  "4T3": "toyotampv",
  "5TD": "toyotampv",
  "JT3": "toyotampv",
  "JTE": "toyotampv",
  "JTM": "toyotampv",
  "2T1": "toyotapv",
  "4T4": "toyotapv",
  "JT1": "toyotapv",
  "JT2": "toyotapv",
  "JTD": "toyotapv",
  "4T1": "toyotapv",
  "JTK": "toyotascion",
  "JTL": "toyotascion",
  "5TB": "toyotatruck",
  "5TE": "toyotatruck", 
  "5TF": "toyotatruck",
  "JT4": "toyotatruck",
  "JT5": "toyotatruck" //JT5RN55D vs JT4RN55D whats the diff?  jt5= Incomplete truck.
};

var toyotampv = {
  //data
  "05J": "Landcruiser",
  "10V": "Rav4",
  "11A": "Venza_11a",
  "11F": "FJCruiser",
  "11R": "Previa",
  "13C": "Sienna",
  "14R": "4Runner_14R",
  "17R": "4Runner_17R",
  "20V": "Rav4",
  "21A": "Highlander",
  "22C": "Sienna",
  "23C": "Sienna",
  "31V": "Rav4",
  "33V": "Rav4",
  "3BB": "Venza_3bb",
  "3DC": "Sienna",
  "3EH": "Highlander",
  "41A": "Highlander",
  "42A": "Highlander",
  "43A": "Highlander",  
  "44A": "Sequoia-Highlander",
  "48A": "Sequoia",
  "4BF": "FJCruiser",
  "4CC": "Sienna",
  "4DV": "Rav4_4dv",
  "5G1": "Sequoia",
  "5JR": "4Runner",
  "64A": "Sequoia",
  "67A": "Sequoia",
  "68A": "Sequoia",
  "7AJ": "Landcruiser",
  "85J": "Landcruiser",
  "86R": "4Runner_86R",
  "87R": "4Runner_87R",
  "REV": "Rav4_rev"
};

var toyotapv = {
  //data
  "00N": "Celica",
  "02E": "Corolla",
  "09B": "Corolla",
  "11E": "Avalon",
  "123": "Echo",
  "12B": "Avalon",
  "12E": "Camry",
  "12E": "Corolla",
  "12K": "Camry",
  "12U": "Prius",
  "12W": "Camry",
  "13E": "Camry",
  "15C": "Mr2",
  "18B": "Avalon_b",
  "1EB": "Avalon_b",
  "1FK": "Camry_1fk",
  "20U": "Prius",
  "21N": "Mr2",
  "22K": "Camry",
  "22P": "Camry",
  "22U": "Prius",
  "28B": "Avalon_b",
  "28K": "Camry",
  "28P": "Camry",
  "30E": "Corolla",
  "30K": "Camry_32k",
  "30P": "Camry_32k",
  "32E": "Corolla",
  "32K": "Camry_32k",
  "32T": "Celica",
  "36B": "Avalon",
  "38P": "Camry_32k",
  "3DB": "Avalon",
  "3DP": "Prius",
  "3DU": "Prius",
  "3EK": "Camry",
  "3EU": "Prius",
  "3ZE": "Corolla",
  "40E": "Corolla",
  "45F": "Paseo",
  "46K": "Camry_46k",
  "46S": "Tercel",
  "4EE": "Corolla",
  "4K3": "Echo",
  "52L": "Tercel",
  "71J": "Supra",
  "923": "Yaris",
  "94A": "Corolla",
  "RHE": "Corolla"
};

var toyotascion = { 
  "104": "Scion",
  "167": "Scion",
  "177": "Scion",
  "344": "Scion",
  "4B4": "Scion",
  "4FE": "Scion",
  "5C7": "Scion"
  //data
};

var toyotatruck = {
  //
  "01G": "Pickup",
  "13D": "Pickup",
  "22N": "Tacoma",
  "42N": "Tacoma",
  "441": "Tundra",
  "481": "Tundra",
  "4EN": "Tacoma",
  "521": "Tundra",
  "52N": "Tacoma",
  "541": "Tundra",
  "55D": "Pickup",//my camper
  "581": "Tundra",
  "5F1": "Tundra5F1",
  "62N": "Tacoma",
  "62S": "Pickup",
  "6ZN": "Tacoma"

};


var Pickup = { // NEEDS FIXIN' ! (jt5rn55d)
  "RN": "RN55L",
  "VN": "RN65L"
};

var Tacoma = {
  "TX": "123",
  "LU": "456-has Multiple",
  "UU": "789",
  "PX": "012",
  "MU": "345",
  "PM": "678"
};

var Tundra = {  // needs more... not good enough.
  "BT": "123",
  "BV": "456",
  "DT": "789",
  "DV": "012",
  "MV": "345",
  "RV": "678"
};

var Tundra5F1 = {
  "AY": "123",
  "BY": "456",
  "CY": "789",
  "DY": "012",
  "HY": "345",
  "UM": "678",
  "UY": "901"
};

var 4Runner_14R = {
  "BT": "1234",
  "BU": "5678",
  "ZU": "9012"
};

var 4Runner_17R = {
  "BT": "0123",
  "BU": "4567"
};

var 4Runner_86R = {
  "GN": "1234",
  "HN": "123"
};

var 4Runner_87R = {
  "HN": "123456"
};

var 4Runner = {
  "BU": "012",
};

var FJCruiser = {
  "BU": "FJS666"
};

var Highlander = {
  "DP": "012",
  "EP": "345",
  "EW": "Hybriddy",
  "GD": "678",
  "GF": "901",
  "GP": "234",
  "HD": "567",
  "HF": "890",
  "HP": "123",
  "BK": "456",
  "DK": "789",
  "EK": "012",
  "JK": "345",
  "JW": "678",
  "ES": "901",
  "EW": "234"//NEEDS TO ADD 41A/42A/43A specifics.
};

var Landcruiser = {
  "HT": "FZJx0",
  "HY": "FZJ123",
  "HJ": "FZJ60?"
};

var Previa = {
  "AC": "PREVIA!"
};


var Rav4 = {
  "HP" = "VDS2_10V",
  "HD" = "VDS2_20V",
  "HH" = "VDS2_20V",
  "BD" = "VDS2_31V or 33V",
  "BF" = "VDS2_31V or 33V",
  "BK" = "VDS2_31V"
};


var Rav4_4dv = {
  "BF": "4DV#1",
  "DF": "4DV#2",
  "DK": "4DV#3",
  "JF": "4DV#4",
  "RF": "4DV#5"
};

var Rav4_rev = {
  "BF": "REV#1",
  "DF": "REV#2",
  "DK": "REV#3",
  "JF": "REV#4",
  "RF": "REV#5"
};

var Sequoia = {
  "BT" = "ZZXY",
  "DY" = "ZZXY2",
  "BY" = "ZZXY3"
};

var Sienna = {
  "ZF": "SIENNA1",
  "BA": "SIENNA2",
  "ZA": "SIENNA22c",
  "ZK": "22C2",
  "KK": "3dc_kk",
  "JK": "3dc_jK!",
  "XK": "3dc_xk"
};

var Venza_11a = {
  "BE": "VENZA_11A_1",
  "BK": "VENZA_11A_2"
};

var Venza_3bb = {
  "BA": "VENZA_3BB0",
  "BK": "VENZA_3BB2",
  "ZA": "VENZA_3BB3"
};

var Avalon = {
  "BF": "AVALON_001",
  "BK": "AVALON_002",
  "GB": "AVALON_999"
};

var Avalon_b = {
  "BK": "AVALON_003",
  "BF": "AVALON_000",
  "BD": "AVALON_HYBRID"
};

var Camry_1fk = {
  "BD": "1FK CAMRY BD",
  "BF": "1FK CAMRY BF",
  "BK": "1FK CAMRY BK"
};

var Camry_46k = {
  "BB": "46K_BB",
  "BE": "46K_BE",
  "BK": "46K_BK"
};

var Camry_32k = {
  "BA": "123",
  "BE": "456",
  "BF": "789",
  "CA": "CA_30P",
  "CF": "012",
  "FA": "345_FA30P"
};

/*
4Runner
FJCruiser
Highlander
Landcruiser
Previa
Rav4
Sequoia-Highlander
Sequoia
Sienna
Venza
Avalon
Camry
Celica
Corolla
Echo
Mr2
Paseo
Prius
Supra
Tercel
Yaris
Scion

*/

//original lexus-only below added toyota 7-7-2016
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
  "1BL": "Gs4", //4th gen GS
  "1KS": "Gs3", //3rd gen GS
  "96S": "Gs3", //3g Gs
  "69S": "Gs", //2g Gs
  "68S": "Gs", //2g Gs
  "68X": "Gs", //2g Gs
  "42S": "Gs1",  //freakshow 1year Gs1
  "47E": "Gs", //Gs1
  "5BC": "Rc", 
  "48Y": "Sc", //430
  "45Y": "Sc", //430
  "32Z": "Sc",
  "31C": "Sc",
  "30C": "Sc",
  "2EY": "Sc", //430 thomas iglecias's
  "1D2": "Is3", //3g Is
  "2C2": "Is", //is-C
  "5C2": "Is2", //10-13Is
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
  KD: "ZWA10"
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
    