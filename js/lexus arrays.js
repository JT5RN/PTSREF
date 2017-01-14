var ty_sz = [ // defined in tyr_id - each tyr_id has many ty_sz's

"235-60R18",//0
"235-55R18",//1
"215-55R17",//2
"235-55R19",//3
"215-45R17",//4
"235-45R18",//5
"235-50R20",//6
"235-65R18",//7
"265-65R17",//8
"265-60R18",//9
"225-65R17",//10
"225-60R16",//11
"225-60R18",//12
"275-70R16",//13
"275-60R18",//14
"285-50R20",//15
"205-65R15",//16
"205-60R16",//17
"215-60R16",//18
"225-45R18",//19
"225-50R17",//20
"245-40R18",//21
"225-55R16",//22
"235-45R17",//23
"225-40R18",//24 // IS TIRES
"255-40R18",//25
"255-35R18",//26
"235-45R18",//27
"245-45R19",//28
];

var tyr_id = [ //the map of what cars get what size tires defined in the main hash. order is important!// tire definitions can be cleaned up as needed! to do later
{'id': 0, 'size': ty_sz[11]},  // this is the map - car to size(s) 
{'id': 1, 'size': ty_sz[1] + " or " + ty_sz[10]},
{'id': 2, 'size': ty_sz[0] + " or " + ty_sz[3]},
{'id': 3, 'size': ty_sz[6] + " or " + ty_sz[7]},
{'id': 4, 'size': ty_sz[8]},
{'id': 5, 'size': ty_sz[9]},
{'id': 6, 'size': ty_sz[12] + " or " + ty_sz[10]},
{'id': 7, 'size': ty_sz[13] + " or " + ty_sz[14]},//"275-70R16 OR 275-60R18"},
{'id': 8, 'size': ty_sz[15]},
{'id': 9, 'size': ty_sz[16] + " or " + ty_sz[17]},//"205-65R15 OR 205-60R16"},
{'id': 10,'size': ty_sz[18] + " or " + ty_sz[2]},//"215-60R16 OR 215-55R17"},
{'id': 11,'size': ty_sz[2] + " or " + ty_sz[19]},//"215-55R17 OR 225-45R18"},
{'id': 12,'size': ty_sz[4]},
{'id': 13,'size': "UN-KNOWN"},
{'id': 14,'size': ty_sz[24] + " and " + ty_sz[25]},
{'id': 15,'size': ty_sz[21] + " and " + ty_sz[26]},
{'id': 16,'size': ty_sz[18] + ", " + ty_sz[22] + " or " + ty_sz[23]},
{'id': 17,'size': ty_sz[20] + " and " + ty_sz[21]},
{'id': 18,'size': ty_sz[27] + " and " + ty_sz[28]},
{'id': 19,'size': "205-65R16 or 225-60R16"},
{'id': 20,'size': "225-60R16 or 225-55R17 or 245-45R18"},
{'id': 21,'size': "235-45R18 or 245-45R19"},
{'id': 22,'size': "245-40R18"},    
{'id': 23,'size': "275-35R19 AND 295-35R19"},    
{'id': 24,'size': ty_sz[4]}
];




var eaf_id = ['17801-0P051','17801-0H010','17801-AD010','17801-31110','17801-0V020','17801-0P070','17801-31170','17801-38051',
    '17801-20050','17801-50040','17801-37021','17801-50030','17801-50060','17801-38030','17801-03010','17801-46080', 'Unknown'];

var caf_id = ['87139-YZZ10', '87139-<B>30100</B>', '87139-<B>YZZ03</B>', '87139-<B><LARGE>YZZ01</LARGE></B>', '87139-48020-83', '87139-<B>0E030</B>'];

var bt_id = ['24F-575','240-575','27F-710','270-750', 'H5', 'H6','51R', 'Unique#-Battery has small posts', 'OEM 28100-####'];
            
var dl_id = [{'id':0, 'name': "AWD"}, {'id':1, 'name': "FWD"}, {'id':2, 'name': "4WD"}, {'id':3, 'name': "RWD"}];

var bs_id = [{'id':0,'name': "4 Door Sedan FWD transverse_engine"},
            {'id' :1, 'name': "4 Door Sedan AWD longitudinal_engine"},
            {'id' :2, 'name': "4 Door Sedan RWD longitudinal_engine"},
            {'id' :3, 'name': "5 Door Hatchback 2WD longitudinal_engine"}, // SportCXross//CT
            {'id' :4, 'name': "2 Door Convertible 2WD longitudinal_engine"},
            {'id' :5, 'name': "2 Door Coupe RWD longitudinal_engine"},
            {'id' :6, 'name': "2 Door Coupe AWD longitudinal_engine"},
            {'id' :7, 'name': "5 Door Wagon FWD transverse_engine"},   //RX
            {'id' :8, 'name': "5 Door Wagon AWD transverse_engine"},   //RX/NX
            {'id' :9, 'name': "5 Door Wagon 4WD longitudinal_engine"}];  //LX/GX


var en_id_oil = ['~7.2Quarts(*)','~5.5Quarts(1*)', '~6.3Quarts(2*)', '~6.2Quarts(3*)', '~6 quarts(4*)', '~10 quarts (5*)'];
var en_id_of = ['04152-YZZA1','04152-YZZA4','04152-YZZA5','04152-YZZA6','90915-YZZD1','90915-YZZD3','90915-YZZF1'];

