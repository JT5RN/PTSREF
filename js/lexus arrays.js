var dw_id = [  //DISPLAY WMI IDENTIFICATION 
"JT6/JTJ",//0
"2T2/JTJ",//1
"____JTJ",//2
"____JT6",//3
"____JTH",//4
"____JT8",//5
"58A/JTH"//6 //2016-19 58abk1gg

];

var ty_sz = [ // defined in tyr_id - each tyr_id has many ty_sz's

"235-60R18 X4",//0
"235-55R18 X4",//1
"215-55R17 X4",//2
"235-55R19 X4",//3
"215-45R17 X4",//4
"235-45R18 X4",//5
"235-50R20 X4",//6
"235-65R18 X4",//7
"265-65R17 X4",//8
"265-60R18 X4",//9
"225-65R17 X4",//10
"225-70R16 X4",//11
"225-60R18 X4",//12
"275-70R16 X4",//13
"275-60R18 X4",//14
"285-50R20 X4",//15
"205-65R15 X4",//16
"205-60R16 X4",//17
"215-60R16 X4",//18
"225-45R18 X4",//19
"225-50R17 X4",//20
"245-40R18 X4",//21
"225-55R16 X4",//22
"235-45R17 X4",//23
"225-40R18 X2frt",//24 // IS TIRES
"255-40R18 X2rear",//25
"255-35R18 X2rear",//26
"235-45R18 x4",//27
"245-45R19 x4",//28
"245-45R17 x2rear",//29 RWD BASE CONVERT
"225-45R17 x2rear",//30 awd17
"235-50R18 x4",//31 LS460? I guess. 1-18-17
"235-40R19 x4",//32 GS350F-Sport 
"235-40R20",//33 LCh f/r
"275-35R20",//34 LCh f/r
"235-40R21",//35 LCh f/r
"275-35R21",//36 LCh f/r 2/8/17
"225-45R17 x4",//37 for is250
];

var tyr_id = [ //the map of what cars get what size tires defined in the main hash. order is important!// tire definitions can be cleaned up as needed! to do later
{'id': 0, 'size': ty_sz[11]},  // Rx300
{'id': 1, 'size': ty_sz[1] + " or " + ty_sz[10]},
{'id': 2, 'size': ty_sz[0] + " or " + ty_sz[3]},
{'id': 3, 'size': ty_sz[6] + " or " + ty_sz[7]},
{'id': 4, 'size': ty_sz[8]},
{'id': 5, 'size': ty_sz[9]},
{'id': 6, 'size': ty_sz[12] + " or " + ty_sz[10]},
{'id': 7, 'size': ty_sz[13] + " or " + ty_sz[14]},//"275-70R16 OR 275-60R18"},
{'id': 8, 'size': ty_sz[15]},
{'id': 9, 'size': "Look at DoorJamb"},
{'id': 10,'size': ty_sz[18] + " or " + ty_sz[2]},//"215-60R16 OR 215-55R17"},
{'id': 11,'size': ty_sz[2] + " or " + ty_sz[19]},//"215-55R17 OR 225-45R18"},
{'id': 12,'size': ty_sz[4]},
{'id': 13,'size': "UN-KNOWN"},
{'id': 14,'size': ty_sz[24] + " and " + ty_sz[25] + " or " + ty_sz[30] + " and " + ty_sz[29]},//convertible
{'id': 15,'size': ty_sz[24] + " and " + ty_sz[26] + " OR " + ty_sz[37]},// 1d2 is250
{'id': 16,'size': ty_sz[18] + ", " + ty_sz[22] + " or " + ty_sz[23]},
{'id': 17,'size': ty_sz[20] + " and " + ty_sz[21]},
{'id': 18,'size': ty_sz[27] + " or " + ty_sz[28]}, 
{'id': 19,'size': "205-65R16 or 225-60R16"},
{'id': 20,'size': "225-60R16 or 225-55R17 or 245-45R18"},//LS TIRES
{'id': 21,'size': ty_sz[32] + " or " + ty_sz[5]},
{'id': 22,'size': "245-40R18"},    
{'id': 23,'size': "275-35R19 AND 295-35R19"},    
{'id': 24,'size': ty_sz[4]},
{'id': 25,'size': ty_sz[30] + " and " + ty_sz[29]},
{'id': 26,'size': ty_sz[30] + " and " + ty_sz[29] + " OR " + " awd " + ty_sz[30]},//06-12is
{'id': 27,'size': ty_sz[33] + " and " + ty_sz[34] + " OR " + ty_sz[35] + " and " + ty_sz[36]}
];




var wyp_id = [
{'id': 0, 'sizes': displayWipers(26, 22)},
{'id': 1, 'sizes': displayWipers(24, 19)},
{'id': 2, 'sizes': displayWipers("26PTB", "22PTB")}, 
{'id': 3, 'sizes': displayWipers(24, 21)},
{'id': 4, 'sizes': displayWipers(26, 18)},
{'id': 5, 'sizes': displayWipers(22, 21)},
{'id': 6, 'sizes': displayWipers("26PTB2", "16PTB2")},
{'id': 7, 'sizes': displayWipers(24, 22)},
{'id': 8, 'sizes': displayWipers(24, 20)},
{'id': 9, 'sizes': displayWipers(22, 20)},
{'id':10, 'sizes': displayWipers(24, 18)},
{'id':11, 'sizes': displayWipers(24, 16)},
{'id':12, 'sizes': displayWipers(24, 17)},
{'id':13, 'sizes': displayWipers(26, 22)},
{'id':14, 'sizes': displayWipers(21, 19)},
{'id':15, 'sizes': displayWipers(22, 18)}
];


function displayWipers(left,right){
    return("Left:_" + left + " Right:_" + right);

};


var eoc = ['~5.5(0)', '~6.0(1)','~6.2(2)','~6.3(3)', '~7.2(4)', '~9.8+']
var eog = ['0-20 Synthetic', '5-30 Conventional', '5-30 Synthetic'];

var en_id_oil = [eoc[3] + "qts " + eog[1] + '(*~~0)', // 6.3 5-30conv
                    eoc[0] + "qts " + eog[1] + '(*~1)',// 5.5 5-30conv
                    eoc[3] + "qts " + eog[1] + '(*~2)',
                    eoc[2] + "qts " + eog[1] + '(*~3)',
                    eoc[1] + "qts " + eog[1] + '(*~4)',
                    eoc[5] + "qts " + eog[0] + '(*~~5)' + "check dipstick color sometimes",
                    eoc[3] + "qts " + eog[0] + '(*~6)',
                    eoc[0] + "qts " + eog[0] + '(*~7)',
                    

                    ];

