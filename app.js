
// var number1 = document.getElementById("basic-num-1").value;
// var number2 = document.getElementById("basic-num-2").value;


var selectedOperation = document.getElementById("basic-operation");

//run the calculate function when button is clicked

function calBasic() {
	var answer=0;
	var operation = selectedOperation.value;
	var number1 = parseInt(document.getElementById("basic-num-1").value);
	var number2 = parseInt(document.getElementById("basic-num-2").value);
	

	if (operation === "+") {
		answer = (number1 + number2);
		
	} else if (operation === "-") {
		answer = (number1 - number2);
		
	} else if (operation === "*") {
		answer = (number1 * number2);
		
	} else if (operation === "/") {
		answer = (number1 / number2);
	
	}

	document.getElementById("basic-answer-alert").innerHTML =  answer;
} 



function calTrip() {
	var answer = 0
	var distance = parseInt(document.getElementById("trip-distance").value);
	var mpg = parseInt(document.getElementById("trip-mpg").value);
	var cost = parseInt(document.getElementById("trip-cost").value);
	var speed = parseInt(document.getElementById("trip-speed").value);

	if (speed<=60) {
		answer = distance / mpg * cost;
	} else if (speed > 60) {
		answer = distance / (mpg - (speed - 60) * 2) * cost;
	}
	document.getElementById("trip-answer-alert").innerHTML =  answer;
}

function calBMI() {
	var answer = 0;
	var mass = parseInt(document.getElementById("bmi-mass").value);
	var height = parseFloat(document.getElementById("bmi-height").value);

	answer = (mass / (height * height));

	document.getElementById("bmi-answer-alert").innerHTML =  answer;
}


function calMortgage () {
	var answer = 0;
	var loan = parseInt(document.getElementById("mortgage-loan").value); 
	var apr = parseFloat(document.getElementById("mortgage-apr").value);
	var term  = parseInt(document.getElementById("mortgage-term").value);

	// answer = loan * apr * ((1+apr)^term) / (((1+apr)^term) - 1);
	answer = loan * apr/100 * Math.pow((1+(apr/100)/12), term) / ( Math.pow((1+(apr/100)/12), term) - 1)/12;

	document.getElementById("mortgage-answer-alert").innerHTML =  answer;
}



//use this as the template


function addClickListener(element,i) {
  element.addEventListener('click', function(){
    if (element.id == "basic-calc") {
  calBasic(); 
  
}
  else if (element.id == "trip-calc") {
  calTrip();
}
  else if (element.id == "bmi-calc") {
  calBMI();
}
  else if (element.id == "mortgage-calc") {
  calMortgage();
}
  }, false);
}
function ready() {
  alert("ready");
  elements = document.getElementsByTagName('button');
  alert(elements.length + " elements found");
  for ( var i = 0; i < elements.length; i++ ){
      addClickListener(elements[i], i);
    }
}
window.addEventListener('load', ready, false);