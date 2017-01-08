            

var dl_id = [{'id':0, 'name': "AWD"}, {'id':1, 'name': "FWD"}, {'id':2, 'name': "4WD"}, {'id':3, 'name': "RWD"}];
var bs_id = [{'id':0, 'name': "4 Door Sedan FWD"},
            {'id':1, 'name': "4 Door Sedan AWD"},
            {'id':2, 'name': "4 Door Sedan RWD"},
            {'id':3, 'name': "5 Door Hatchback 2WD"}, // SportCXross//CT
            {'id':4, 'name': "2 Door Convertible 2WD"},
            {'id':5, 'name': "2 Door Coupe RWD"},
            {'id':6, 'name': "2 Door Coupe AWD"},
            {'id':7, 'name': "5 Door Wagon FWD"},   //RX
            {'id':8, 'name': "5 Door Wagon AWD"},   //RX/NX
            {'id':9, 'name': "5 Door Wagon 4WD"}];  //LX/GX

var eaf_id = ['17801-0P051','17801-0H010','17801-AD010','17801-31110','17801-0V020','17801-0P070','17801-31170','17801-38051',
    '17801-20050','17801-50040','17801-37021','17801-50030','17801-50060','17801-38030','17801-03010','17801-46080', 'Unknown'];

var bt_id = ['24F','240','27F','270', 'H5', 'H6','51R', '-LEX# With small posts', '28100#'];

var en_id_oil = ['7.2Quarts(0)','5.5Quarts(1)', '6.3Quarts(2)', '6.2Quarts(3)', 'about 6 quarts(4)', 'About 10 quarts (5)'];
var en_id_of = ['04152-YZZA1','04152-YZZA4','04152-YZZA5','04152-YZZA6','90915-YZZD1','90915-YZZD3','90915-YZZF1'];

