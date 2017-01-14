//4-15-2016 coppied from read-csv file // 4-25 coppied from LexusVinDecoder file
// 7-2-2016 coppied onto Laptop and down cape cod...
// 1-4-2017 trying to slice this up and make it better.  
// 1-14-217 have added wmi and model years dispaly to tabled html-good progress


var veh = { // highest level direction for this.  would be 500 long with maps similar to these others.
  "JTH": "lexuspv",
  "58A": "lexuspv",
  "JT8": "lexuspv",
  "JTJ": "lexusmpv",
  "2T2": "lexusmpv",
  "JT6": "lexusmpv"
};



//original lexus-only below added toyota 7-7-2016
var lexuspv = { // addt'l #s work so that it switches on the vds678
  "5BH": "Ct",
  "1BA": "Hs",
  "1GG": "Es",
  "1EG": "Es",
  "46G": "Es", 
  "30G": "Es",
  "28G": "Es2", //97-01ES
  "12G": "Es1", //old ES
  "13T": "Es",
  "22T": "Es",
  "22G": "Es2", //old ES
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
  BD: "JZS160",//GS30098-05
  BH: "UZS160",//GS40098-00
  BL: "UZS161",//GS43001-05
  CE: "GRS196",//GS35007-11
  CH: "GRS195",//GS300AWD06
  JS: "JZS147"//GS30094-97
};
var Gs1 = {
  BD: "JZS147"//GS30094-97 BD is so common
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
  BM: "USF5#", //PROJ 1 14 17
  CL: "USF45",
  CM: "USF5#", //PROJ500 1 14 17
  DL: "USF46",
  GL: "USF41",
  DU: "UVF46",
  EU: "UVF5#", //PROJ Hybrid#
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
  BC: "GYL15", //10-15rxh
  BG: "GYL25", //16-~20rxh
  BZ: "GGL25", //16-~20rx
  BK: "GGL15", //10-15rx
  GA: "MCU33", //04-06rxFWD
  GF: "MCU10", //99-03rxFWD
  GK: "GSU30", //07-09rxFWD
  GW: "MHU33", //rx400h
  HA: "MCU38", //04-06rx
  HF: "MCU15", //99-03rx
  HK: "GSU35", //07-09rx
  HW: "MHU38", //rx400h
  ZB: "GYL10", //10-15rxFWD
  ZF: "GYL20", //16-20rxFWD
  ZK: "GGL10", //10-15rxFWD
  ZZ: "GGL20" // 16-20rxFWD
};
var Sc = {
  CD: "JZZ31",
  CH: "UZZ30",
  JZ: "JZZ31",
  FN: "UZZ40",
  UZ: "UZZ30"
};
var Lc = { //2018MY
  UP: "UZZ50" // guessing~
};
//


// makes it all work
// this is simplified from original function 7-9-2016

var thiscar = { 
  modelprefix: "",
  modelkatacode: "",
  wmi: "",
  vds1: "",
  vds2: "",
  vin: ""
};

function decodeVinNo(vin) {
    var wmi = vin.toString().substring(0, 3);
    var vin678 = vin.toString().substring(5, 8);
    var vin45 = vin.toString().substring(3, 5);
    var thisCarsWmi = veh[wmi];// the intitail direction it takes - wolrd manufacturer index
  if (!thisCarsWmi) 
  { ///COULD Expound on this logic some.. nah!
    return(vin); // PUNTS if its not a valid vin to decode - vehicle identification number
    console.log(vin.toString() + " errors out during decodeVinNo.");
 }  else {
        thiscar.vin = vin;          // moved this up trying to catch errors. 
        console.log(vin.toString() + " errors out during else of decodeVinNo.");
    var thisCarsBodystyle = window[thisCarsWmi][vin678]; //pv or mpv with 3 digits in
    var thisCarsvds1 = window[thisCarsBodystyle][vin45]; //engine designation with known bodystyle

        thiscar.wmi = wmi; // not thisCarsWmi ;  that variable drives driection.
        thiscar.vds1 = vin45;
        thiscar.vds2 = vin678;
        thiscar.modelprefix = thisCarsBodystyle;
        thiscar.modelkatacode = thisCarsvds1;
}
console.log(thiscar.modelkatacode + " Successful decodeVinNo");//put it to the screen for debugging
return(thiscar.modelkatacode); // This is the output

}
 
 