var pn04152 = ['04152-YZZA1','04152-YZZA4','04152-YZZA5','04152-YZZA6','90915-YZZD1','90915-YZZD3','90915-YZZF1'];
var pn87139 = ['87139-YZZ10', '87139-<B>30100</B>', '87139-<B>YZZ03</B>', '87139-<B><LARGE>YZZ01</LARGE></B>', '87139-48020-83', '87139-<B>0E040</B>'];// formerly caf_id
var pn00544 = ['00544-MF24F_575','00544-MF240_575','00544-MF27F_710','00544-MF70_750', '00544-MFH50', 'H6','00544-MF51R', 'Unique# with small posts', 'particular 28100'];
var pn16100 = ['16100-09442','16100-29085','16100-39436','16100-59275-83','16100-49846'];
var pn17801 = ['17801-0P051','17801-0H010','17801-AD010','17801-31110','17801-0V020','17801-0P070','17801-31170','17801-38051','17801-20050','17801-50040','17801-37021','17801-50030','17801-50060','17801-38030','17801-03010','17801-46080', 'Unknown','17801-07020','17801-38021'];


var pn43512 = ["43512-06150","43512-0E021","43512-0E030","43512-30310","43512-30320","43512-30350","43512-47040","43512-48031","43512-48081","43512-50220","43512-50240","43512-50250","43512-60151","43512-60180","43512-60191"];

var pn04465 = ["04465-0E010","04465-30340","04465-30450","04465-30480","04465-30510","04465-33280","04465-33471","04465-35290","04465-48100","04465-50240","04465-50260","04465-53040",'04465-60280','04465-60320'];
var pn04947 = ['04947-0E010','04947-22050','04947-22070','04947-30140','04947-30150','04947-33180','04947-33260','04947-35050','04947-42050','04947-48050','04947-50120','04947-53020','04947-60140'];
var pn04945 = ['04945-06130','04945-0E020','04945-0E040','04945-30170','04945-30180','04945-30350','04945-33070','04945-35120','04945-50080','04945-53050','04945-60080','04945-60090'];


var pn42431 = ["42431-30280","42431-30290","42431-30300","42431-30310","42431-33100","42431-33140","42431-33150","42431-42060","42431-48041","42431-50070","42431-50100","42431-60201","42431-60290","42431-60311"];

var pn04466 = ['04466-06090','04466-0E010','04466-22190','04466-30281','04466-33140','04466-33200','04466-48060','04466-50091','04466-50160','04466-53010','04466-60090','04466-60140'];
var pn04946 = ['04946-06130','04946-0E030','04946-22090','04946-30100','04946-30110','04946-30210','04946-33020','04946-33070','04946-48060','04946-50100','04946-60120','04946-60141'];
var pn04948 = ['04948-06031','04948-30210','04948-30220','04948-30230','04948-33020','04948-48020','04948-50060'];

var fb1 = [{'frontpads': pn04465[0],'frontrotors':pn43512[2],'frontshims':pn04945[2], 'frontfits':pn04947[0]}


];