var en_id = [
    {'id': 0, 'name': '1MZ-FE', 'displacement': '3.0L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},
    {'id': 1, 'name': '1FZ-FE', 'displacement': '4.5L', 'oilfilter': en_id_of[5], 'oil': en_id_oil[1]},
    {'id': 2, 'name': '1LR-GUE', 'displacement': '4.8L', 'oilfilter': '04909-45010', 'oil': '15Quarts Mobil 1 (x)'},//lfa
    {'id': 3, 'name': '1MZ-FE', 'displacement': '3.0L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},
    {'id': 4, 'name': '1UR-FSE', 'displacement': '4.6L', 'oilfilter': en_id_of[2], 'oil': en_id_oil[5]},
    {'id': 5, 'name': '1UZ-FE', 'displacement': '4.0L', 'oilfilter': en_id_of[5], 'oil': en_id_oil[3]},
    {'id': 6, 'name': '2AR-FXE', 'displacement': '2.8L Hybrid', 'oilfilter': en_id_of[0], 'oil': en_id_oil[4]},//NX/ES300
    {'id': 7, 'name': '2AZ-FXE', 'displacement': '2.4L Hybrid', 'oilfilter': en_id_of[6], 'oil': en_id_oil[4]},//HShit
    {'id': 8, 'name': '2GR-FE', 'displacement': '3.5L (1) (Transverse)', 'oilfilter': en_id_of[0], 'oil': en_id_oil[2]},
    {'id': 9, 'name': '2GR-FSE', 'displacement': '3.5L Gas 350 (2) (Longitudinal)', 'oilfilter': en_id_of[2], 'oil': en_id_oil[0]},
    {'id': 10, 'name': '2GR-FXE', 'displacement': '3.5L Hybrid 450h (3)', 'oilfilter': en_id_of[0], 'oil': en_id_oil[0]},
    {'id': 11, 'name': '2GR-FKS', 'displacement': '3.5L Gas 2015+ (longitudinal) (4) ', 'oilfilter': en_id_of[2], 'oil': en_id_oil[0]},
    {'id': 12, 'name': '2GR-FXS', 'displacement': '3.5L Hybrid 450h 2015+ (5) ', 'oilfilter': en_id_of[0], 'oil': en_id_oil[0]},
    {'id': 13, 'name': '2JZ-GE', 'displacement': '3.0L Straight 6', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},
    {'id': 14, 'name': '2UR-GSE', 'displacement': '5.0L', 'oilfilter': en_id_of[1], 'oil': '10Quarts Mobil 1 5-30 (x)'},
    {'id': 15, 'name': '2UR-FSE', 'displacement': '5.0L Hybrid 600hL', 'oilfilter': en_id_of[1], 'oil': en_id_oil[0]},
    {'id': 16, 'name': '2UZ-FE', 'displacement': '4.7L', 'oilfilter': en_id_of[5], 'oil': en_id_oil[3]},
    {'id': 17, 'name': '2VZ-FE', 'displacement': '2.5L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},
    {'id': 18, 'name': '2ZR-FXE', 'displacement': '1.8L', 'oilfilter': en_id_of[3], 'oil': en_id_oil[4]},
    {'id': 19, 'name': '3GR-FSE', 'displacement': '3.0L 2006GS Only motor', 'oilfilter': en_id_of[2], 'oil': en_id_oil[0]},
    {'id': 20, 'name': '3MZ-FE', 'displacement': '3.3L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},//how do i account for an '08 Rx Hybrid???
    {'id': 21, 'name': '3UR-FE', 'displacement': '5.7L', 'oilfilter': en_id_of[1], 'oil': en_id_oil[5]},
    {'id': 22, 'name': '3UZ-FE', 'displacement': '4.3L', 'oilfilter': en_id_of[5], 'oil': en_id_oil[3]},
    {'id': 23, 'name': '3VZ-FE', 'displacement': '3.0L', 'oilfilter': en_id_of[4], 'oil': en_id_oil[1]},
    {'id': 24, 'name': '4GR-FSE', 'displacement': '2.5L IS250', 'oilfilter': en_id_of[2], 'oil': en_id_oil[3]},
    {'id': 25, 'name': '8AR-FTS', 'displacement': '2.0 Turbo', 'oilfilter': en_id_of[0], 'oil': en_id_oil[4]},
    {'id': 26, 'name': '8AR-FXE', 'displacement': '2.0 Turbo', 'oilfilter': en_id_of[0], 'oil': en_id_oil[4]},
    {'id': 27, 'name': '2GR-FKS', 'displacement': '3.5L Gas 2015+ (Transverse) (6) ', 'oilfilter': en_id_of[0], 'oil': en_id_oil[0]}
    ];


var tire_id = [
    {'id': 0, 'size': "225-60R16"},
    {'id': 1, 'size': "235-55R18"}, 
    {'id': 2, 'size': "235-60R18"},
    {'id': 3, 'size': "235-65R18"},
    {'id': 4, 'size': "235-55R19"},
    {'id': 5, 'size': "235-50R20"}
];
//model definitions

var lexusRx = [
    {'vds': 'GF10U', 'model': 'MCU10', 'name': 'RX300', 'eng': en_id[0], 'dln':dl_id[1], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[14], 'tyr': tire_id[0]},
    {'vds': 'HF10U', 'model': 'MCU15', 'name': 'RX300', 'eng': en_id[0], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[14], 'tyr': tire_id[0]},
    {'vds': 'GA31U', 'model': 'MCU33', 'name': 'RX330', 'eng': en_id[20], 'dln':dl_id[1], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[1], 'tyr': tire_id[1]},
    {'vds': 'HA31U', 'model': 'MCU38', 'name': 'RX330', 'eng': en_id[20], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[1], 'tyr': tire_id[1]},
    {'vds': 'GK31U', 'model': 'GSU30', 'name': 'RX350', 'eng': en_id[8], 'dln':dl_id[1], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[1], 'tyr': tire_id[1]},
    {'vds': 'HK31U', 'model': 'GSU35', 'name': 'RX350', 'eng': en_id[8], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[1], 'tyr': tire_id[1]},
    {'vds': 'GW31U', 'model': 'MHU33', 'name': 'RX400H', 'eng': en_id[20], 'dln':dl_id[1], 'bdy': bs_id[1], 'bat': bt_id[6], 'af': eaf_id[8], 'tyr': tire_id[1]},
    {'vds': 'HW31U', 'model': 'MHU38', 'name': 'RX400H', 'eng': en_id[20], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[6], 'af': eaf_id[8], 'tyr': tire_id[1]},
    {'vds': 'ZK1BA', 'model': 'GGL10', 'name': 'RX350', 'eng': en_id[8], 'dln':dl_id[1], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[0], 'tyr': tire_id[2]},
    {'vds': 'BK1BA', 'model': 'GGL15', 'name': 'RX350', 'eng': en_id[8], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[0], 'tyr': tire_id[2]},
    {'vds': 'ZB1BA', 'model': 'GYL10', 'name': 'RX450H', 'eng': en_id[10], 'dln':dl_id[1], 'bdy': bs_id[1], 'bat': bt_id[8], 'af': eaf_id[5], 'tyr': tire_id[2]},
    {'vds': 'BC1BA', 'model': 'GYL15', 'name': 'RX450H', 'eng': en_id[10], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[8], 'af': eaf_id[5], 'tyr': tire_id[3]},
    {'vds': 'BZMCA', 'model': 'GGL25', 'name': 'RX350', 'eng': en_id[27], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[0], 'tyr': tire_id[4]},
    {'vds': 'BGMCA', 'model': 'GYL25', 'name': 'RX450H', 'eng': en_id[10], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[8], 'af': '17801-0P090'}];//missing FWD '16

var lexusGx = [
    {'vds': 'BT20X', 'model': 'UZJ120', 'name': 'GX470', 'eng': en_id[16], 'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[2], 'af': eaf_id[9]},
    {'vds': 'BM7FX', 'model': 'UZJ150', 'name': 'GX460', 'eng': en_id[4], 'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[4], 'af': eaf_id[7]},
    {'vds': 'JM7FX', 'model': 'UZJ150', 'name': 'GX460', 'eng': en_id[4], 'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[0], 'af': eaf_id[7]}];

var lexusNx = [
    {'vds': 'YARBZ', 'model': 'AGZ10', 'name': 'NX200T', 'eng': en_id[25], 'dln':dl_id[1], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[0]},
    {'vds': 'BARBZ', 'model': 'AGZ15', 'name': 'NX200T', 'eng': en_id[25], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[0], 'af': eaf_id[0]},
    {'vds': 'YWRBZ', 'model': 'AYZ10', 'name': 'NX300H', 'eng': en_id[6], 'dln':dl_id[1], 'bdy': bs_id[1], 'bat': bt_id[8], 'af': eaf_id[11]},
    {'vds': 'BJRBZ', 'model': 'AYZ15', 'name': 'NX300H', 'eng': en_id[6], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[8], 'af': eaf_id[11]}];

var lexusLx = [
    {'vds': 'HT00W', 'model': 'UZJ100', 'name': 'LX470', 'eng': en_id[16], 'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[2], 'af': eaf_id[9]},
    {'vds': 'HY00W', 'model': 'URJ201', 'name': 'LX570', 'eng': en_id[21], 'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[2], 'af': eaf_id[13]},
    {'vds': 'HY7AX', 'model': 'URJ201', 'name': 'LX570', 'eng': en_id[21], 'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[2], 'af': eaf_id[13]},
    {'vds': 'HJ88J', 'model': 'FZJ80', 'name': 'LX450', 'eng': en_id[1], 'dln':dl_id[2], 'bdy': bs_id[9], 'bat': bt_id[2], 'af': '17801-FJZ80'}];

var lexusEs = [
    {'vds': 'VV22T', 'model': 'VZV21', 'name': 'ES250', 'eng': en_id[17], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[15]},
    {'vds': 'VK13T', 'model': 'VCV10', 'name': 'ES300', 'eng': en_id[23], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[14]},
    {'vds': 'GK13T', 'model': 'MCV10', 'name': 'ES300', 'eng': en_id[23], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[14]},
    {'vds': 'BF12G', 'model': 'MCV10', 'name': 'ES300', 'eng': en_id[0], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[14]},
    {'vds': 'BF22G', 'model': 'MCV20', 'name': 'ES300', 'eng': en_id[0], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[14]},
    {'vds': 'BF28G', 'model': 'MCV20', 'name': 'ES300', 'eng': en_id[0], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[14]},
    {'vds': 'BF30G', 'model': 'MCV30', 'name': 'ES300', 'eng': en_id[0], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[1]},
    {'vds': 'BA30G', 'model': 'MCV31', 'name': 'ES330', 'eng': en_id[20], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[1]},
    {'vds': 'BJ46G', 'model': 'GSV40', 'name': 'ES350', 'eng': en_id[8], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[2]},
    {'vds': 'BK1EG', 'model': 'GSV40', 'name': 'ES350', 'eng': en_id[8], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[2]},
    {'vds': 'BW1GG', 'model': 'AVV60', 'name': 'ES300H', 'eng': en_id[6], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[8], 'af': eaf_id[4]},
    {'vds': 'BK1GG', 'model': 'GSV60', 'name': 'ES350', 'eng': en_id[8], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[0], 'af': eaf_id[0]}];
    
var lexusIs = [
    {'vds': 'BD182', 'model': 'JCE10', 'name': 'IS300', 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[15]},
    {'vds': 'BD192', 'model': 'JCE10', 'name': 'IS300', 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[15]},
    {'vds': 'ED192', 'model': 'JCE10', 'name': 'IS300', 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[15]},
    {'vds': 'BK262', 'model': 'GSE20', 'name': 'IS250', 'eng': en_id[24], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'BE262', 'model': 'GSE21', 'name': 'IS350', 'eng': en_id[9], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'CK262', 'model': 'GSE25', 'name': 'IS250', 'eng': en_id[24], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'BP262', 'model': 'USE20', 'name': 'IS-F', 'eng': en_id[14], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af':  '17801-38021'},
    {'vds': 'BP5C2', 'model': 'USE20', 'name': 'IS-F', 'eng': en_id[14], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af':  '17801-38021'},
    {'vds': 'BF5C2', 'model': 'GSE20', 'name': 'IS250', 'eng': en_id[24], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'BE5C2', 'model': 'GSE21', 'name': 'IS350', 'eng': en_id[9], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'CF5C2', 'model': 'GSE25', 'name': 'IS250', 'eng': en_id[24], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'FF2C2', 'model': 'GSE20', 'name': 'IS250-C','eng': en_id[24],'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'FE2C2', 'model': 'GSE21', 'name': 'IS350-C','eng': en_id[9], 'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'CE5C2', 'model': 'GSE26', 'name': 'IS350', 'eng': en_id[9], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'CF1D2', 'model': 'GSE35', 'name': 'IS250', 'eng': en_id[24], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'BF1D2', 'model': 'GSE30', 'name': 'IS250', 'eng': en_id[24], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'BE1D2', 'model': 'GSE31', 'name': 'IS350', 'eng': en_id[9], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'CE1D2', 'model': 'GSE36', 'name': 'IS350', 'eng': en_id[9], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'CM1D2', 'model': 'GSE37', 'name': 'IS300', 'eng': en_id[9], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'BA1D2', 'model': 'ASE30', 'name': 'IS200T', 'eng': en_id[25], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[6]}];
var lexusGs = [
    {'vds': 'BE1BL', 'model': 'GRL10', 'name': 'GS350', 'eng': en_id[9], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'BZ1BL', 'model': 'GRL12', 'name': 'GS350', 'eng': en_id[11], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'CE1BL', 'model': 'GRL15', 'name': 'GS350', 'eng': en_id[9], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'CZ1BL', 'model': 'GRL16', 'name': 'GS350', 'eng': en_id[11], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'BP1BL', 'model': 'URL10', 'name': 'GS-F', 'eng': en_id[14], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[4], 'af': '17801-38021'},
    {'vds': 'JS47E', 'model': 'JZS147', 'name': 'GS300', 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': '17801-50020'},
    {'vds': 'BD42S', 'model': 'JZS147', 'name': 'GS300', 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': '17801-50020'},
    {'vds': 'BD68S', 'model': 'JZS160', 'name': 'GS300', 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[15]},
    {'vds': 'BD69S', 'model': 'JZS160', 'name': 'GS300', 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[15]},
    {'vds': 'BH68X', 'model': 'UZS160', 'name': 'GS400', 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[11]},
    {'vds': 'BL69S', 'model': 'UZS161', 'name': 'GS430', 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[12]},
    {'vds': 'BH96S', 'model': 'GRS190', 'name': 'GS300', 'eng': en_id[19], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[12]},
    {'vds': 'BE96S', 'model': 'GRS191', 'name': 'GS350', 'eng': en_id[9], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'CE96S', 'model': 'GRS196', 'name': 'GS350', 'eng': en_id[9], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'CE1KS', 'model': 'GRS196', 'name': 'GS350', 'eng': en_id[9], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'BE1KS', 'model': 'GRS191', 'name': 'GS350', 'eng': en_id[9], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[3]},
    {'vds': 'BC96S', 'model': 'GWS191', 'name': 'GS450H', 'eng': en_id[10], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[12]},
    {'vds': 'BC1KS', 'model': 'GWS191', 'name': 'GS450H', 'eng': en_id[10], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[12]},
    {'vds': 'BL96S', 'model': 'URS190', 'name': 'GS460', 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': '17801-38040'},
    {'vds': 'BL1KS', 'model': 'URS190', 'name': 'GS460', 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': '17801-38040'},
    {'vds': 'BN96S', 'model': 'UZS190', 'name': 'GS430', 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[16]},
    {'vds': 'CH96S', 'model': 'GRS195', 'name': 'GS300', 'eng': en_id[19], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[1], 'af': eaf_id[12]},
    {'vds': 'BA1BL', 'model': 'ARL10', 'name': 'GS200T', 'eng': en_id[25], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[6]}];

var lexusLs = [
    {'vds': 'UF11E', 'model': 'UCV10', 'name': 'LS400', 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[2], 'af': '17801-50010-83'},
    {'vds': 'UF22E', 'model': 'UCF20', 'name': 'LS400', 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[0], 'af': '17801-50010-83'},
    {'vds': 'BH28F', 'model': 'UCF20', 'name': 'LS400', 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[0], 'af': '17801-50010-83'},
    {'vds': 'BN30F', 'model': 'UCF30', 'name': 'LS430', 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[0], 'af': eaf_id[11]},
    {'vds': 'BN36F', 'model': 'UCF30', 'name': 'LS430', 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[0], 'af': eaf_id[11]},
    {'vds': 'BL46F', 'model': 'USF40', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[1], 'af': eaf_id[4]},
    {'vds': 'BL5EF', 'model': 'USF40', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[3], 'af': eaf_id[4]},
    {'vds': 'BL1EF', 'model': 'USF40', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[3], 'af': eaf_id[4]},
    {'vds': 'GL46F', 'model': 'USF41', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[3], 'af': eaf_id[4]},
    {'vds': 'GL1EF', 'model': 'USF41', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[3], 'af': eaf_id[4]},
    {'vds': 'GL5EF', 'model': 'USF41', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[3], 'af': eaf_id[4]},
    {'vds': 'CL46F', 'model': 'USF45', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[3], 'af': eaf_id[4]},
    {'vds': 'CL5EF', 'model': 'USF45', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[3], 'af': eaf_id[4]},
    {'vds': 'DL46F', 'model': 'USF46', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[3], 'af': eaf_id[4]},
    {'vds': 'DL5EF', 'model': 'USF46', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[3], 'af': eaf_id[4]},
    {'vds': 'DL1EF', 'model': 'USF46', 'name': 'LS460', 'eng': en_id[4], 'dln':dl_id[0], 'bdy': bs_id[1], 'bat': bt_id[3], 'af': eaf_id[4]},
    {'vds': 'DU46F', 'model': 'UVF46', 'name': 'LS600HL', 'eng': en_id[15], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[8], 'af': eaf_id[4]},
    {'vds': 'DU1EF', 'model': 'UVF46', 'name': 'LS600HL', 'eng': en_id[15], 'dln':dl_id[3], 'bdy': bs_id[2], 'bat': bt_id[8], 'af': eaf_id[4]}];

var lexusSc = [
    {'vds': 'JZ31C', 'model': 'JZZ31', 'name': 'SC300', 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[2], 'af': eaf_id[16]},
    {'vds': 'CD32Z', 'model': 'JZZ31', 'name': 'SC300', 'eng': en_id[13], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[2], 'af': eaf_id[16]},
    {'vds': 'UZ30C', 'model': 'UZZ30', 'name': 'SC400', 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[2], 'af': eaf_id[16]},
    {'vds': 'CH32Y', 'model': 'UZZ30', 'name': 'SC400', 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[0], 'af': eaf_id[16]},
    {'vds': 'CH32Y', 'model': 'UZZ30', 'name': 'SC400', 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[0], 'af': eaf_id[16]},
    {'vds': 'CH32Y', 'model': 'UZZ30', 'name': 'SC400', 'eng': en_id[5], 'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[0], 'af': eaf_id[16]},
    {'vds': 'FN48Y', 'model': 'UZZ40', 'name': 'SC430', 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[5], 'af': eaf_id[12]},
    {'vds': 'FN45Y', 'model': 'UZZ40', 'name': 'SC430', 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[5], 'af': eaf_id[12]},
    {'vds': 'FN2EY', 'model': 'UZZ40', 'name': 'SC430', 'eng': en_id[22], 'dln':dl_id[3], 'bdy': bs_id[4], 'bat': bt_id[5], 'af': eaf_id[12]}];

var lexusRc = [
    {'vds': 'SE5BC', 'model': 'GSC15', 'name': 'RC350', 'eng': en_id[9], 'dln':dl_id[0], 'bdy': bs_id[6], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'SM5BC', 'model': 'GSC16', 'name': 'RC300', 'eng': en_id[11], 'dln':dl_id[0], 'bdy': bs_id[6], 'bat': bt_id[1], 'af': eaf_id[6]},
    {'vds': 'HP5BC', 'model': 'USC10', 'name': 'RC-F', 'eng': en_id[14], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[4], 'af':  '17801-38021'},
    {'vds': 'HA5BC', 'model': 'ASC10', 'name': 'RC200T', 'eng': en_id[25], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': bt_id[4], 'af': eaf_id[6]}];

var lexusCt = [
    {'vds': 'KD5BH', 'model': 'ZWA10', 'name': 'CT200H', 'eng': en_id[18], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[7], 'af': eaf_id[10]}];

var lexusHs = [
    {'vds': 'BB1BA', 'model': 'ANF10', 'name': 'HS250H', 'eng': en_id[7], 'dln':dl_id[1], 'bdy': bs_id[0], 'bat': bt_id[8], 'af': eaf_id[4]}];

var lexusLFA = [
    {'vds': 'HX8BH', 'model': 'LFA10', 'name': 'LFA', 'eng': en_id[2], 'dln':dl_id[3], 'bdy': bs_id[5], 'bat': 'idk', 'af': 'idk'}];

    


var allmodels = [lexusRx, lexusEs, lexusGx, lexusNx, lexusLx, lexusIs, lexusGs, lexusLs, lexusSc, lexusLFA, lexusRc, lexusHs, lexusCt];
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

function getData2(mod) {  // refined searches called from HTML web page // name 0-2 ie  RX LS model 0-3 ie MCU1
    for (i=0; i<l.length; i++) {
      console.log(mod);
        for (var j=0; j < l[i].length; j++) {
            if(l[i][j].name.substring(0,2) === mod) {  //If called by 2 letter name, display all itterations
                PrintHTMLVehicleData(l[i][j]);
                console.log(l[i][j].model + " 21 GetData2 2Digit Model Name");  
            }if(l[i][j].model === mod) {  // CATCH FULL MODEL
                PrintHTMLVehicleData(l[i][j]);
                console.log(l[i][j].model + " 22 GetData2 model full ");
            }if(l[i][j].model.substring(0,4).toString() === mod) {  //CATCH PARTIAL MODEL CODE (GYL1) OR (MCU1)
                console.log(l[i][j].model + " 23 GetData2 model 0 4 ");
                PrintHTMLVehicleData(l[i][j]);
            }if(l[i][j].model.substring(1,4).toString() === mod) {  //CATCH PARTIAL MODEL CODE   (CV1)
                console.log(l[i][j].model  + " 24 GetData2 model 1 4");  
                PrintHTMLVehicleData(l[i][j]);
            }if(l[i][j].vds.substring(2,5).toString() === mod) {  //CATCH VDS 678 match for RX models L MODEL, digits 2 3 & 4 (^123^)
                PrintHTMLVehicleData(l[i][j]);
                console.log(l[i][j].model + " 25 GetData2 vds 2 5 ");
            }
        }
    }
}  


//PrintHTMLVehicleData(l[i][j]); ("l" being lexusModels array in the lexus Heihachi file. )
var PrintHTMLVehicleData = function(data) { 
  var li = document.createElement("li"); 
  li.innerHTML = (data.name.substring(0, 2) + " model.  If the VIN## contains " + data.vds + " it would be an " + data.name + " " + data.dln.name + "  ( " + data.model + " ) Engine: ( " + data.eng.name + " )  Oil Filter: " +
    data.eng.oilfilter + '.  Battery: ' + data.bat + ". Air Filter:  " + data.af);// + " TireSize: " + data.tyr.size
  var ul = document.getElementById("ppp"); 
  ul.appendChild(li);
};

// PRINT data = function(data) {


window.onload = init; // js for search box
function init() { 
  var button = document.getElementById("addButton"); 
  button.onclick = handleButtonClick;
}

function handleButtonClick() { // search box
  document.getElementById("ppp").innerHTML = "";
  var textInput = document.getElementById("getInputString");
  var v2 = textInput.value.toUpperCase();
  var v3 = decodeVinNo(v2); 
  getData(v3);
};

function DisplayVehicle(model) { // HTML menue driven data call
  document.getElementById("ppp").innerHTML = "";
  var v2 = model.toUpperCase();
  var v3 = decodeVinNo(v2);
  getData2(v3);
  
}; 








