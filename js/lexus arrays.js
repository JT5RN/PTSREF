            

//paul's lexus digestion 2.0
var myFb = [    {'id':0, '04465': "48100", '04945': "0E020", '04947': "48050",'43512':"0E021"},//04-09 RX
                {'id':1, '04465': "0E010", '04945': "0E040", '04947': "0E0#0",'43512':"0E030"},//10-15 RX
                {'id':2, '04465': "33471", '04945': "...", '04947': "...",'43512':"06150"}];//07-16 ES

var drivetrain = [{'id':0, 'name': "AWD"}, {'id':1, 'name': "FWD"}, {'id':2, 'name': "4WD"}, {'id':3, 'name': "RWD"}];
var mybs = [{'id':0, 'name': "4 Door Sedan FWD"},
            {'id':1, 'name': "4 Door Sedan AWD"},
            {'id':2, 'name': "4 Door Sedan RWD"},
            {'id':3, 'name': "5 Door Hatchback 2WD"}, // SportCXross//CT
            {'id':4, 'name': "2 Door Convertible 2WD"},
            {'id':5, 'name': "2 Door Coupe RWD"},
            {'id':6, 'name': "2 Door Coupe AWD"},
            {'id':7, 'name': "5 Door Wagon FWD"},   //RX
            {'id':8, 'name': "5 Door Wagon AWD"},   //RX/NX
            {'id':9, 'name': "5 Door Wagon 4WD"}];  //LX/GX
var myEngineOF = ['04152-YZZA1','04152-YZZA4','04152-YZZA5','04152-YZZA6','90915-YZZD1','90915-YZZD3','90915-YZZF1'];
var myAF = ['17801-0P051','17801-0H010','17801-AD010','17801-31110','17801-0V020','17801-0P070','17801-31170','17801-38051',
    '17801-20050','17801-50040','17801-37021','17801-50030','17801-50060','17801-38030','17801-03010','17801-46080', 'Unknown'];
        