var en_id = [{'id': 0, 'name': '1MZ-FE', 'displacement': '3.0L', 'oilfilter': pn04152[4], 'oil': en_id_oil[1],'v16100': pn16100[1]},
            {'id':  1, 'name': '1FZ-FE', 'displacement': '4.5L', 'oilfilter': pn04152[5], 'oil': en_id_oil[1],'v16100':"idk1"},
            {'id':  2, 'name': '1LR-GUE','displacement': '4.8L', 'oilfilter': '04909-45010', 'oil': '15+Quarts Mobil 1 (**)','v16100':"idk2"},//lfa
            {'id':  3, 'name': '1MZ-FE', 'displacement': '3.0L', 'oilfilter': pn04152[4], 'oil': en_id_oil[1],'v16100':pn16100[1]}, //not used
            {'id':  4, 'name': '1UR-FSE','displacement': '4.6L', 'oilfilter': pn04152[2], 'oil': en_id_oil[5],'v16100':"idk3"},
            {'id':  5, 'name': '1UZ-FE', 'displacement': '4.0L', 'oilfilter': pn04152[5], 'oil': en_id_oil[3],'v16100':pn16100[3]},
            {'id':  6, 'name': '2AR-FXE','displacement':'2.8L(H)','oilfilter':pn04152[0], 'oil': en_id_oil[4],'v16100':"idk4"},//NX/ES300Hybrid
            {'id':  7, 'name': '2AZ-FXE','displacement':'2.4L(H)','oilfilter':pn04152[6], 'oil': en_id_oil[4],'v16100':"idk5"},//HShit
            {'id':  8, 'name': '2GR-FE(0)', 'displacement': '3.5L', 'oilfilter': pn04152[0], 'oil': en_id_oil[2],'v16100':pn16100[0]},// (1) (Transverse) //GSU3#
            {'id':  9, 'name': '2GR-FSE(1)','displacement': '3.5L', 'oilfilter': pn04152[2], 'oil': en_id_oil[0],'v16100':pn16100[2]},// Gas 350 (2) (Longitudinal)
            {'id': 10, 'name': '2GR-FXE(2)','displacement': '3.5L', 'oilfilter': pn04152[0], 'oil': en_id_oil[0],'v16100':pn16100[2]},
            {'id': 11, 'name': '2GR-FKS(3)','displacement': '3.5L', 'oilfilter': pn04152[2], 'oil': en_id_oil[0],'v16100':pn16100[2]}, //(2) long;
            {'id': 12, 'name': '2GR-FXS(4)','displacement': '3.5L', 'oilfilter': pn04152[0], 'oil': en_id_oil[6],'v16100':"IDKz"},  //GYL20
            {'id': 13, 'name': '2JZ-GE', 'displacement': '3.0L', 'oilfilter': pn04152[4], 'oil': en_id_oil[1],'v16100':pn16100[4    ]},// Straight 6
            {'id': 14, 'name': '2UR-GSE','displacement': '5.0L', 'oilfilter': pn04152[1], 'oil': 'idk.','v16100':"idk8"},
            {'id': 15, 'name': '2UR-FSE','displacement':'5.0L(H)','oilfilter':pn04152[1], 'oil': en_id_oil[0],'v16100':"idk9"},// Hybrid 600hL
            {'id': 16, 'name': '2UZ-FE', 'displacement': '4.7L', 'oilfilter': pn04152[5], 'oil': en_id_oil[3],'v16100':pn16100[3]},
            {'id': 17, 'name': '2VZ-FE', 'displacement': '2.5L', 'oilfilter': pn04152[4], 'oil': en_id_oil[1],'v16100':"idk10"},
            {'id': 18, 'name': '2ZR-FXE','displacement':'1.8L(H)','oilfilter':pn04152[3], 'oil': en_id_oil[4],'v16100':"idk11"[1]},
            {'id': 19, 'name': '3GR-FSE(!)','displacement': '3.0L', 'oilfilter': pn04152[2], 'oil': en_id_oil[0],'v16100':pn16100[2]},// 2006GS Only motor
            {'id': 20, 'name': '3MZ-FE', 'displacement': '3.3L', 'oilfilter': pn04152[4], 'oil': en_id_oil[1],'v16100':pn16100[1]},
            {'id': 21, 'name': '3UR-FE', 'displacement': '5.7L', 'oilfilter': pn04152[1], 'oil': en_id_oil[5],'v16100':"idk13"},
            {'id': 22, 'name': '3UZ-FE', 'displacement': '4.3L', 'oilfilter': pn04152[5], 'oil': en_id_oil[3],'v16100':pn16100[3]},
            {'id': 23, 'name': '3VZ-FE', 'displacement': '3.0L', 'oilfilter': pn04152[4], 'oil': en_id_oil[1],'v16100':pn16100[1]},
            {'id': 24, 'name': '4GR-FSE','displacement': '2.5L', 'oilfilter': pn04152[2], 'oil': en_id_oil[3],'v16100':pn16100[2]},
            {'id': 25, 'name': '8AR-FTS','displacement': '2.0T', 'oilfilter': pn04152[0], 'oil': en_id_oil[4],'v16100':"idk14"},
            {'id': 26, 'name': '8AR-FXE','displacement': '2.0T', 'oilfilter': pn04152[0], 'oil': en_id_oil[4],'v16100':"idk15"},
            {'id': 27, 'name': '2GR-FKS(5)','displacement': '3.5L', 'oilfilter': pn04152[0], 'oil': en_id_oil[4],'v16100':"idk16"},
            {'id': 28, 'name': '8GR-FKS','displacement': '4.6L(H)(??)', 'oilfilter': pn04152[0], 'oil': en_id_oil[6],'v16100':"idk17"},// LCh
            {'id': 29, 'name':'2GR-FKS(6)','displacement': '3.5L', 'oilfilter': pn04152[0], 'oil': en_id_oil[6],'v16100':pn16100[2]},//this is how//2016-17+gs350RWDMFSOB
            {'id': 30, 'name': '3MZ-FE', 'displacement':'3.3L(H)','oilfilter':pn04152[4], 'oil': en_id_oil[7],'v16100':pn16100[1]},//fixes '08mybrid'
            {'id': 31, 'name': '2GR-FE(7)', 'displacement': '3.5L', 'oilfilter': pn04152[0], 'oil': en_id_oil[6],'v16100':pn16100[0]},// (1.1) (Transverse) //Dup for oil purposes 1-17
            {'id': 32, 'name': '2GR-FSE(8)','displacement': '3.5L', 'oilfilter': pn04152[2], 'oil': "idk.",'v16100':pn16100[2]},// Gas 350 (2) (Longitudinal 2013GS+)
            {'id': 33, 'name': '3MZ-FE', 'displacement': '3.3(H)', 'oilfilter': pn04152[4], 'oil': "IF MODEL YEAR" + myr(2006,2007) + en_id_oil[1] + "IF its a " + myr(2008,2008) + en_id_oil[7],'v16100':pn16100[1]},







];

var lexusRx = [
{'wmi': dw_id[0], 'vds': 'GF10U', 'model': 'MCU10', 'name': 'RX300', 'yrs': myr(1999,2003), 'eng': en_id[0], 'bat': pn00544[0], 'eaf': pn17801[14], 'caf': pn87139[4], 'wyp': wyp_id[3], 'tyr': tyr_id[0]},
{'wmi': dw_id[0], 'vds': 'HF10U', 'model': 'MCU15', 'name': 'RX300', 'yrs': myr(1999,2003), 'eng': en_id[0], 'bat': pn00544[0], 'eaf': pn17801[14], 'caf': pn87139[4], 'wyp': wyp_id[3], 'tyr': tyr_id[0]},

{'wmi': dw_id[1], 'vds': 'GA31U', 'model': 'MCU33', 'name': 'RX330', 'yrs': myr(2004,2006), 'eng': en_id[20],'bat': pn00544[0], 'eaf': pn17801[1], 'caf': pn87139[2], 'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[1], 'vds': 'HA31U', 'model': 'MCU38', 'name': 'RX330', 'yrs': myr(2004,2006), 'eng': en_id[20],'bat': pn00544[0], 'eaf': pn17801[1], 'caf': pn87139[2], 'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[1], 'vds': 'GK31U', 'model': 'GSU30', 'name': 'RX350', 'yrs': myr(2007,2009), 'eng': en_id[8], 'bat': pn00544[0], 'eaf': pn17801[1], 'caf': pn87139[2],  'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[1], 'vds': 'HK31U', 'model': 'GSU35', 'name': 'RX350', 'yrs': myr(2007,2009), 'eng': en_id[8], 'bat': pn00544[0], 'eaf': pn17801[1], 'caf': pn87139[2],  'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[2], 'vds': 'GW31U', 'model': 'MHU33', 'name': 'RX400H','yrs': myr(2006,2008), 'eng': en_id[33],'bat': pn00544[6], 'eaf': pn17801[8], 'caf': pn87139[2],'wyp': wyp_id[0], 'tyr': tyr_id[1]},
//{'wmi': dw_id[2], 'vds': 'GW31U', 'model': 'MHU33', 'name': 'RX400H','yrs': myr(2008,2008), 'eng': en_id[30],'dln':dl_id[1], 'bdy': bs_id[7], 'bat': pn00544[6], 'eaf': pn17801[8], 'caf': pn87139[2],'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[2], 'vds': 'HW31U', 'model': 'MHU38', 'name': 'RX400H','yrs': myr(2006,2008), 'eng': en_id[33],'bat': pn00544[6], 'eaf': pn17801[8], 'caf': pn87139[2],'wyp': wyp_id[0], 'tyr': tyr_id[1]},
//{'wmi': dw_id[2], 'vds': 'HW31U', 'model': 'MHU38', 'name': 'RX400H','yrs': myr(2008,2008), 'eng': en_id[30],'dln':dl_id[0], 'bdy': bs_id[8], 'bat': pn00544[6], 'eaf': pn17801[8], 'caf': pn87139[2],'wyp': wyp_id[0], 'tyr': tyr_id[1]},

{'wmi': dw_id[1], 'vds': 'ZK1BA', 'model': 'GGL10', 'name': 'RX350', 'yrs': myr(2010,2015), 'eng': en_id[31],'bat': pn00544[0], 'eaf': pn17801[0], 'caf': pn87139[0],  'wyp': wyp_id[0], 'tyr': tyr_id[2]},
{'wmi': dw_id[1], 'vds': 'BK1BA', 'model': 'GGL15', 'name': 'RX350', 'yrs': myr(2010,2015), 'eng': en_id[31],'bat': pn00544[0], 'eaf': pn17801[0], 'caf': pn87139[0],  'wyp': wyp_id[0], 'tyr': tyr_id[2]},
{'wmi': dw_id[1], 'vds': 'ZB1BA', 'model': 'GYL10', 'name': 'RX450H','yrs': myr(2010,2015), 'eng': en_id[31],'bat': pn00544[8], 'eaf': pn17801[5],'caf': pn87139[0], 'wyp': wyp_id[0], 'tyr': tyr_id[2]},
{'wmi': dw_id[1], 'vds': 'BC1BA', 'model': 'GYL15', 'name': 'RX450H','yrs': myr(2010,2015), 'eng': en_id[31],'bat': pn00544[8], 'eaf': pn17801[5], 'caf': pn87139[0],'wyp': wyp_id[0],'tyr': tyr_id[2]},

{'wmi': dw_id[1], 'vds': 'BZMCA', 'model': 'GGL25', 'name': 'RX350', 'yrs': myr(2016,2020), 'eng': en_id[12],'bat': pn00544[0], 'eaf': pn17801[0], 'caf': pn87139[5], 'wyp': wyp_id[2],'tyr': tyr_id[3]},
{'wmi': dw_id[1], 'vds': 'BGMCA', 'model': 'GYL25', 'name': 'RX450H','yrs': myr(2016,2020), 'eng': en_id[12],'bat': pn00544[8], 'eaf':'17801-0P090','caf': pn87139[5],'wyp':wyp_id[2],'tyr': tyr_id[3]}];//fwd missing

