//pnc hash table.  


/*


var Pnc_465_48100 = {
  MCU38: "JZZ31",
  CH: "UZZ30",
  JZ: "JZZ31",
  FN: "UZZ40",
  UZ: "UZZ30"
};
*/


//  No, cant do that.


//var_pncranks
//top 50 pncs ranked here
//04465

//what are the top 10?  20?  50?  pnc's 
//what first-five do you exclude/ignore?
//how do you handle multiple first 5's for the same PNC?

/*


1	04152
2	87139
3	17801
4	43512
5	42431
6	90919
7	90915
8	04465
9	04947
10	04945
11	04466
12	04946
13	04948
14	90084
15	00544
16	12204
17	48818
18	16100
19	43516
20	42410
21	13568
22	47830
23	47850
24	77300
25	47730
26	47750
27	44416


*/



var var_87139 = {
	ASC10 : "30100",
    ASC10 : "30100" ,
    GSC10 : "30100"
};

/*
170722

variable moves based on what it has both applicaple from and two.  moves both ways - every car has a part, every part has a car it sits on (heh)

data that you want to look at looks up data from the json file

json file gets interpreted by the application in its whatever-thing

can i make it look & feel the same - but with using json hash-table(library?)

'
MY_From,		'yrs':myr(2010,
MY_To,			2015),
GRADE,		*****two digit model level (RX/IS)
NAME,		'name':'IS250-C'
TYPE,		*****body description - Sedan/Hatchback/Convert
DRIVE,		*****AWD/RWD/FWD
WMI,		{'wmi': dw_id[4], 
VDS,		'vds': 'FF2C2',
KATA,		'model': 'GSE20',
ENG,		'eng': en_id[24],
ATM

'
****WHAT IS MISSING ::: THE DATA! !  :::   -->>> 'bat': pn00544[1], 'eaf': pn17801[3], 'caf': pn87139[0], 'wyp': wyp_id[9],'tyr': tyr_id[14]},


TURN THE 'LEXUS ARRAYS.JS DATA TO BE A LIBRARY // INCLUDED JSON FILE

if we use the ~125 unique VDS as a basis for building unique and customizable datasets of similarities & pricing, we will have our bases covered

************************
* 170727

giving MPV/PV/Coupe separation as planned laves a distinct void where as to the amount of RX's  vs everything else.

simplify the RX into a diverse legend of what CAN be done - pricing etc

tow hitches, accessories

Yes / No / $$$

by VDS.  maybe by VDS/Model

big page with the answer to so many questions

VDS page as input is just the basic reference.  from there, every PNC tree has chained to it the detail.


the big file by model-year continues - it gets re-made too i'm sure -  these tables will update.  the questions are doeds it maintain just
as a has-table/library application or does it go to a place that has a GUI and way to save things; Like the SPG does.

i have deistinct projects - the web app/ // ppp  and then the parts palcemant project (pauls parts page) PLEASE.

web app does one thing - Ahhh. can i add the graph as the underlying bit?
can i make the web page have a BLoG?

can i host the files somewhere that GITHUB can talk to while still having bandwidth and adsense to my advantage?

is it simply VDS:KATA ?  there are only so many VDS - each VDS is ONE model, without exception (the exception being that



two tables (

VDS to Model (Multiple VDS can be one KATAMODEL)  (SC430 in particular, GS350 too) (
Must figure how to  account for model year differences - specificially with the RWD:  GS and '08 RX
some things are solid, some are not - that oil filter, that engine oil.  Air filter; TireSize is 100% (can be two or 3 configurations of tires)   Wipers 100% EAF CAF 100%

VDS:KATA

KATAStrings - IE  MCU15 = EAF[0],CAF[5],WB[5],

and each of those variables can have data -  Specifically, the easy ones (Wipers, EAF CAF Battery Tires)  EOF, EOQ and even EOT are varied by year.


define variable names - depends on the language i guess but its pretty basic - i have 10 type of thing - there is something that maps those things,. like a json file-map.

Question is how to do it. Parent/child/child model isnt too hot, but a A:B map is knowing the model year. idfk.

map top 30 models to top 5-8 parts


'
*/