var myEngineOil = ['7.2Quarts(0)','5.5Quarts(1)', '6.3Quarts(2)', '6.2Quarts(3)', 'about 6 quarts(4)', 'About 10 quarts (5)'];
var myBatt = ['24F','240','27F','270', 'H5', 'H6','51R', '-LEX# With small posts', '28100#'];
var myEngine = [
    {'id': 0, 'name': '1MZ-FE', 'displacement': '3.0L', 'oilfilter': myEngineOF[4], 'oil': myEngineOil[1]},
    {'id': 1, 'name': '1FZ-FE', 'displacement': '4.5L', 'oilfilter': myEngineOF[5], 'oil': myEngineOil[1]},
    {'id': 2, 'name': '1LR-GUE', 'displacement': '4.8L', 'oilfilter': '04909-45010', 'oil': '15Quarts Mobil 1 (x)'},//lfa
    {'id': 3, 'name': '1MZ-FE', 'displacement': '3.0L', 'oilfilter': myEngineOF[4], 'oil': myEngineOil[1]},
    {'id': 4, 'name': '1UR-FSE', 'displacement': '4.6L', 'oilfilter': myEngineOF[2], 'oil': myEngineOil[5]},
    {'id': 5, 'name': '1UZ-FE', 'displacement': '4.0L', 'oilfilter': myEngineOF[5], 'oil': myEngineOil[3]},
    {'id': 6, 'name': '2AR-FXE', 'displacement': '2.8L Hybrid', 'oilfilter': myEngineOF[0], 'oil': myEngineOil[4]},//NX/ES300
    {'id': 7, 'name': '2AZ-FXE', 'displacement': '2.4L Hybrid', 'oilfilter': myEngineOF[6], 'oil': myEngineOil[4]},//HShit
    {'id': 8, 'name': '2GR-FE', 'displacement': '3.5L (1) (Transverse)', 'oilfilter': myEngineOF[0], 'oil': myEngineOil[2]},
    {'id': 9, 'name': '2GR-FSE', 'displacement': '3.5L Gas 350 (2) (Longitudinal)', 'oilfilter': myEngineOF[2], 'oil': myEngineOil[0]},
    {'id': 10, 'name': '2GR-FXE', 'displacement': '3.5L Hybrid 450h (3)', 'oilfilter': myEngineOF[0], 'oil': myEngineOil[0]},
    {'id': 11, 'name': '2GR-FKS', 'displacement': '3.5L Gas 2015+ (longitudinal) (4) ', 'oilfilter': myEngineOF[2], 'oil': myEngineOil[0]},
    {'id': 12, 'name': '2GR-FXS', 'displacement': '3.5L Hybrid 450h 2015+ (5) ', 'oilfilter': myEngineOF[0], 'oil': myEngineOil[0]},
    {'id': 13, 'name': '2JZ-GE', 'displacement': '3.0L Straight 6', 'oilfilter': myEngineOF[4], 'oil': myEngineOil[1]},
    {'id': 14, 'name': '2UR-GSE', 'displacement': '5.0L', 'oilfilter': myEngineOF[1], 'oil': '10Quarts Mobil 1 5-30 (x)'},
    {'id': 15, 'name': '2UR-FSE', 'displacement': '5.0L Hybrid 600hL', 'oilfilter': myEngineOF[1], 'oil': myEngineOil[0]},
    {'id': 16, 'name': '2UZ-FE', 'displacement': '4.7L', 'oilfilter': myEngineOF[5], 'oil': myEngineOil[3]},
    {'id': 17, 'name': '2VZ-FE', 'displacement': '2.5L', 'oilfilter': myEngineOF[4], 'oil': myEngineOil[1]},
    {'id': 18, 'name': '2ZR-FXE', 'displacement': '1.8L', 'oilfilter': myEngineOF[3], 'oil': myEngineOil[4]},
    {'id': 19, 'name': '3GR-FSE', 'displacement': '3.0L 2006GS Only motor', 'oilfilter': myEngineOF[2], 'oil': myEngineOil[0]},
    {'id': 20, 'name': '3MZ-FE', 'displacement': '3.3L', 'oilfilter': myEngineOF[4], 'oil': myEngineOil[1]},//how do i account for an '08 Rx Hybrid???
    {'id': 21, 'name': '3UR-FE', 'displacement': '5.7L', 'oilfilter': myEngineOF[1], 'oil': myEngineOil[5]},
    {'id': 22, 'name': '3UZ-FE', 'displacement': '4.3L', 'oilfilter': myEngineOF[5], 'oil': myEngineOil[3]},
    {'id': 23, 'name': '3VZ-FE', 'displacement': '3.0L', 'oilfilter': myEngineOF[4], 'oil': myEngineOil[1]},
    {'id': 24, 'name': '4GR-FSE', 'displacement': '2.5L IS250', 'oilfilter': myEngineOF[2], 'oil': myEngineOil[3]},
    {'id': 25, 'name': '8AR-FTS', 'displacement': '2.0 Turbo', 'oilfilter': myEngineOF[0], 'oil': myEngineOil[4]},
    {'id': 26, 'name': '8AR-FXE', 'displacement': '2.0 Turbo', 'oilfilter': myEngineOF[0], 'oil': myEngineOil[4]},
    {'id': 27, 'name': '2GR-FKS', 'displacement': '3.5L Gas 2015+ (Transverse) (6) ', 'oilfilter': myEngineOF[0], 'oil': myEngineOil[0]},
    {'id': 28, 'name': '2AZ', 'displacement': 'ToyotaEngine#1', 'oilfilter': myEngineOF[6], 'oil': myEngineOil[4]}];//ENGINES.
         

//model definitions