var lexusGx = [
{'wmi': dw_id[2], 'vds': 'BT20X', 'model': 'UZJ120', 'name': 'GX470','yrs': myr(2003,2009), 'eng': en_id[16],'bat': pn00544[2], 'eaf': pn17801[9],'caf': pn87139[2], 'wyp': wyp_id[5],'tyr': tyr_id[4]},
{'wmi': dw_id[2], 'vds': 'BM7FX', 'model': 'UZJ150', 'name': 'GX460','yrs': myr(2010,2017), 'eng': en_id[4], 'bat': pn00544[0], 'eaf': pn17801[7],'caf': pn87139[0], 'wyp': wyp_id[5],'tyr': tyr_id[5]},
{'wmi': dw_id[2], 'vds': 'JM7FX', 'model': 'UZJ150', 'name': 'GX460','yrs': myr(2010,2017), 'eng': en_id[4], 'bat': pn00544[0], 'eaf': pn17801[7],'caf': pn87139[0], 'wyp': wyp_id[5],'tyr': tyr_id[5]}];

var lexusNx = [
{'wmi': dw_id[2], 'vds': 'YARBZ', 'model': 'AGZ10', 'name': 'NX200T','yrs': myr(2015,2020), 'eng': en_id[25],'bat': pn00544[0], 'eaf': pn17801[0],'caf': pn87139[0], 'wyp': wyp_id[6],'tyr': tyr_id[6]},
{'wmi': dw_id[2], 'vds': 'BARBZ', 'model': 'AGZ15', 'name': 'NX200T','yrs': myr(2015,2020), 'eng': en_id[25],'bat': pn00544[0], 'eaf': pn17801[0],'caf': pn87139[0], 'wyp': wyp_id[6],'tyr': tyr_id[6]},
{'wmi': dw_id[2], 'vds': 'YWRBZ', 'model': 'AYZ10', 'name': 'NX300H','yrs': myr(2015,2020), 'eng': en_id[6], 'bat': pn00544[8], 'eaf': pn17801[10],'caf': pn87139[0], 'wyp': wyp_id[6],'tyr': tyr_id[6]},
{'wmi': dw_id[2], 'vds': 'BJRBZ', 'model': 'AYZ15', 'name': 'NX300H','yrs': myr(2015,2020), 'eng': en_id[6], 'bat': pn00544[8], 'eaf': pn17801[10],'caf': pn87139[0], 'wyp': wyp_id[6],'tyr': tyr_id[6]}];

