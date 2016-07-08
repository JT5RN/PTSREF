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
//PrintHTMLVehicleData(l[i][j]); ("l" being lexusModels array in the lexus Heihachi file. )
var PrintHTMLVehicleData = function(data) { 
  var li = document.createElement("li"); 
  li.innerHTML = (data.name.substring(0, 2) + " model.  If the vin contains " + data.vds + " it would be an " + data.name + " " + data.drive.name + "  (model code " + data.model + ") Engine: " + data.engine.name + ".  Oil Filter: " +
    data.engine.oilfilter + '.  Battery: ' + data.battery + ". Air Filter:  " + data.af );
  var ul = document.getElementById("ppp"); 
  ul.appendChild(li);
};