var lexusRx = [
    {'id':0, 'vds': 'GF10U', 'model': 'MCU10', 'name': 'RX300', 'engine': myEngine[0], 'drive':drivetrain[1], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[14]},
    {'id':1, 'vds': 'HF10U', 'model': 'MCU15', 'name': 'RX300', 'engine': myEngine[0], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[14]},
    {'id':2, 'vds': 'GA31U', 'model': 'MCU33', 'name': 'RX330', 'engine': myEngine[20], 'drive':drivetrain[1], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[1]},
    {'id':3, 'vds': 'HA31U', 'model': 'MCU38', 'name': 'RX330', 'engine': myEngine[20], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[1]},
    {'id':4, 'vds': 'GK31U', 'model': 'GSU30', 'name': 'RX350', 'engine': myEngine[8], 'drive':drivetrain[1], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[1]},
    {'id':5, 'vds': 'HK31U', 'model': 'GSU35', 'name': 'RX350', 'engine': myEngine[8], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[1]},
    {'id':6, 'vds': 'GW31U', 'model': 'MHU33', 'name': 'RX400H', 'engine': myEngine[20], 'drive':drivetrain[1], 'body': mybs[1], 'battery': myBatt[6], 'af': myAF[8]},
    {'id':7, 'vds': 'HW31U', 'model': 'MHU38', 'name': 'RX400H', 'engine': myEngine[20], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[6], 'af': myAF[8]},
    {'id':8, 'vds': 'ZK1BA', 'model': 'GGL10', 'name': 'RX350', 'engine': myEngine[8], 'drive':drivetrain[1], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[0]},
    {'id':9, 'vds': 'BK1BA', 'model': 'GGL15', 'name': 'RX350', 'engine': myEngine[8], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[0]},
    {'id':10, 'vds': 'ZB1BA', 'model': 'GYL10', 'name': 'RX450H', 'engine': myEngine[10], 'drive':drivetrain[1], 'body': mybs[1], 'battery': myBatt[8], 'af': myAF[5]},
    {'id':11, 'vds': 'BC1BA', 'model': 'GYL15', 'name': 'RX450H', 'engine': myEngine[10], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[8], 'af': myAF[5]},
    {'id':12, 'vds': 'BZMCA', 'model': 'GGL25', 'name': 'RX350', 'engine': myEngine[27], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[0]},
    {'id':13, 'vds': 'BGMCA', 'model': 'GYL25', 'name': 'RX450H', 'engine': myEngine[10], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[8], 'af': '17801-0P090'}];//missing FWD '16

var lexusGx = [
    {'id':0, 'vds': 'BT20X', 'model': 'UZJ120', 'name': 'GX470', 'engine': myEngine[16], 'drive':drivetrain[2], 'body': mybs[9], 'battery': myBatt[2], 'af': myAF[9]},
    {'id':1, 'vds': 'BM7FX', 'model': 'UZJ150', 'name': 'GX460', 'engine': myEngine[4], 'drive':drivetrain[2], 'body': mybs[9], 'battery': myBatt[4], 'af': myAF[7]},
    {'id':2, 'vds': 'JM7FX', 'model': 'UZJ150', 'name': 'GX460', 'engine': myEngine[4], 'drive':drivetrain[2], 'body': mybs[9], 'battery': myBatt[0], 'af': myAF[7]}];

var lexusNx = [
    {'id':0, 'vds': 'YARBZ', 'model': 'AGZ10', 'name': 'NX200T', 'engine': myEngine[25], 'drive':drivetrain[1], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[0]},
    {'1d':1, 'vds': 'BARBZ', 'model': 'AGZ15', 'name': 'NX200T', 'engine': myEngine[25], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[0], 'af': myAF[0]},
    {'1d':2, 'vds': 'YWRBZ', 'model': 'AYZ10', 'name': 'NX300H', 'engine': myEngine[6], 'drive':drivetrain[1], 'body': mybs[1], 'battery': myBatt[8], 'af': myAF[11]},
    {'1d':3, 'vds': 'BJRBZ', 'model': 'AYZ15', 'name': 'NX300H', 'engine': myEngine[6], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[8], 'af': myAF[11]}];

var lexusLx = [
    {'1d':0, 'vds': 'HT00W', 'model': 'UZJ100', 'name': 'LX470', 'engine': myEngine[16], 'drive':drivetrain[2], 'body': mybs[9], 'battery': myBatt[2], 'af': myAF[9]},
    {'1d':1, 'vds': 'HY00W', 'model': 'URJ201', 'name': 'LX570', 'engine': myEngine[21], 'drive':drivetrain[2], 'body': mybs[9], 'battery': myBatt[2], 'af': myAF[13]},
    {'1d':2, 'vds': 'HY7AX', 'model': 'URJ201', 'name': 'LX570', 'engine': myEngine[21], 'drive':drivetrain[2], 'body': mybs[9], 'battery': myBatt[2], 'af': myAF[13]},
    {'1d':3, 'vds': 'HJ88J', 'model': 'FZJ80', 'name': 'LX450', 'engine': myEngine[1], 'drive':drivetrain[2], 'body': mybs[9], 'battery': myBatt[2], 'af': '17801-FJZ80'}];