var en_id = [{'id': 0, 'name': '1MZ-FE', 'displacement': '3.0L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},
            {'id':  1, 'name': '1FZ-FE', 'displacement': '4.5L', 'oilfilter': en_id_of[5], 'oil': en_id_oil[1]},
            {'id':  2, 'name': '1LR-GUE','displacement': '4.8L', 'oilfilter': '04909-45010', 'oil': '15+Quarts Mobil 1 (**)'},//lfa
            {'id':  3, 'name': '1MZ-FE', 'displacement': '3.0L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},
            {'id':  4, 'name': '1UR-FSE','displacement': '4.6L', 'oilfilter': en_id_of[2], 'oil': en_id_oil[5]},
            {'id':  5, 'name': '1UZ-FE', 'displacement': '4.0L', 'oilfilter': en_id_of[5], 'oil': en_id_oil[3]},
            {'id':  6, 'name': '2AR-FXE','displacement': '2.8L', 'oilfilter': en_id_of[0], 'oil': en_id_oil[4]},//NX/ES300Hybrid
            {'id':  7, 'name': '2AZ-FXE','displacement': '2.4L', 'oilfilter': en_id_of[6], 'oil': en_id_oil[4]},//HShit
            {'id':  8, 'name': '2GR-FE', 'displacement': '3.5L', 'oilfilter': en_id_of[0], 'oil': en_id_oil[2]},// (1) (Transverse)
            {'id':  9, 'name': '2GR-FSE','displacement': '3.5L', 'oilfilter': en_id_of[2], 'oil': en_id_oil[0]},// Gas 350 (2) (Longitudinal)
            {'id': 10, 'name': '2GR-FXE','displacement': '3.5L', 'oilfilter': en_id_of[0], 'oil': en_id_oil[0]},
            {'id': 11, 'name': '2GR-FKS','displacement': '3.5L', 'oilfilter': en_id_of[2], 'oil': en_id_oil[0]},
            {'id': 12, 'name': '2GR-FXS','displacement': '3.5L', 'oilfilter': en_id_of[0], 'oil': en_id_oil[0]},
            {'id': 13, 'name': '2JZ-GE', 'displacement': '3.0L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},// Straight 6
            {'id': 14, 'name': '2UR-GSE','displacement': '5.0L', 'oilfilter': en_id_of[1], 'oil': '10+Quarts(***)'},
            {'id': 15, 'name': '2UR-FSE','displacement': '5.0L', 'oilfilter': en_id_of[1], 'oil': en_id_oil[0]},// Hybrid 600hL
            {'id': 16, 'name': '2UZ-FE', 'displacement': '4.7L', 'oilfilter': en_id_of[5], 'oil': en_id_oil[3]},
            {'id': 17, 'name': '2VZ-FE', 'displacement': '2.5L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},
            {'id': 18, 'name': '2ZR-FXE','displacement': '1.8L', 'oilfilter': en_id_of[3], 'oil': en_id_oil[4]},
            {'id': 19, 'name': '3GR-FSE','displacement': '3.0L', 'oilfilter': en_id_of[2], 'oil': en_id_oil[0]},// 2006GS Only motor
            {'id': 20, 'name': '3MZ-FE', 'displacement': '3.3L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},//how do i account for an '08 Rx Hybrid???
            {'id': 21, 'name': '3UR-FE', 'displacement': '5.7L', 'oilfilter': en_id_of[1], 'oil': en_id_oil[5]},
            {'id': 22, 'name': '3UZ-FE', 'displacement': '4.3L', 'oilfilter': en_id_of[5], 'oil': en_id_oil[3]},
            {'id': 23, 'name': '3VZ-FE', 'displacement': '3.0L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},
            {'id': 24, 'name': '4GR-FSE','displacement': '2.5L', 'oilfilter': en_id_of[2], 'oil': en_id_oil[3]},
            {'id': 25, 'name': '8AR-FTS','displacement': '2.0T', 'oilfilter': en_id_of[0], 'oil': en_id_oil[4]},
            {'id': 26, 'name': '8AR-FXE','displacement': '2.0T', 'oilfilter': en_id_of[0], 'oil': en_id_oil[4]},
            {'id': 27, 'name': '2GR-FKS','displacement': '3.5L', 'oilfilter': en_id_of[0], 'oil': en_id_oil[0]},
            {'id': 28, 'name':'3MZ-FEh', 'displacement': '3.3L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},//how do i account for an '08 Rx Hybrid???
            ];








var wyp_id = [
{'id': 0, 'sizes': displayWipers(26, 22)},
{'id': 1, 'sizes': displayWipers(24, 19)},
{'id': 2, 'sizes': displayWipers("26PTB", "22PTB")}, 
{'id': 3, 'sizes': displayWipers(24, 21)},
{'id': 4, 'sizes': displayWipers(21, 18)},
{'id': 5, 'sizes': displayWipers(22, 21)},
{'id': 6, 'sizes': displayWipers("26PTB2", "16PTB2")},
{'id': 7, 'sizes': displayWipers(24, 22)},
{'id': 8, 'sizes': displayWipers(24, 20)},
{'id': 9, 'sizes': displayWipers(22, 20)},
{'id':10, 'sizes': displayWipers(24, 18)},
{'id':11, 'sizes': displayWipers(24, 16)},
{'id':12, 'sizes': displayWipers(24, 17)},
{'id':13, 'sizes': displayWipers(26, 22)}
];


function displayWipers(left,right){
    return("Left: " + left + " Right: " + right);

};



var dw_id = [  //DISPLAY WMI IDENTIFICATION 
"JT6 / JTJ ",//0
"2T2 / JTJ ",//1
"JTJ ",//2
"JT6 ",//3
"JTH ",//4
"JT8 ",//5
"58A / JTH "//6

];

//var lexusGx = [//GX500
//REPLACING OLD FORMAT.
//vds, model, name, yrs, eng, dln, bdy, bat, eaf, caf, wyp,tyr
//{'vds': 'BT20X', 'model': 'UZJ120', 'name': 'GX470', myr(2003-2009),en_id[16],dln_id[2],bs_id[9,],bt_id[2],eaf_id[9],caf_id[2],wyp_id[5],tyr_id[4]}
{'YARBS', 'AGZ10', 'NX200T',2015, 2020, 25, 1, 7, 0, 0, 0, 6, 6} /// how can i make this so i dont need to declare the item # each time and i just call either position number o rmake a TEMPLATE somehow?/}
//];//ends rebuilt GX500


//model definitions, 'wmi': dw_id[0], 

var lexusRx = [
{'wmi': dw_id[0], 'vds': 'GF10U', 'model': 'MCU10', 'name': 'RX300', 'yrs': myr(1999,2003), 'eng': en_id[0], 'dln':dl_id[1], 'bdy': bs_id[7], 'bat': bt_id[0], 'eaf': eaf_id[14], 'caf': caf_id[4], 'wyp': wyp_id[3], 'tyr': tyr_id[0]},
{'wmi': dw_id[0], 'vds': 'HF10U', 'model': 'MCU15', 'name': 'RX300', 'yrs': myr(1999,2003), 'eng': en_id[0], 'dln':dl_id[0], 'bdy': bs_id[8], 'bat': bt_id[0], 'eaf': eaf_id[14], 'caf': caf_id[4], 'wyp': wyp_id[3], 'tyr': tyr_id[0]},
{'wmi': dw_id[1], 'vds': 'GA31U', 'model': 'MCU33', 'name': 'RX330', 'yrs': myr(2004,2006), 'eng': en_id[20],'dln':dl_id[1], 'bdy': bs_id[7], 'bat': bt_id[0], 'eaf': eaf_id[1], 'caf': caf_id[2], 'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[1], 'vds': 'HA31U', 'model': 'MCU38', 'name': 'RX330', 'yrs': myr(2004,2006), 'eng': en_id[20],'dln':dl_id[0], 'bdy': bs_id[8], 'bat': bt_id[0], 'eaf': eaf_id[1], 'caf': caf_id[2], 'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[1], 'vds': 'GK31U', 'model': 'GSU30', 'name': 'RX350', 'yrs': myr(2007,2009), 'eng': en_id[8], 'dln':dl_id[1], 'bdy': bs_id[7], 'bat': bt_id[0], 'eaf': eaf_id[1], 'caf': caf_id[2],  'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[1], 'vds': 'HK31U', 'model': 'GSU35', 'name': 'RX350', 'yrs': myr(2007,2009), 'eng': en_id[8], 'dln':dl_id[0], 'bdy': bs_id[8], 'bat': bt_id[0], 'eaf': eaf_id[1], 'caf': caf_id[2],  'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[2], 'vds': 'GW31U', 'model': 'MHU33', 'name': 'RX400H','yrs': myr(2006,2008), 'eng': en_id[28],'dln':dl_id[1], 'bdy': bs_id[7], 'bat': bt_id[6], 'eaf': eaf_id[8], 'caf': caf_id[2],'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[2], 'vds': 'HW31U', 'model': 'MHU38', 'name': 'RX400H','yrs': myr(2006,2008), 'eng': en_id[28],'dln':dl_id[0], 'bdy': bs_id[8], 'bat': bt_id[6], 'eaf': eaf_id[8], 'caf': caf_id[2],'wyp': wyp_id[0], 'tyr': tyr_id[1]},
{'wmi': dw_id[1], 'vds': 'ZK1BA', 'model': 'GGL10', 'name': 'RX350', 'yrs': myr(2010,2015), 'eng': en_id[8], 'dln':dl_id[1], 'bdy': bs_id[7], 'bat': bt_id[0], 'eaf': eaf_id[0], 'caf': caf_id[0],  'wyp': wyp_id[0], 'tyr': tyr_id[2]},
{'wmi': dw_id[1], 'vds': 'BK1BA', 'model': 'GGL15', 'name': 'RX350', 'yrs': myr(2010,2015), 'eng': en_id[8], 'dln':dl_id[0], 'bdy': bs_id[8], 'bat': bt_id[0], 'eaf': eaf_id[0], 'caf': caf_id[0],  'wyp': wyp_id[0], 'tyr': tyr_id[2]},
{'wmi': dw_id[1], 'vds': 'ZB1BA', 'model': 'GYL10', 'name': 'RX450H','yrs': myr(2010,2015), 'eng': en_id[10],'dln':dl_id[1], 'bdy': bs_id[7], 'bat': bt_id[8], 'eaf': eaf_id[5],'caf': caf_id[0], 'wyp': wyp_id[0], 'tyr': tyr_id[2]},
{'wmi': dw_id[1], 'vds': 'BC1BA', 'model': 'GYL15', 'name': 'RX450H','yrs': myr(2010,2015), 'eng': en_id[10],'dln':dl_id[0], 'bdy': bs_id[8], 'bat': bt_id[8], 'eaf': eaf_id[5], 'caf': caf_id[0],'wyp': wyp_id[0],'tyr': tyr_id[2]},
{'wmi': dw_id[1], 'vds': 'BZMCA', 'model': 'GGL25', 'name': 'RX350', 'yrs': myr(2016,2020), 'eng': en_id[27],'dln':dl_id[0], 'bdy': bs_id[8], 'bat': bt_id[0], 'eaf': eaf_id[0], 'caf': caf_id[5], 'wyp': wyp_id[2],'tyr': tyr_id[3]},
{'wmi': dw_id[1], 'vds': 'BGMCA', 'model': 'GYL25', 'name': 'RX450H','yrs': myr(2016,2020), 'eng': en_id[10],'dln':dl_id[0], 'bdy': bs_id[8], 'bat': bt_id[8], 'eaf':'17801-0P090','caf': caf_id[5],'wyp':wyp_id[2],'tyr': tyr_id[3]}];//fwd missing



var lexusGx = [
{'wmi': dw_id[2], 'vds': 'BT20X', 'model': 'UZJ120', 'name': 'GX470','yrs': myr(2003,2009), 'eng': en_id[16],'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[2], 'eaf': eaf_id[9],'caf': caf_id[2], 'wyp': wyp_id[5],'tyr': tyr_id[4]},
{'wmi': dw_id[2], 'vds': 'BM7FX', 'model': 'UZJ150', 'name': 'GX460','yrs': myr(2010,2017), 'eng': en_id[4], 'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[0], 'eaf': eaf_id[7],'caf': caf_id[0], 'wyp': wyp_id[5],'tyr': tyr_id[5]},
{'wmi': dw_id[2], 'vds': 'JM7FX', 'model': 'UZJ150', 'name': 'GX460','yrs': myr(2010,2017), 'eng': en_id[4], 'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[0], 'eaf': eaf_id[7],'caf': caf_id[0], 'wyp': wyp_id[5],'tyr': tyr_id[5]}];





var lexusNx = [
//{'TESTO', 'AGZ10', 'NX200T',2015, 2020, 25, 1, 7, 0, 0, 0, 6, 6} WANT TO REBUILD LIKE THIS S

{'wmi': dw_id[2], 'vds': 'YARBZ', 'model': 'AGZ10', 'name': 'NX200T','yrs': myr(2015,2020), 'eng': en_id[25],'dln':dl_id[1], 'bdy': bs_id[7], 'bat': bt_id[0], 'eaf': eaf_id[0],'caf': caf_id[0], 'wyp': wyp_id[6],'tyr': tyr_id[6]},
{'wmi': dw_id[2], 'vds': 'BARBZ', 'model': 'AGZ15', 'name': 'NX200T','yrs': myr(2015,2020), 'eng': en_id[25],'dln':dl_id[0], 'bdy': bs_id[8], 'bat': bt_id[0], 'eaf': eaf_id[0],'caf': caf_id[0], 'wyp': wyp_id[6],'tyr': tyr_id[6]},
{'wmi': dw_id[2], 'vds': 'YWRBZ', 'model': 'AYZ10', 'name': 'NX300H','yrs': myr(2015,2020), 'eng': en_id[6], 'dln':dl_id[1], 'bdy': bs_id[7], 'bat': bt_id[8], 'eaf': eaf_id[11],'caf': caf_id[0], 'wyp': wyp_id[6],'tyr': tyr_id[6]},
{'wmi': dw_id[2], 'vds': 'BJRBZ', 'model': 'AYZ15', 'name': 'NX300H','yrs': myr(2015,2020), 'eng': en_id[6], 'dln':dl_id[0], 'bdy': bs_id[8], 'bat': bt_id[8], 'eaf': eaf_id[11],'caf': caf_id[0], 'wyp': wyp_id[6],'tyr': tyr_id[6]}];

var lexusLx = [
{'wmi': dw_id[0], 'vds': 'HT00W', 'model': 'UZJ100', 'name': 'LX470','yrs': myr(1998,2007), 'eng': en_id[16],'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[2], 'eaf': eaf_id[9],'caf':'2x88568-60010','wyp': wyp_id[7],'tyr': tyr_id[7]},
{'wmi': dw_id[2], 'vds': 'HY00W', 'model': 'URJ201', 'name': 'LX570','yrs': myr(2008,2009), 'eng': en_id[21],'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[2], 'eaf': eaf_id[13], 'caf': caf_id[0], 'wyp': wyp_id[7],'tyr': tyr_id[8]},
{'wmi': dw_id[2], 'vds': 'HY7AX', 'model': 'URJ201', 'name': 'LX570','yrs': myr(2010,2020), 'eng': en_id[21],'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[2], 'eaf': eaf_id[13], 'caf': caf_id[0], 'wyp': wyp_id[7],'tyr': tyr_id[8]},
{'wmi': dw_id[3], 'vds': 'HJ88J', 'model': 'FZJ80',  'name': 'LX450','yrs': myr(1995,1997), 'eng': en_id[1], 'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[2], 'eaf': '17801-FJZ80','caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[7]}];

var lexusEs = [
{'wmi': dw_id[5], 'vds': 'VV22T', 'model': 'VZV21', 'name': 'ES250','yrs': myr(1990,1991), 'eng': en_id[17], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[15],'caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'VK13T', 'model': 'VCV10', 'name': 'ES300','yrs': myr(1992,1993), 'eng': en_id[23], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[14],'caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'GK13T', 'model': 'MCV10', 'name': 'ES300','yrs': myr(1994,1995), 'eng': en_id[23], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[14],'caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'BF12G', 'model': 'MCV10', 'name': 'ES300','yrs': myr(1996,1996), 'eng': en_id[0],  'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[14],'caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'BF22G', 'model': 'MCV20', 'name': 'ES300','yrs': myr(1997,1997), 'eng': en_id[0],  'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[14],'caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'BF28G', 'model': 'MCV20', 'name': 'ES300','yrs': myr(1998,2001), 'eng': en_id[0],  'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[14],'caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[4], 'vds': 'BF30G', 'model': 'MCV30', 'name': 'ES300','yrs': myr(2002,2003), 'eng': en_id[0],  'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[1],'caf': caf_id[1], 'wyp': wyp_id[8],'tyr': tyr_id[10]},
{'wmi': dw_id[4], 'vds': 'BA30G', 'model': 'MCV31', 'name': 'ES330','yrs': myr(2004,2006), 'eng': en_id[20], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[1],'caf': caf_id[1], 'wyp': wyp_id[8],'tyr': tyr_id[10]},
{'wmi': dw_id[4], 'vds': 'BJ46G', 'model': 'GSV40', 'name': 'ES350','yrs': myr(2007,2009), 'eng': en_id[8],  'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[2],'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[11]},
{'wmi': dw_id[4], 'vds': 'BK1EG', 'model': 'GSV40', 'name': 'ES350','yrs': myr(2010,2012), 'eng': en_id[8],  'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[2],'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[11]},
{'wmi': dw_id[4], 'vds': 'BW1GG', 'model': 'AVV60', 'name': 'ES300H','yrs':myr(2013,2018), 'eng': en_id[6],  'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[8], 'eaf': eaf_id[4],'caf': caf_id[0], 'wyp': wyp_id[4],'tyr': tyr_id[11]},
{'wmi': dw_id[6], 'vds': 'BK1GG', 'model': 'GSV60', 'name': 'ES350','yrs': myr(2013,2018), 'eng': en_id[8],  'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'eaf': eaf_id[0],'caf': caf_id[0], 'wyp': wyp_id[4],'tyr': tyr_id[11]}];
    
var lexusIs = [
{'wmi': dw_id[4], 'vds': 'BD182', 'model': 'JCE10', 'name': 'IS300','yrs': myr(2001,2001), 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[15], 'caf': caf_id[4], 'wyp': wyp_id[9],'tyr': tyr_id[12]},
{'wmi': dw_id[4], 'vds': 'BD192', 'model': 'JCE10', 'name': 'IS300','yrs': myr(2002,2005), 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[15], 'caf': caf_id[4], 'wyp': wyp_id[9],'tyr': tyr_id[12]},
{'wmi': dw_id[4], 'vds': 'ED192', 'model': 'JCE10', 'name': 'IS300','yrs': myr(2003,2005), 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[15], 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[13]},

{'wmi': dw_id[4], 'vds': 'BK262', 'model': 'GSE20', 'name': 'IS250','yrs': myr(2006,2009),'eng': en_id[24], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'BE262', 'model': 'GSE21', 'name': 'IS350','yrs': myr(2006,2009), 'eng': en_id[9],  'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'CK262', 'model': 'GSE25', 'name': 'IS250','yrs': myr(2006,2009), 'eng': en_id[24], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'BP262', 'model': 'USE20', 'name': 'IS-F', 'yrs': myr(2008,2009), 'eng': en_id[14], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf':'17801-38021', 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'BP5C2', 'model': 'USE20', 'name': 'IS-F', 'yrs': myr(2010,2013), 'eng': en_id[14], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf':'17801-38021', 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'BF5C2', 'model': 'GSE20', 'name': 'IS250','yrs': myr(2010,2013), 'eng': en_id[24], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'BE5C2', 'model': 'GSE21', 'name': 'IS350','yrs': myr(2010,2013), 'eng': en_id[9],  'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'CF5C2', 'model': 'GSE25', 'name': 'IS250','yrs': myr(2010,2013), 'eng': en_id[24], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'FF2C2', 'model': 'GSE20', 'name':'IS250-C','yrs':myr(2010,2015), 'eng': en_id[24], 'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'FE2C2', 'model': 'GSE21', 'name':'IS350-C','yrs':myr(2010,2015), 'eng': en_id[9],  'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},
{'wmi': dw_id[4], 'vds': 'CE5C2', 'model': 'GSE26', 'name': 'IS350', 'yrs':myr(2010,2013), 'eng': en_id[9],  'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},

{'wmi': dw_id[4], 'vds': 'BF1D2', 'model': 'GSE30', 'name': 'IS250','yrs': myr(2014,2020), 'eng': en_id[24], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]},
{'wmi': dw_id[4], 'vds': 'CF1D2', 'model': 'GSE35', 'name': 'IS250','yrs': myr(2014,2020), 'eng': en_id[24], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]},
{'wmi': dw_id[4], 'vds': 'BE1D2', 'model': 'GSE31', 'name': 'IS350','yrs': myr(2014,2020), 'eng': en_id[9],  'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]},
{'wmi': dw_id[4], 'vds': 'CE1D2', 'model': 'GSE36', 'name': 'IS350','yrs': myr(2014,2020), 'eng': en_id[9],  'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]},
{'wmi': dw_id[4], 'vds': 'CM1D2', 'model': 'GSE37', 'name': 'IS300','yrs': myr(2016,2020), 'eng': en_id[9],  'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]},
{'wmi': dw_id[4], 'vds': 'BA1D2', 'model': 'ASE30', 'name':'IS200T','yrs': myr(2016,2020), 'eng': en_id[25], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[10],'tyr': tyr_id[15]}];

var lexusGs = [
{'wmi': dw_id[5], 'vds': 'JS47E', 'model': 'JZS147', 'name': 'GS300','yrs': myr(1994,1994), 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': '17801-50020', 'caf': 'idk', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'BD42S', 'model': 'JZS147', 'name': 'GS300','yrs': myr(1995,1997), 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': '17801-50020', 'caf': 'idk', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
    
{'wmi': dw_id[5], 'vds': 'BD68S', 'model': 'JZS160', 'name': 'GS300','yrs': myr(1998,1999), 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[15], 'caf': 'idk', 'wyp': wyp_id[8],'tyr': tyr_id[16]},
{'wmi': dw_id[5], 'vds': 'BH68X', 'model': 'UZS160', 'name': 'GS400','yrs': myr(1998,2000), 'eng': en_id[5],  'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[11], 'caf': 'idk', 'wyp': wyp_id[8],'tyr': tyr_id[16]},
{'wmi': dw_id[4], 'vds': 'BD69S', 'model': 'JZS160', 'name': 'GS300','yrs': myr(2000,2005), 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[15], 'caf': 'idk', 'wyp': wyp_id[8],'tyr': tyr_id[16]},
{'wmi': dw_id[4], 'vds': 'BL69S', 'model': 'UZS161', 'name': 'GS430','yrs': myr(2001,2005), 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[12], 'caf': 'idk', 'wyp': wyp_id[8],'tyr': tyr_id[16]},
    
{'wmi': dw_id[4], 'vds': 'BH96S', 'model': 'GRS190', 'name': 'GS300','yrs': myr(2006,2006), 'eng': en_id[19], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[12], 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'CH96S', 'model': 'GRS195', 'name': 'GS300','yrs': myr(2006,2006), 'eng': en_id[19], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[12], 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BE96S', 'model': 'GRS191', 'name': 'GS350','yrs': myr(2006,2006), 'eng': en_id[9],  'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'CE96S', 'model': 'GRS196', 'name': 'GS350','yrs': myr(2007,2009), 'eng': en_id[9],  'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BN96S', 'model': 'UZS190', 'name': 'GS430','yrs': myr(2006,2007), 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[12], 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BE1KS', 'model': 'GRS191', 'name': 'GS350','yrs': myr(2010,2011), 'eng': en_id[9],  'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'CE1KS', 'model': 'GRS196', 'name': 'GS350','yrs': myr(2010,2011), 'eng': en_id[9],  'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[3], 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BC96S', 'model': 'GWS191', 'name':'GS450H','yrs': myr(2007,2009), 'eng': en_id[10], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[12], 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BC1KS', 'model': 'GWS191', 'name':'GS450H','yrs': myr(2010,2011), 'eng': en_id[10], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[12], 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BL96S', 'model': 'URS190', 'name': 'GS460','yrs': myr(2008,2009), 'eng': en_id[4],  'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': '17801-38040', 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
{'wmi': dw_id[4], 'vds': 'BL1KS', 'model': 'URS190', 'name': 'GS460','yrs': myr(2010,2011), 'eng': en_id[4],  'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': '17801-38040', 'caf': caf_id[0], 'wyp': wyp_id[1],'tyr': tyr_id[17]},
    
{'wmi': dw_id[4], 'vds': 'BA1BL', 'model': 'ARL10', 'name':'GS200T','yrs': myr(2016,2020), 'eng': en_id[25], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'BE1BL', 'model': 'GRL10', 'name': 'GS350','yrs': myr(2013,2015), 'eng': en_id[9],  'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'BZ1BL', 'model': 'GRL12', 'name': 'GS350','yrs': myr(2015,2017), 'eng': en_id[11], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'CE1BL', 'model': 'GRL15', 'name': 'GS350','yrs': myr(2013,2015), 'eng': en_id[9],  'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'CZ1BL', 'model': 'GRL16', 'name': 'GS350','yrs': myr(2015,2017), 'eng': en_id[11], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[4],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'BP1BL', 'model': 'URL10', 'name': 'GS-F', 'yrs': myr(2016,2017), 'eng': en_id[14], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[4], 'eaf': '17801-38021', 'caf': caf_id[1], 'wyp': wyp_id[4],'tyr': tyr_id[23]}];

var lexusLs = [


];

var lexusLs = [
{'wmi': dw_id[5], 'vds': 'UF11E', 'model': 'UCV10', 'name': 'LS400','yrs': myr(1990,1994), 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[2], 'eaf': '17801-50010-83', 'caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[19]},
{'wmi': dw_id[5], 'vds': 'UF22E', 'model': 'UCF20', 'name': 'LS400','yrs': myr(1995,1997), 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[0], 'eaf': '17801-50010-83', 'caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[19]},
{'wmi': dw_id[5], 'vds': 'BH28F', 'model': 'UCF20', 'name': 'LS400','yrs': myr(1998,2000), 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[0], 'eaf': '17801-50010-83', 'caf': 'IDK', 'wyp': wyp_id[13],'tyr': tyr_id[19]},

{'wmi': dw_id[4], 'vds': 'BN30F', 'model': 'UCF30', 'name': 'LS430','yrs': myr(2001,2003), 'eng': en_id[22],'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[0], 'eaf': eaf_id[11], 'caf': caf_id[3], 'wyp': wyp_id[11],'tyr': tyr_id[20]},
{'wmi': dw_id[4], 'vds': 'BN36F', 'model': 'UCF30', 'name': 'LS430','yrs': myr(2004,2006), 'eng': en_id[22],'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[0], 'eaf': eaf_id[11], 'caf': caf_id[3], 'wyp': wyp_id[11],'tyr': tyr_id[20]},

{'wmi': dw_id[4], 'vds': 'BL46F', 'model': 'USF40', 'name': 'LS460','yrs': myr(2007,2009), 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'BL5EF', 'model': 'USF40', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[3], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'BL1EF', 'model': 'USF40', 'name': 'LS460','yrs': myr(2007,2009), 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[3], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'GL46F', 'model': 'USF41', 'name': 'LS460','yrs': myr(2007,2009), 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[3], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'GL1EF', 'model': 'USF41', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[3], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'GL5EF', 'model': 'USF41', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[3], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'CL46F', 'model': 'USF45', 'name': 'LS460','yrs': myr(2008,2009), 'eng': en_id[4], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[3], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'CL5EF', 'model': 'USF45', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[3], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'DL46F', 'model': 'USF46', 'name': 'LS460','yrs': myr(2007,2009), 'eng': en_id[4], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[3], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'DL5EF', 'model': 'USF46', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[3], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'DL1EF', 'model': 'USF46', 'name': 'LS460','yrs': myr(2010,2017), 'eng': en_id[4], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[3], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'DU46F', 'model': 'UVF46', 'name':'LS600HL','yrs':myr(2008,2009), 'eng': en_id[15],'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[8], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]},
{'wmi': dw_id[4], 'vds': 'DU1EF', 'model': 'UVF46', 'name':'LS600HL','yrs':myr(2010,2015), 'eng': en_id[15],'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[8], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[12],'tyr': tyr_id[21]}];

var lexusSc = [
{'wmi': dw_id[5], 'vds': 'JZ31C', 'model': 'JZZ31', 'name': 'SC300','yrs': myr(1992,2006), 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[2], 'eaf': eaf_id[16], 'caf': 'idk', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'CD32Z', 'model': 'JZZ31', 'name': 'SC300','yrs': myr(1997,1999), 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[2], 'eaf': eaf_id[16], 'caf': 'idk', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'UZ30C', 'model': 'UZZ30', 'name': 'SC400','yrs': myr(1992,1996), 'eng': en_id[5],  'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[2], 'eaf': eaf_id[16], 'caf': 'idk', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[5], 'vds': 'CH32Y', 'model': 'UZZ30', 'name': 'SC400','yrs': myr(1997,1999), 'eng': en_id[5],  'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[0], 'eaf': eaf_id[16], 'caf': 'idk', 'wyp': wyp_id[13],'tyr': tyr_id[9]},
{'wmi': dw_id[4], 'vds': 'FN48Y', 'model': 'UZZ40', 'name': 'SC430','yrs': myr(2001,2006), 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[5], 'eaf': eaf_id[12], 'caf': caf_id[3], 'wyp': wyp_id[8],'tyr': tyr_id[22]},
{'wmi': dw_id[4], 'vds': 'FN45Y', 'model': 'UZZ40', 'name': 'SC430','yrs': myr(2007,2009), 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[5], 'eaf': eaf_id[12], 'caf': caf_id[3], 'wyp': wyp_id[8],'tyr': tyr_id[22]},
{'wmi': dw_id[4], 'vds': 'FN2EY', 'model': 'UZZ40', 'name': 'SC430','yrs': myr(2010,2010), 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[5], 'eaf': eaf_id[12], 'caf': caf_id[3], 'wyp': wyp_id[8],'tyr': tyr_id[22]}];

var lexusRc = [
{'wmi': dw_id[4], 'vds': 'SE5BC', 'model': 'GSC15', 'name': 'RC350','yrs': myr(2015,2020), 'eng': en_id[9],  'dln':dl_id[0], 'bdy': bs_id[6], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[13],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'SM5BC', 'model': 'GSC16', 'name': 'RC300','yrs': myr(2015,2020), 'eng': en_id[11], 'dln':dl_id[0], 'bdy': bs_id[6], 'bat': bt_id[1], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[13],'tyr': tyr_id[18]},
{'wmi': dw_id[4], 'vds': 'HP5BC', 'model': 'USC10', 'name': 'RC-F' ,'yrs': myr(2015,2020),  'eng': en_id[14], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[4], 'eaf':  '17801-38021', 'caf': caf_id[1], 'wyp': wyp_id[13],'tyr': tyr_id[23]},
{'wmi': dw_id[4], 'vds': 'HA5BC', 'model': 'ASC10', 'name':'RC200T','yrs': myr(2015,2020), 'eng': en_id[25],'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[4], 'eaf': eaf_id[6], 'caf': caf_id[1], 'wyp': wyp_id[13],'tyr': tyr_id[18]}];

var lexusCt = [
{'wmi': dw_id[4], 'vds': 'KD5BH', 'model': 'ZWA10', 'name': 'CT200H','yrs':myr(2011,2017), 'eng': en_id[18], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[7], 'eaf': eaf_id[10], 'caf': caf_id[0], 'wyp': wyp_id[4],'tyr': tyr_id[24]}];

var lexusHs = [
{'wmi': dw_id[4], 'vds': 'BB1BA', 'model': 'ANF10', 'name': 'HS250H','yrs':myr(2010,2012), 'eng': en_id[7], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[8], 'eaf': eaf_id[4], 'caf': caf_id[0], 'wyp': wyp_id[4],'tyr': tyr_id[11]}];

var lexusLFA = [
{'wmi': dw_id[4], 'vds': 'HX8BH', 'model': 'LFA10', 'name':  'LFA', 'yrs': myr(2012,2012), 'eng': en_id[2], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': 'idk', 'eaf': 'idk', 'caf': 'IDK', 'wyp': wyp_id[13],'tyr': 'UNK'}];
    


var allmodels = [lexusRx, lexusEs, lexusGx, lexusNx, lexusLx, lexusIs, lexusGs, lexusLs, lexusSc, lexusLFA, lexusRc, lexusHs, lexusCt];
var allpv = [lexusEs, lexusIs, lexusGs, lexusLs, lexusSc, lexusLFA, lexusRc, lexusHs, lexusCt];
var allmpv = [lexusNx, lexusGx, lexusRx, lexusLx];
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

function getData3(v) { // new call 
    for (i=0; i<l.length; i++) {
        for (var j=0; j < l[i].length; j++) {
            if (l[i][j].model === v) {
                PrintHTMLVehicleData(l[i][j]);
                PrintHTMLItemData(l[i][j]);
            }
        }
    }
} 
//what tod o thou.00



var PrintHTMLVehicleData = function(data) { 
  var li = document.createElement("li"); 
    li.innerHTML = 
  (

    "<table>" + 
  "<colgroup>" + 
    
    
  "</colgroup>" + 
  "<tr>" + 
    "<th>VIN</size=</th>" +

    "<th>The_VDS</th>" +
    "<th>MODEL</th>"+ 
    "<th>MODELNAME</th>"+
    "<small><th>BODYSTYLE</th></small>"+
    "<th><small>MODEL_YEARS</small></th>"+

    "<th>EngineNAME</th>"+
    "<th>EngineSIZE</th>"+
    "<th>OIL_FILTER</th>"+
    "<th>EngineOIL</th>"+
    "<th>WIPERS</th>"+
    "<th>ENGINE A/F</th>"+
    "<th>CABIN  A/F</th>"+
    "<th>BATTERY</th>"+
    "<th>TIRES  </th>"+
  "</tr><tr>"+
    "<td>" + data.wmi + "</td>"+ 
   
    

    "<td>" + data.vds + "</td>"+ 
    "<td>" + data.model + "</td>"+
    "<td>" + data.name +"</td>"+

    "<td><small>" + data.bdy.name +"</small></td>"+
    "<td>" + data.yrs +"</td>"+

    "<td>" + data.eng.name + "</td>"+
    "<td>" + data.eng.displacement + "</td>"+
    "<td>" + data.eng.oilfilter + "</td>"+
    "<td>" + data.eng.oil + "</td>"+
    "<td>" + data.wyp.sizes + "</td>" +
    "<td>" + data.eaf + "</td>"+
    "<td>" + data.caf + "</td>" +
    "<td>" + data.bat + "</td>" +
    "<td>" + data.tyr.size + "</td>"




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

function DisplayItem(model) { // HTML menue driven data call v2.0
  document.getElementById("ppp").innerHTML = "";
  var v2 = model.toUpperCase();
  var v3 = decodeVinNo(v2);
  getData3(v3);}; 

function myr(start, stop){
  var a=[start], b=start;
  while(b<stop){b++;a.push(b)}
  var first = a[0];
  var last = a[a.length - 1];
  return(first + " - " + last);
};


