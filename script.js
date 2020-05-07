/* 
Simple Calculator 

Just a simple calculator that can do basic
functions

*/
var header = "0";
var mode = "+" ;
var operandOne = 0;
var operandTwo = 0;
var total = 0;

function insertHeader(number) {
  if (header == "0"){
    header = number;
    document.getElementById("header").innerHTML = header;

  } 
  else {
    header = header.concat(number);
    document.getElementById("header").innerHTML = header;
  }

}

function changeMode(sign) {
  mode = sign;
  operandOne = parseInt(header);
  header = '0';
  document.getElementById("header").innerHTML = header;
}

function equal() {
  operandTwo = parseInt(header);

  // For the different operators

  if (mode == '+'){
    total = operandOne + operandTwo;
    header = "Your sum is " + total;
    document.getElementById("header").innerHTML = header;
    header = "0";
  }

  else if (mode == '-'){
    total = operandOne - operandTwo;
    header = "Your minuend is " + total;
    document.getElementById("header").innerHTML = header;
    header = "0";
  }

  else if (mode == '*'){
    total = operandOne * operandTwo;
    header = "Your product is " + total;
    document.getElementById("header").innerHTML = header;
    header = "0";    
  }

  else if (mode == '/'){
    total = operandOne / operandTwo;
    header = "Your dividend is " + total;
    document.getElementById("header").innerHTML = header;
    header = "0";
  }
}