var lexusEs = [
    {'1d':0, 'vds': 'VV22T', 'model': 'VZV21', 'name': 'ES250', 'engine': myEngine[17], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[15]},
    {'1d':1, 'vds': 'VK13T', 'model': 'VCV10', 'name': 'ES300', 'engine': myEngine[23], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[14]},
    {'1d':2, 'vds': 'GK13T', 'model': 'MCV10', 'name': 'ES300', 'engine': myEngine[23], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[14]},
    {'1d':3, 'vds': 'BF12G', 'model': 'MCV10', 'name': 'ES300', 'engine': myEngine[0], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[14]},
    {'1d':4, 'vds': 'BF22G', 'model': 'MCV20', 'name': 'ES300', 'engine': myEngine[0], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[14]},
    {'1d':5, 'vds': 'BF28G', 'model': 'MCV20', 'name': 'ES300', 'engine': myEngine[0], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[14]},
    {'1d':6, 'vds': 'BF30G', 'model': 'MCV30', 'name': 'ES300', 'engine': myEngine[0], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[1]},
    {'1d':7, 'vds': 'BA30G', 'model': 'MCV31', 'name': 'ES330', 'engine': myEngine[20], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[1]},
    {'1d':8, 'vds': 'BJ46G', 'model': 'GSV40', 'name': 'ES350', 'engine': myEngine[8], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[2]},
    {'1d':9, 'vds': 'BK1EG', 'model': 'GSV40', 'name': 'ES350', 'engine': myEngine[8], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[2]},
    {'1d':10,'vds': 'BW1GG', 'model': 'AVV60', 'name': 'ES300H', 'engine': myEngine[6], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[8], 'af': myAF[4]},
    {'1d':11,'vds': 'BK1GG', 'model': 'GSV60', 'name': 'ES350', 'engine': myEngine[8], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[0], 'af': myAF[0]}];
    