var lexusLx = [
{'wmi': dw_id[0], 'vds': 'HT00W', 'model': 'UZJ100', 'name': 'LX470','yrs': myr(1998,2007), 'eng': en_id[16], 'bat': pn00544[2], 'eaf': pn17801[9],'caf':'2x88568-60010','wyp': wyp_id[7],'tyr': tyr_id[7]},
{'wmi': dw_id[2], 'vds': 'HY00W', 'model': 'URJ201', 'name': 'LX570','yrs': myr(2008,2009), 'eng': en_id[21], 'bat': pn00544[2], 'eaf': pn17801[13], 'caf': pn87139[0], 'wyp': wyp_id[7],'tyr': tyr_id[8]},
{'wmi': dw_id[2], 'vds': 'HY7AX', 'model': 'URJ201', 'name': 'LX570','yrs': myr(2010,2020), 'eng': en_id[21], 'bat': pn00544[2], 'eaf': pn17801[13], 'caf': pn87139[0], 'wyp': wyp_id[7],'tyr': tyr_id[8]},
{'wmi': dw_id[3], 'vds': 'HJ88J', 'model': 'FZJ80',  'name': 'LX450','yrs': myr(1995,1997), 'eng': en_id[1],  'bat': pn00544[2], 'eaf': 'IDK','caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[7]}];

var lexusEs = [
{'wmi': dw_id[5], 'vds': 'VV22T', 'model': 'VZV21', 'name': 'ES250','yrs': myr(1990,1991), 'eng': en_id[17],'bat': pn00544[0], 'eaf': pn17801[15],'caf': 'IDK', 'wyp': wyp_id[14],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'VK13T', 'model': 'VCV10', 'name': 'ES300','yrs': myr(1992,1993), 'eng': en_id[23], 'bat': pn00544[0], 'eaf': pn17801[14],'caf': 'IDK', 'wyp': wyp_id[14],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'GK13T', 'model': 'MCV10', 'name': 'ES300','yrs': myr(1994,1995), 'eng': en_id[23],'bat': pn00544[0], 'eaf': pn17801[14],'caf': 'IDK', 'wyp': wyp_id[14],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'BF12G', 'model': 'MCV10', 'name': 'ES300','yrs': myr(1996,1996), 'eng': en_id[0], 'bat': pn00544[0], 'eaf': pn17801[14],'caf': 'IDK', 'wyp': wyp_id[14],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'BF22G', 'model': 'MCV20', 'name': 'ES300','yrs': myr(1997,1997), 'eng': en_id[0],  'bat': pn00544[0], 'eaf': pn17801[14],'caf': 'IDK', 'wyp': wyp_id[15],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'BF28G', 'model': 'MCV20', 'name': 'ES300','yrs': myr(1998,2001), 'eng': en_id[0],  'bat': pn00544[0], 'eaf': pn17801[14],'caf': 'IDK', 'wyp': wyp_id[15],'tyr': tyr_id[9]},
{'wmi': dw_id[4], 'vds': 'BF30G', 'model': 'MCV30', 'name': 'ES300','yrs': myr(2002,2003), 'eng': en_id[0],  'bat': pn00544[0], 'eaf': pn17801[1],'caf': pn87139[2], 'wyp': wyp_id[8],'tyr': tyr_id[10]},
{'wmi': dw_id[4], 'vds': 'BA30G', 'model': 'MCV31', 'name': 'ES330','yrs': myr(2004,2006), 'eng': en_id[20], 'bat': pn00544[0], 'eaf': pn17801[1],'caf': pn87139[2], 'wyp': wyp_id[8],'tyr': tyr_id[10]},
{'wmi': dw_id[4], 'vds': 'BJ46G', 'model': 'GSV40', 'name': 'ES350','yrs': myr(2007,2009), 'eng': en_id[8],  'bat': pn00544[0], 'eaf': pn17801[2],'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[11]},
{'wmi': dw_id[4], 'vds': 'BK1EG', 'model': 'GSV40', 'name': 'ES350','yrs': myr(2010,2012), 'eng': en_id[8], 'bat': pn00544[0], 'eaf': pn17801[2],'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[11]},
{'wmi': dw_id[4], 'vds': 'BW1GG', 'model': 'AVV60', 'name': 'ES300H','yrs':myr(2013,2018), 'eng': en_id[6], 'bat': pn00544[8], 'eaf': pn17801[4],'caf': pn87139[0], 'wyp': wyp_id[4],'tyr': tyr_id[11]},
{'wmi': dw_id[6], 'vds': 'BK1GG', 'model': 'GSV60', 'name': 'ES350','yrs': myr(2013,2018), 'eng': en_id[31], 'bat': pn00544[0], 'eaf': pn17801[0],'caf': pn87139[0], 'wyp': wyp_id[4],'tyr': tyr_id[11]}];
    
var lexusIs = [
{'wmi': dw_id[4], 'vds': 'BD182', 'model': 'JCE10', 'name': 'IS300','yrs': myr(2001,2001), 'eng': en_id[13], 'bat': pn00544[1], 'eaf': pn17801[15], 'caf': pn87139[4], 'wyp': wyp_id[9],'tyr': tyr_id[12]},
{'wmi': dw_id[4], 'vds': 'BD192', 'model': 'JCE10', 'name': 'IS300','yrs': myr(2002,2005), 'eng': en_id[13], 'bat': pn00544[1], 'eaf': pn17801[15], 'caf': pn87139[4], 'wyp': wyp_id[9],'tyr': tyr_id[12]},
{'wmi': dw_id[4], 'vds': 'ED192', 'model': 'JCE10', 'name':'IS300SC','yrs':myr(2002,2005), 'eng': en_id[13], 'bat': pn00544[1], 'eaf': pn17801[15], 'caf': pn87139[4], 'wyp': wyp_id[9],'tyr': tyr_id[25]},

{'wmi': dw_id[4], 'vds': 'BK262', 'model': 'GSE20', 'name': 'IS250','yrs': myr(2006,2009), 'eng': en_id[24],'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[26]},
{'wmi': dw_id[4], 'vds': 'BE262', 'model': 'GSE21', 'name': 'IS350','yrs': myr(2006,2009), 'eng': en_id[9], 'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[26]},
{'wmi': dw_id[4], 'vds': 'CK262', 'model': 'GSE25', 'name': 'IS250','yrs': myr(2006,2009), 'eng': en_id[24],'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[26]},
{'wmi': dw_id[4], 'vds': 'BP262', 'model': 'USE20', 'name': 'IS-F', 'yrs': myr(2008,2009), 'eng': en_id[14],'bat': pn00544[1], 'eaf':pn17801[18], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[23]},
{'wmi': dw_id[4], 'vds': 'BP5C2', 'model': 'USE20', 'name': 'IS-F', 'yrs': myr(2010,2013), 'eng': en_id[14],'bat': pn00544[1], 'eaf':pn17801[18], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[23]},
{'wmi': dw_id[4], 'vds': 'BF5C2', 'model': 'GSE20', 'name': 'IS250','yrs': myr(2010,2013), 'eng': en_id[24],'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'BE5C2', 'model': 'GSE21', 'name': 'IS350','yrs': myr(2010,2013), 'eng': en_id[9], 'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'CF5C2', 'model': 'GSE25', 'name': 'IS250','yrs': myr(2010,2013), 'eng': en_id[24],'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'FF2C2', 'model': 'GSE20', 'name':'IS250-C','yrs':myr(2010,2015), 'eng': en_id[24],'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'FE2C2', 'model': 'GSE21', 'name':'IS350-C','yrs':myr(2010,2015), 'eng': en_id[9], 'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'CE5C2', 'model': 'GSE26', 'name': 'IS350', 'yrs':myr(2010,2013), 'eng': en_id[9], 'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[26]},

{'wmi': dw_id[4], 'vds': 'BF1D2', 'model': 'GSE30', 'name': 'IS250','yrs': myr(2014,2020), 'eng': en_id[24],'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]},
{'wmi': dw_id[4], 'vds': 'CF1D2', 'model': 'GSE35', 'name': 'IS250','yrs': myr(2014,2020), 'eng': en_id[24],'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]},
{'wmi': dw_id[4], 'vds': 'BE1D2', 'model': 'GSE31', 'name': 'IS350','yrs': myr(2014,2020), 'eng': en_id[9], 'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]},
{'wmi': dw_id[4], 'vds': 'CE1D2', 'model': 'GSE36', 'name': 'IS350','yrs': myr(2014,2020), 'eng': en_id[9], 'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]},
{'wmi': dw_id[4], 'vds': 'CM1D2', 'model': 'GSE37', 'name': 'IS300','yrs': myr(2016,2020), 'eng': en_id[9], 'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]},
{'wmi': dw_id[4], 'vds': 'BA1D2', 'model': 'ASE30', 'name':'IS200T','yrs': myr(2016,2020), 'eng': en_id[25],'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]}];

var lexusGs = [
{'wmi': dw_id[5], 'vds': 'JS47E', 'model': 'JZS147', 'name': 'GS300','yrs': myr(1994,1994), 'eng': en_id[13],  'bat': pn00544[1], 'eaf': '17801-50020', 'caf': 'idk', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'BD42S', 'model': 'JZS147', 'name': 'GS300','yrs': myr(1995,1997), 'eng': en_id[13], 'bat': pn00544[1], 'eaf': '17801-50020', 'caf': 'idk', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
    
{'wmi': dw_id[5], 'vds': 'BD68S', 'model': 'JZS160', 'name': 'GS300','yrs': myr(1998,1999), 'eng': en_id[13], 'bat': pn00544[1], 'eaf': pn17801[15], 'caf': 'idk', 'wyp': wyp_id[8],'tyr': tyr_id[16]},
{'wmi': dw_id[5], 'vds': 'BH68X', 'model': 'UZS160', 'name': 'GS400','yrs': myr(1998,2000), 'eng': en_id[5],  'bat': pn00544[1], 'eaf': pn17801[11], 'caf': 'idk', 'wyp': wyp_id[8],'tyr': tyr_id[16]},
{'wmi': dw_id[4], 'vds': 'BD69S', 'model': 'JZS160', 'name': 'GS300','yrs': myr(2000,2005), 'eng': en_id[13], 'bat': pn00544[1], 'eaf': pn17801[15], 'caf': 'idk', 'wyp': wyp_id[8],'tyr': tyr_id[16]},
{'wmi': dw_id[4], 'vds': 'BL69S', 'model': 'UZS161', 'name': 'GS430','yrs': myr(2001,2005), 'eng': en_id[22], 'bat': pn00544[1], 'eaf': pn17801[12], 'caf': 'idk', 'wyp': wyp_id[8],'tyr': tyr_id[16]},
    
{'wmi': dw_id[4], 'vds': 'BH96S', 'model': 'GRS190', 'name': 'GS300','yrs': myr(2006,2006), 'eng': en_id[19], 'bat': pn00544[1], 'eaf': pn17801[12], 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'CH96S', 'model': 'GRS195', 'name': 'GS300','yrs': myr(2006,2006), 'eng': en_id[19], 'bat': pn00544[1], 'eaf': pn17801[12], 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BE96S', 'model': 'GRS191', 'name': 'GS350','yrs': myr(2006,2006), 'eng':  en_id[9], 'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'CE96S', 'model': 'GRS196', 'name': 'GS350','yrs': myr(2007,2009), 'eng':  en_id[9], 'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BN96S', 'model': 'UZS190', 'name': 'GS430','yrs': myr(2006,2007), 'eng': en_id[22], 'bat': pn00544[1], 'eaf': pn17801[12], 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BE1KS', 'model': 'GRS191', 'name': 'GS350','yrs': myr(2010,2011), 'eng':  en_id[9], 'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'CE1KS', 'model': 'GRS196', 'name': 'GS350','yrs': myr(2010,2011), 'eng':  en_id[9], 'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BC96S', 'model': 'GWS191', 'name':'GS450H','yrs': myr(2007,2009), 'eng': en_id[10], 'bat': pn00544[1], 'eaf': pn17801[12], 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BC1KS', 'model': 'GWS191', 'name':'GS450H','yrs': myr(2010,2011), 'eng': en_id[10], 'bat': pn00544[1], 'eaf': pn17801[12], 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BL96S', 'model': 'URS190', 'name': 'GS460','yrs': myr(2008,2009), 'eng':  en_id[4], 'bat': pn00544[1], 'eaf': '17801-38040', 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BL1KS', 'model': 'URS190', 'name': 'GS460','yrs': myr(2010,2011), 'eng':  en_id[4], 'bat': pn00544[1], 'eaf': '17801-38040', 'caf': pn87139[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
    
{'wmi': dw_id[4], 'vds': 'BA1BL', 'model': 'ARL10', 'name':'GS200T','yrs': myr(2016,2020), 'eng': en_id[25], 'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'BE1BL', 'model': 'GRL10', 'name': 'GS350','yrs': myr(2013,2015), 'eng': en_id[32],   'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'BZ1BL', 'model': 'GRL12', 'name': 'GS350','yrs': myr(2015,2015), 'eng': en_id[32]/*JFCeh? */,'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'BZ1BL', 'model': 'GRL12', 'name': 'GS350','yrs': myr(2016,2017), 'eng': en_id[29]/*/MFSOFB*/,'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'CE1BL', 'model': 'GRL15', 'name': 'GS350','yrs': myr(2013,2015), 'eng': en_id[31],  'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'CZ1BL', 'model': 'GRL16', 'name': 'GS350','yrs': myr(2015,2017), 'eng': en_id[11],  'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'BP1BL', 'model': 'URL10', 'name': 'GS-F', 'yrs': myr(2016,2017), 'eng': en_id[14],  'bat': pn00544[4], 'eaf': pn17801[18], 'caf': pn87139[1], 'wyp': wyp_id[4],'tyr': tyr_id[23]}];

var lexusLs = [
{'wmi': dw_id[5], 'vds': 'UF11E', 'model': 'UCV10', 'name': 'LS400','yrs': myr(1990,1994), 'eng': en_id[5], 'bat': pn00544[2], 'eaf': '17801-50010-83', 'caf': 'dunno.', 'wyp': wyp_id[13],'tyr': tyr_id[19]},
{'wmi': dw_id[5], 'vds': 'UF22E', 'model': 'UCF20', 'name': 'LS400','yrs': myr(1995,1997), 'eng': en_id[5], 'bat': pn00544[0], 'eaf': '17801-50010-83', 'caf': 'not sure', 'wyp': wyp_id[13],'tyr': tyr_id[19]},
{'wmi': dw_id[5], 'vds': 'BH28F', 'model': 'UCF20', 'name': 'LS400','yrs': myr(1998,2000), 'eng': en_id[5], 'bat': pn00544[0], 'eaf': '17801-50010-83', 'caf': 'unclear', 'wyp': wyp_id[13],'tyr': tyr_id[19]},

{'wmi': dw_id[4], 'vds': 'BN30F', 'model': 'UCF30', 'name': 'LS430','yrs': myr(2001,2003), 'eng': en_id[22],'bat': pn00544[0], 'eaf': pn17801[11], 'caf': pn87139[3], 'wyp': wyp_id[11],'tyr': tyr_id[20]},
{'wmi': dw_id[4], 'vds': 'BN36F', 'model': 'UCF30', 'name': 'LS430','yrs': myr(2004,2006), 'eng': en_id[22],'bat': pn00544[0], 'eaf': pn17801[11], 'caf': pn87139[3], 'wyp': wyp_id[11],'tyr': tyr_id[20]},

{'wmi': dw_id[4], 'vds': 'BL46F', 'model': 'USF40', 'name': 'LS460','yrs': myr(2007,2009), 'eng': en_id[4],'bat': pn00544[1], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'BL5EF', 'model': 'USF40', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4],'bat': pn00544[3], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'BL1EF', 'model': 'USF40', 'name': 'LS460','yrs': myr(2007,2009), 'eng': en_id[4],'bat': pn00544[3], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'GL46F', 'model': 'USF41', 'name': 'LS460','yrs': myr(2007,2009), 'eng': en_id[4],'bat': pn00544[3], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'GL1EF', 'model': 'USF41', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4],'bat': pn00544[3], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'GL5EF', 'model': 'USF41', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4],'bat': pn00544[3], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'CL46F', 'model': 'USF45', 'name': 'LS460','yrs': myr(2008,2009), 'eng': en_id[4],'bat': pn00544[3], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'CL5EF', 'model': 'USF45', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4],'bat': pn00544[3], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'DL46F', 'model': 'USF46', 'name': 'LS460','yrs': myr(2007,2009), 'eng': en_id[4],'bat': pn00544[3], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'DL5EF', 'model': 'USF46', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4],'bat': pn00544[3], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'DL1EF', 'model': 'USF46', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4],'bat': pn00544[3], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'DU46F', 'model': 'UVF46', 'name':'LS600HL','yrs':myr(2008,2009), 'eng': en_id[15],'bat':pn00544[8], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'DU1EF', 'model': 'UVF46', 'name':'LS600HL','yrs':myr(2010,2015), 'eng': en_id[15],'bat':pn00544[8], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]}];

var lexusSc = [
{'wmi': dw_id[5], 'vds': 'JZ31C', 'model': 'JZZ31', 'name': 'SC300','yrs': myr(1992,1996), 'eng': en_id[13],  'bat': pn00544[2], 'eaf': pn17801[17], 'caf': 'really',   'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'CD32Z', 'model': 'JZZ31', 'name': 'SC300','yrs': myr(1997,1999), 'eng': en_id[13],  'bat': pn00544[2], 'eaf': pn17801[17], 'caf': 'not',      'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'UZ30C', 'model': 'UZZ30', 'name': 'SC400','yrs': myr(1992,1996), 'eng': en_id[5],   'bat': pn00544[2], 'eaf': pn17801[17], 'caf': 'sure',     'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'CH32Y', 'model': 'UZZ30', 'name': 'SC400','yrs': myr(1997,1999), 'eng': en_id[5],   'bat': pn00544[0], 'eaf': pn17801[16], 'caf': 'ifHasOne', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[4], 'vds': 'FN48Y', 'model': 'UZZ40', 'name': 'SC430','yrs': myr(2001,2006), 'eng': en_id[22],  'bat': pn00544[5], 'eaf': pn17801[12], 'caf': pn87139[3], 'wyp': wyp_id[8],'tyr': tyr_id[22]},
{'wmi': dw_id[4], 'vds': 'FN45Y', 'model': 'UZZ40', 'name': 'SC430','yrs': myr(2007,2009), 'eng': en_id[22],  'bat': pn00544[5], 'eaf': pn17801[12], 'caf': pn87139[3], 'wyp': wyp_id[8],'tyr': tyr_id[22]},
{'wmi': dw_id[4], 'vds': 'FN2EY', 'model': 'UZZ40', 'name': 'SC430','yrs': myr(2010,2010), 'eng': en_id[22],  'bat': pn00544[5], 'eaf': pn17801[12], 'caf': pn87139[3], 'wyp': wyp_id[8],'tyr': tyr_id[22]}];

var lexusRc = [
{'wmi': dw_id[4], 'vds': 'SE5BC', 'model': 'GSC15', 'name': 'RC350','yrs': myr(2015,2020), 'eng': en_id[9],  'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[13],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'HE5BC', 'model': 'GSC10', 'name': 'RC350','yrs': myr(2015,2020), 'eng': en_id[9],  'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[13],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'SM5BC', 'model': 'GSC16', 'name': 'RC300','yrs': myr(2016,2020), 'eng': en_id[11], 'bat': pn00544[1], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[13],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'HP5BC', 'model': 'USC10', 'name': 'RC-F' ,'yrs': myr(2015,2020),  'eng': en_id[14],'bat': pn00544[4], 'eaf': pn17801[18], 'caf': pn87139[1], 'wyp': wyp_id[13],'tyr': tyr_id[23]},
{'wmi': dw_id[4], 'vds': 'HA5BC', 'model': 'ASC10', 'name':'RC200T','yrs': myr(2015,2020), 'eng': en_id[25], 'bat': pn00544[4], 'eaf': pn17801[6], 'caf': pn87139[1], 'wyp': wyp_id[13],'tyr': tyr_id[18]}];

var lexusCt = [
{'wmi': dw_id[4], 'vds':'KD5BH', 'model': 'ZWA10', 'name': 'CT200H','yrs':myr(2011,2017), 'eng': en_id[18],'bat': pn00544[7], 'eaf': pn17801[10], 'caf': pn87139[0], 'wyp': wyp_id[4],'tyr': tyr_id[24]}];

var lexusHs = [
{'wmi': dw_id[4], 'vds':'BB1BA', 'model': 'ANF10', 'name': 'HS250H','yrs':myr(2010,2012), 'eng': en_id[7], 'bat': pn00544[8], 'eaf': pn17801[4], 'caf': pn87139[0], 'wyp': wyp_id[4],'tyr': tyr_id[11]}];

var lexusLFA = [
{'wmi': dw_id[4], 'vds':'HX8BH', 'model': 'LFA10', 'name':  'LFA', 'yrs': myr(2012,2012), 'eng': en_id[2], 'bat': 'idk', 'eaf': 'idk', 'caf': 'IDK', 'wyp': wyp_id[13],'tyr': 'UNK'}];
    
var lexusLc = [ //!
{'wmi': dw_id[4], 'vds':'HP5AY', 'model':'URZ100', 'name': 'LC500', 'yrs': myr(2018,2028), 'eng': en_id[14], 'bat': 'IDK', 'eaf': '17801-31150', 'caf': '87139-11010', 'wyp': wyp_id[4],'tyr': tyr_id[27]},
{'wmi': dw_id[4], 'vds':'HH5AY(?)', 'model':'GRZ100','name':'LC500H','yrs':myr(2018,2028), 'eng': en_id[28],'bat': 'IDK', 'eaf': '17801-31150', 'caf': '87139-11010', 'wyp': wyp_id[4],'tyr': tyr_id[27]}];


var allmodels = [lexusRx, lexusEs, lexusGx, lexusNx, lexusLx, lexusIs, lexusGs, lexusLs, lexusSc, lexusLFA, lexusRc, lexusHs, lexusCt, lexusLc];

var l = allmodels; // l rules.


function getData(v) { // Original call - search box - I give model number, get PrintHTMLVehicleData
    for (i=0; i<l.length; i++) {
        for (var j=0; j < l[i].length; j++) {
            if (l[i][j].model === v) {
                PrintHTMLVehicleData(l[i][j]);
            }if(l[i][j].name === v) {
                PrintHTMLVehicleData(l[i][j]);
            }
        }
    }
} 

function getData2(v) {  // refined searches called from HTML web page // name 0-2 ie  RX LS model 0-3 ie MCU1
    for (i=0; i<l.length; i++) {
      console.log(v);
        for (var j=0; j < l[i].length; j++) {
            if(l[i][j].name.substring(0,2) === v) {  //If called by 2 letter name, display all itterations
                PrintHTMLVehicleData(l[i][j]);
            }if(l[i][j].model === v) {  // CATCH FULL MODEL
                PrintHTMLVehicleData(l[i][j]);
            }if(l[i][j].model.substring(0,4).toString() === v) {  //CATCH PARTIAL MODEL CODE (GYL1) OR (MCU1)
                PrintHTMLVehicleData(l[i][j]);
            }if(l[i][j].model.substring(1,4).toString() === v) {  //CATCH PARTIAL MODEL CODE   (CV1)
                PrintHTMLVehicleData(l[i][j]);
            }if(l[i][j].vds.substring(2,5).toString() === v) {  //CATCH VDS 678 match for RX models L MODEL, digits 2 3 & 4 (^123^)
                PrintHTMLVehicleData(l[i][j]);
            }
        }
    }
}

var PrintHTMLVehicleData = function(data) { // I Want to Re-Do theis display-thing.... idk how !
    var li = document.createElement("li");
    li.innerHTML =
        (

            "<table>" +
            "<tr>" +


            "<th>VIN123</th>" +
            "<th>45678</th>" +
            "<th>_Model</th>"+
            "<th>ModelName </th>"+
            "<th>ModelYears </th>"+
            "<th>EngineNAME</th>"+
            "<th>Water_Pump</th>"+
            "<th>Oil_Filter</th>"+
            "<th>Engine_air_Filter</th>"+
            "<th>_Cabin_air_Filter</th>"+
            "<th>___Battery</th>"+
            "<th>___Tire_Size</th>"+
            "<th>Wipers</th>"+


            "</tr><tr>"+
            "<td>" + data.wmi + "</td>"+
            "<td>" + data.vds + "</td>"+
            "<td>_" + data.model + "</td>"+
            "<td>" + data.name +"</td>"+
            "<td>" + data.yrs +"</td>"+
            "<td>" + data.eng.name + "</td>"+
            "<td>" + data.eng.v16100 + "</td>"+
            "<td><SMALL>" + data.eng.oilfilter + "</small>  </td>"+
            "<td>" + data.eaf + "</td>"+
            "<td>" + data.caf + "</td>" +
            "<td>" + data.bat + "</td>" +
            "<td>" + data.tyr.size + "</td>"+
            "<td>" + data.wyp.sizes + "</td>"
        );




    var ul = document.getElementById("ppp");
    ul.appendChild(li);};


window.onload = init; // js for search box
function init() {
  var button = document.getElementById("addButton");
  button.onclick = handleButtonClick;}

function handleButtonClick() { // search box
  document.getElementById("ppp").innerHTML = "";
  var textInput = document.getElementById("getInputString");
  var v2 = textInput.value.toUpperCase();
  var v3 = decodeVinNo(v2); 
  getData(v3);};

function DisplayVehicle(model) { // HTML menue driven data call
  document.getElementById("ppp").innerHTML = "";
  var v2 = model.toUpperCase();
  var v3 = decodeVinNo(v2);
  getData2(v3);}; 

function DisplayItem(item) { // HTML menue driven data call v2.0
  document.getElementById("ppp").innerHTML = "";
  var v2 = item.toUpperCase();
  var v3 = "17801-" + v2;
  searchItem(v3);};


function DisplayD3Item(d3item) { // HTML menue driven data call v3.0 170806
    console.log(d3item);
    var v2 = d3item + ".html";
    window.open(v2);
};


function searchItem(v) {  // refined searches called from HTML web page // name 0-2 ie  RX LS model 0-3 ie MCU1
    for (i=0; i<l.length; i++) {
      console.log(v);
        for (var j=0; j < l[i].length; j++) {
            if(l[i][j].eaf === v) {  //If called by 2 letter name, display all itterations
                PrintHTMLVehicleData(l[i][j]);
            }
        }
    }
};  

function myr(start, stop){
  var a=[start], b=start;
  while(b<stop){b++;a.push(b)}
  var first = a[0];
  var last = a[a.length - 1];
  return(first + " - " + last);
};
//cant move this ahead or it bombs

