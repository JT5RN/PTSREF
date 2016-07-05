window.onload = init;
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

function DisplayVehicle(model) { // menue driven data
  document.getElementById("ppp").innerHTML = "";
  var v2 = model.toUpperCase();
  var v3 = decodeVinNo(v2);
  getData2(v3);
  
}; 
//DisplayVehicleData(l[i][j]); ("l" being lexusModels array in the lexus Heihachi file. )
var DisplayVehicleData = function(data) { 

  var li = document.createElement("li"); 
  li.innerHTML = (data.name.substring(0, 2) + " model.  If the vin contains " + data.vds + " it would be an " + data.name + " " + data.drive.name + "  (model code " + data.model + ") Engine: " + data.engine.name + ".  Oil Filter: " +
    data.engine.oilfilter + '.  Battery: ' + data.battery + ". Air Filter:  " + data.af );
  var ul = document.getElementById("ppp"); 
  ul.appendChild(li);
};
/*
function generateHTML() {
  console.log(data);
    var dataset = { target:l };
    console.log(dataset[0].name);
    var template = _.template( $("#tpl-html").text() );
    $("#output").html( template(data) );
*/
/*
  var data = { target:l };
    var template = _.template( $("#tpl-html").text() );
    $("#output").html( template(data) );
}*/

/* backup from what worked before i put it to a table
var li = document.createElement("li"); 
  li.innerHTML = (data.name.substring(0, 2) + " model.  If the vin reads " + data.vds + " it would be an " + data.name + " " + data.drive.name + "  (model code " + data.model + ") Engine: " + data.engine.name + ".  Oil Filter: " +
    data.engine.oilfilter + '.  Battery: ' + data.battery + ". Air Filter:  " + data.af );
  var ul = document.getElementById("ppp"); 
  ul.appendChild(li);

*/