var lexusIs = [
    {'1d':0, 'vds': 'BD182', 'model': 'JCE10', 'name': 'IS300', 'engine': myEngine[13], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[15]},
    {'1d':1, 'vds': 'BD192', 'model': 'JCE10', 'name': 'IS300', 'engine': myEngine[13], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[15]},
    {'1d':2, 'vds': 'ED192', 'model': 'JCE10', 'name': 'IS300', 'engine': myEngine[13], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[15]},
    {'1d':3, 'vds': 'BK262', 'model': 'GSE20', 'name': 'IS250', 'engine': myEngine[24], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':4, 'vds': 'BE262', 'model': 'GSE21', 'name': 'IS350', 'engine': myEngine[9], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':5, 'vds': 'CK262', 'model': 'GSE25', 'name': 'IS250', 'engine': myEngine[24], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':6, 'vds': 'BP262', 'model': 'USE20', 'name': 'IS-F', 'engine': myEngine[14], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af':  '17801-38021'},
    {'1d':7, 'vds': 'BP5C2', 'model': 'USE20', 'name': 'IS-F', 'engine': myEngine[14], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af':  '17801-38021'},
    {'1d':8, 'vds': 'BF5C2', 'model': 'GSE20', 'name': 'IS250', 'engine': myEngine[24], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':9, 'vds': 'BE5C2', 'model': 'GSE21', 'name': 'IS350', 'engine': myEngine[9], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':10, 'vds': 'CF5C2', 'model': 'GSE25', 'name': 'IS250', 'engine': myEngine[24], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':11, 'vds': 'FF2C2', 'model': 'GSE20', 'name': 'IS250-C','engine': myEngine[24],'drive':drivetrain[3], 'body': mybs[4], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':12, 'vds': 'FE2C2', 'model': 'GSE21', 'name': 'IS350-C','engine': myEngine[9], 'drive':drivetrain[3], 'body': mybs[4], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':13, 'vds': 'CE5C2', 'model': 'GSE26', 'name': 'IS350', 'engine': myEngine[9], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':14, 'vds': 'CF1D2', 'model': 'GSE35', 'name': 'IS250', 'engine': myEngine[24], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':15, 'vds': 'BF1D2', 'model': 'GSE30', 'name': 'IS250', 'engine': myEngine[24], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':16, 'vds': 'BE1D2', 'model': 'GSE31', 'name': 'IS350', 'engine': myEngine[9], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':17, 'vds': 'CE1D2', 'model': 'GSE36', 'name': 'IS350', 'engine': myEngine[9], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':18, 'vds': 'CM1D2', 'model': 'GSE37', 'name': 'IS300', 'engine': myEngine[9], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':19, 'vds': 'BA1D2', 'model': 'ASE30', 'name': 'IS200T', 'engine': myEngine[25], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[6]}];
var lexusGs = [
    {'1d':0, 'vds': 'BE1BL', 'model': 'GRL10', 'name': 'GS350', 'engine': myEngine[9], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':1, 'vds': 'BZ1BL', 'model': 'GRL12', 'name': 'GS350', 'engine': myEngine[11], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':2, 'vds': 'CE1BL', 'model': 'GRL15', 'name': 'GS350', 'engine': myEngine[9], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':3, 'vds': 'CZ1BL', 'model': 'GRL16', 'name': 'GS350', 'engine': myEngine[11], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':4, 'vds': 'BP1BL', 'model': 'URL10', 'name': 'GS-F', 'engine': myEngine[14], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[4], 'af': '17801-38021'},
    {'1d':5, 'vds': 'JS47E', 'model': 'JZS147', 'name': 'GS300', 'engine': myEngine[13], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': '17801-50020'},
    {'1d':6, 'vds': 'BD42S', 'model': 'JZS147', 'name': 'GS300', 'engine': myEngine[13], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': '17801-50020'},
    {'1d':7, 'vds': 'BD68S', 'model': 'JZS160', 'name': 'GS300', 'engine': myEngine[13], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[15]},
    {'1d':8, 'vds': 'BD69S', 'model': 'JZS160', 'name': 'GS300', 'engine': myEngine[13], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[15]},
    {'1d':9, 'vds': 'BH68X', 'model': 'UZS160', 'name': 'GS400', 'engine': myEngine[5], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[11]},
    {'1d':10, 'vds': 'BL69S', 'model': 'UZS161', 'name': 'GS430', 'engine': myEngine[22], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[12]},
    {'1d':11, 'vds': 'BH96S', 'model': 'GRS190', 'name': 'GS300', 'engine': myEngine[19], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[12]},
    {'1d':12, 'vds': 'BE96S', 'model': 'GRS191', 'name': 'GS350', 'engine': myEngine[9], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':13, 'vds': 'CE96S', 'model': 'GRS196', 'name': 'GS350', 'engine': myEngine[9], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':14, 'vds': 'CE1KS', 'model': 'GRS196', 'name': 'GS350', 'engine': myEngine[9], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':15, 'vds': 'BE1KS', 'model': 'GRS191', 'name': 'GS350', 'engine': myEngine[9], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[3]},
    {'1d':16, 'vds': 'BC96S', 'model': 'GWS191', 'name': 'GS450H', 'engine': myEngine[10], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[12]},
    {'1d':17, 'vds': 'BC1KS', 'model': 'GWS191', 'name': 'GS450H', 'engine': myEngine[10], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[12]},
    {'1d':18, 'vds': 'BL96S', 'model': 'URS190', 'name': 'GS460', 'engine': myEngine[4], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': '17801-38040'},
    {'1d':19, 'vds': 'BL1KS', 'model': 'URS190', 'name': 'GS460', 'engine': myEngine[4], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': '17801-38040'},
    {'1d':20, 'vds': 'BN96S', 'model': 'UZS190', 'name': 'GS430', 'engine': myEngine[22], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[16]},
    {'1d':21, 'vds': 'CH96S', 'model': 'GRS195', 'name': 'GS300', 'engine': myEngine[19], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[1], 'af': myAF[12]},
    {'1d':22, 'vds': 'BA1BL', 'model': 'ARL10', 'name': 'GS200T', 'engine': myEngine[25], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[6]}];

var lexusLs = [
    {'1d':0, 'vds': 'UF11E', 'model': 'UCV10', 'name': 'LS400', 'engine': myEngine[5], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[2], 'af': '17801-50010-83'},
    {'1d':1, 'vds': 'UF22E', 'model': 'UCF20', 'name': 'LS400', 'engine': myEngine[5], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[0], 'af': '17801-50010-83'},
    {'1d':2, 'vds': 'BH28F', 'model': 'UCF20', 'name': 'LS400', 'engine': myEngine[5], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[0], 'af': '17801-50010-83'},
    {'1d':3, 'vds': 'BN30F', 'model': 'UCF30', 'name': 'LS430', 'engine': myEngine[22], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[0], 'af': myAF[11]},
    {'1d':4, 'vds': 'BN36F', 'model': 'UCF30', 'name': 'LS430', 'engine': myEngine[22], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[0], 'af': myAF[11]},
    {'1d':5, 'vds': 'BL46F', 'model': 'USF40', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[1], 'af': myAF[4]},
    {'1d':6, 'vds': 'BL5EF', 'model': 'USF40', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[3], 'af': myAF[4]},
    {'1d':7, 'vds': 'BL1EF', 'model': 'USF40', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[3], 'af': myAF[4]},
    {'1d':8, 'vds': 'GL46F', 'model': 'USF41', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[3], 'af': myAF[4]},
    {'1d':9, 'vds': 'GL1EF', 'model': 'USF41', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[3], 'af': myAF[4]},
    {'1d':10, 'vds': 'GL5EF', 'model': 'USF41', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[3], 'af': myAF[4]},
    {'1d':11, 'vds': 'CL46F', 'model': 'USF45', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[3], 'af': myAF[4]},
    {'1d':12, 'vds': 'CL5EF', 'model': 'USF45', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[3], 'af': myAF[4]},
    {'1d':13, 'vds': 'DL46F', 'model': 'USF46', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[3], 'af': myAF[4]},
    {'1d':14, 'vds': 'DL5EF', 'model': 'USF46', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[3], 'af': myAF[4]},
    {'1d':15, 'vds': 'DL1EF', 'model': 'USF46', 'name': 'LS460', 'engine': myEngine[4], 'drive':drivetrain[0], 'body': mybs[1], 'battery': myBatt[3], 'af': myAF[4]},
    {'1d':16, 'vds': 'DU46F', 'model': 'UVF46', 'name': 'LS600HL', 'engine': myEngine[15], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[8], 'af': myAF[4]},
    {'1d':17, 'vds': 'DU1EF', 'model': 'UVF46', 'name': 'LS600HL', 'engine': myEngine[15], 'drive':drivetrain[3], 'body': mybs[2], 'battery': myBatt[8], 'af': myAF[4]}];

var lexusSc = [
    {'1d':0, 'vds': 'JZ31C', 'model': 'JZZ31', 'name': 'SC300', 'engine': myEngine[13], 'drive':drivetrain[3], 'body': mybs[5], 'battery': myBatt[2], 'af': myAF[16]},
    {'1d':1, 'vds': 'CD32Z', 'model': 'JZZ31', 'name': 'SC300', 'engine': myEngine[13], 'drive':drivetrain[3], 'body': mybs[5], 'battery': myBatt[2], 'af': myAF[16]},
    {'1d':2, 'vds': 'UZ30C', 'model': 'UZZ30', 'name': 'SC400', 'engine': myEngine[5], 'drive':drivetrain[3], 'body': mybs[5], 'battery': myBatt[2], 'af': myAF[16]},
    {'1d':3, 'vds': 'CH32Y', 'model': 'UZZ30', 'name': 'SC400', 'engine': myEngine[5], 'drive':drivetrain[3], 'body': mybs[5], 'battery': myBatt[0], 'af': myAF[16]},
    {'1d':4, 'vds': 'CH32Y', 'model': 'UZZ30', 'name': 'SC400', 'engine': myEngine[5], 'drive':drivetrain[3], 'body': mybs[5], 'battery': myBatt[0], 'af': myAF[16]},
    {'1d':5, 'vds': 'CH32Y', 'model': 'UZZ30', 'name': 'SC400', 'engine': myEngine[5], 'drive':drivetrain[3], 'body': mybs[4], 'battery': myBatt[0], 'af': myAF[16]},
    {'1d':6, 'vds': 'FN48Y', 'model': 'UZZ40', 'name': 'SC430', 'engine': myEngine[22], 'drive':drivetrain[3], 'body': mybs[4], 'battery': myBatt[5], 'af': myAF[12]},
    {'1d':7, 'vds': 'FN45Y', 'model': 'UZZ40', 'name': 'SC430', 'engine': myEngine[22], 'drive':drivetrain[3], 'body': mybs[4], 'battery': myBatt[5], 'af': myAF[12]},
    {'1d':8, 'vds': 'FN2EY', 'model': 'UZZ40', 'name': 'SC430', 'engine': myEngine[22], 'drive':drivetrain[3], 'body': mybs[4], 'battery': myBatt[5], 'af': myAF[12]}];

var lexusRc = [
    {'1d':0, 'vds': 'SE5BC', 'model': 'GSC15', 'name': 'RC350', 'engine': myEngine[9], 'drive':drivetrain[0], 'body': mybs[6], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':1, 'vds': 'SM5BC', 'model': 'GSC16', 'name': 'RC300', 'engine': myEngine[11], 'drive':drivetrain[0], 'body': mybs[6], 'battery': myBatt[1], 'af': myAF[6]},
    {'1d':2, 'vds': 'HP5BC', 'model': 'USC10', 'name': 'RC-F', 'engine': myEngine[14], 'drive':drivetrain[3], 'body': mybs[5], 'battery': myBatt[4], 'af':  '17801-38021'},
    {'1d':3, 'vds': 'HA5BC', 'model': 'ASC10', 'name': 'RC200T', 'engine': myEngine[25], 'drive':drivetrain[3], 'body': mybs[5], 'battery': myBatt[4], 'af': myAF[6]}];

var lexusCt = [
    {'1d':0, 'vds': 'KD5BH', 'model': 'ZWA10', 'name': 'CT200H', 'engine': myEngine[18], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[7], 'af': myAF[10]}];

var lexusHs = [
    {'1d':0, 'vds': 'BB1BA', 'model': 'ANF10', 'name': 'HS250H', 'engine': myEngine[7], 'drive':drivetrain[1], 'body': mybs[0], 'battery': myBatt[8], 'af': myAF[4]}];

var lexusLFA = [
    {'1d':0, 'vds': 'HX8BH', 'model': 'LFA10', 'name': 'LFA', 'engine': myEngine[2], 'drive':drivetrain[3], 'body': mybs[5], 'battery': 'idk', 'af': 'idk'}];

    
//B&E TOYOTA 7-7-2016
var toyotaCamry = [
    {'id':0, 'vds': 'VK13E', 'model': 'MCAMRY001', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':1, 'vds': 'VK12E', 'model': 'MCAMRY002', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':2, 'vds': 'SK12E', 'model': 'MCAMRY003', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':3, 'vds': 'GK13E', 'model': 'MCAMRY004', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':4, 'vds': 'GK12W', 'model': 'MCAMRY005', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':5, 'vds': 'BF12K', 'model': 'MCAMRY006', 'name': "CAMRY", 'engine': myEngine[3],'drive':drivetrain[1]},
    {'id':6, 'vds': 'BG12K', 'model': 'MCAMRY007', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':7, 'vds': 'BF22K', 'model': 'MCAMRY008', 'name': "CAMRY", 'engine': myEngine[3],'drive':drivetrain[1]},
    {'id':8, 'vds': 'BG22K', 'model': 'MCAMRY009', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':9, 'vds': 'BF28K', 'model': 'MCAMRY010', 'name': "CAMRY", 'engine': myEngine[3],'drive':drivetrain[1]},
    {'id':10, 'vds': 'BF22K', 'model': 'MCAMRY11', 'name': "CAMRY", 'engine': myEngine[3],'drive':drivetrain[1]},
    {'id':11, 'vds': 'CF22P', 'model': 'MCAMRY12', 'name': "CAMRY", 'engine': myEngine[3],'drive':drivetrain[1]},
    {'id':12, 'vds': 'BE30K', 'model': 'MCAMRY13', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':13, 'vds': 'BF30K', 'model': 'MCAMRY14', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':14, 'vds': 'BE32K', 'model': 'MCAMRY15', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':15, 'vds': 'BF32K', 'model': 'MCAMRY16', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':16, 'vds': 'CA30P', 'model': 'MCAMRY17', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':17, 'vds': 'BA32K', 'model': 'MCAMRY18', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':18, 'vds': 'FA38P', 'model': 'MCAMRY19', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':19, 'vds': 'BB46K', 'model': 'MCAMRY20', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':20, 'vds': 'BE46K', 'model': 'MCAMRY21', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':21, 'vds': 'BK46K', 'model': 'MCAMRY22', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':22, 'vds': 'BF3EK', 'model': 'MCAMRY23', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':23, 'vds': 'BK3EK', 'model': 'MCAMRY24', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]},
    {'id':24, 'vds': 'BD1FK', 'model': 'MCAMRY25', 'name': "CAMRY", 'engine': myEngine[28],'drive':drivetrain[1]},
    {'id':25, 'vds': 'BF1FK', 'model': 'MCAMRY26', 'name': "CAMRY", 'engine': myEngine[23],'drive':drivetrain[1]}
];


var toyotaHighlander = [
    {'id':0, 'vds': 'GD21A', 'model': 'THU10', 'name': "HIGHLANDER", 'engine': myEngine[28],'drive':drivetrain[3]},
    {'id':0, 'vds': 'HD21A', 'model': 'THU15', 'name': "HIGHLANDER", 'engine': myEngine[28],'drive':drivetrain[0]},
    {'id':0, 'vds': 'GF21A', 'model': 'THU11', 'name': "HIGHLANDER", 'engine': myEngine[3],'drive':drivetrain[3]},
    {'id':0, 'vds': 'HF21A', 'model': 'THU16', 'name': "HIGHLANDER", 'engine': myEngine[3],'drive':drivetrain[0]},
    {'id':0, 'vds': 'DP21A', 'model': 'THH10', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'EP21A', 'model': 'THH15', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'EW21A', 'model': 'THH15', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'ES41A', 'model': 'THH15', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'EW41A', 'model': 'THH15', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'ES42A', 'model': 'THH15', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'EW42A', 'model': 'THH15', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'ES43A', 'model': 'THH15', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'EW43A', 'model': 'THH15', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'ES44A', 'model': 'THH15', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'EW44A', 'model': 'THH15', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'BKEW3', 'model': 'THEW3', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'DKEW3', 'model': 'THEW3', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'EKEW3', 'model': 'THEW3', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},
    {'id':0, 'vds': 'JKEW3', 'model': 'THEW4', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},  
    {'id':0, 'vds': 'JWEW3', 'model': 'THEW5', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]}
];
//top level arrays{'id':0, 'vds': 'BKEW3', 'model': 'THEW3', 'name': "HIGHLANDER", 'engine': myEngine[0],'drive':drivetrain[3]},

var allModels = [lexusRx, lexusEs, lexusGx, lexusNx, lexusLx, lexusIs, lexusGs, lexusLs, lexusSc, lexusLFA, lexusRc, lexusHs, lexusCt, toyotaCamry,toyotaHighlander];
var l = allModels;


function getData(v) { // give model number, get oil filter number.
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

function getData2(mod) {  // called from web page, PPP  // name 0-2 ie  RX LS model 0-3 ie MCU1
    for (i=0; i<l.length; i++) {
      console.log(mod);
        for (var j=0; j < l[i].length; j++) {
            if(l[i][j].name.substring(0,2) === mod) {  //If called by 2 letter name, display all itterations
                PrintHTMLVehicleData(l[i][j]);
                console.log(l[i][j].model + "GD2 2Digit Model Name");  
            }if(l[i][j].model === mod) {  // CATCH FULL MODEL
                PrintHTMLVehicleData(l[i][j]);
                console.log(l[i][j].model + "GD2 model full ");
            }if(l[i][j].model.substring(0,4).toString() === mod) {  //CATCH PARTIAL MODEL CODE (GYL1) OR (MCU1)
                PrintHTMLVehicleData(l[i][j]);
                console.log(l[i][j].model + "GD2  model 0 4 ");
            }if(l[i][j].model.substring(1,4).toString() === mod) {  //CATCH PARTIAL MODEL CODE   (CV1)
                PrintHTMLVehicleData(l[i][j]);
                console.log(l[i][j].model  + "GD2 model 1 4");  
            }if(l[i][j].vds.substring(2,5).toString() === mod) {  //CATCH VDS 678 match for RX models L MODEL, digits 2 3 & 4 (^123^)
                PrintHTMLVehicleData(l[i][j]);
                console.log(l[i][j].model + "GD2 vds 2 5 ");
                console.log(l[i][j].model + "~name 0 2");  //???WTFH
            }if(l[i][j].model === mod) {  // CATCH FULL MODEL
                PrintHTMLVehicleData(l[i][j]);
                console.log(l[i][j].model + "^model full "); //WHY DOESNT THIS CATCH CAMRY&HIGHLANDER?
            }if(l[i][j].model.substring(0,4).toString() === mod) {  //CATCH PARTIAL MODEL CODE (GYL1) OR (MCU1)
                console.log(l[i][j].model + "^model 0 4 ");
                PrintHTMLVehicleData(l[i][j]);
            }if(l[i][j].model.substring(1,4).toString() === mod) {  //CATCH PARTIAL MODEL CODE   (CV1)
                console.log(l[i][j].model  + "^model 1 4");  
                PrintHTMLVehicleData(l[i][j]);
            }if(l[i][j].vds.substring(2,5).toString() === mod) {  //CATCH VDS 678 match for RX models L MODEL, digits 2 3 & 4 (^123^)
                PrintHTMLVehicleData(l[i][j]);
                console.log(l[i][j].model + "!vds 2 5 ");
            }
        }
    }
}  










