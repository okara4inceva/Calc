let result=document.getElementById("inputext");

let calculate=(number)=>{
	result.value=result.value+number;
}

let Result=()=>{
	try{
		result.value=eval(result.value)
	}
	catch(err){
		alert ("Enter the valid operation");
	}
}

function clr(){
	result.value=" ";
}
function del(){
  result.value=result.value.slice(0,-1);
}

function inputPercent() {
	result.value = (result.value/100).toString();
}

let operator = document.getElementById("operator");
let operand1 = document.getElementById("operand");
let operand2 = document.getElementById("operand");
function operate(x, y, operator) {
	if(operator.value === '+') {
			return x + y;
	} else if(operator.value === '-') {
			return x - y;
	} else if(operator.value === '*') {
			return x * y;
	} else if(operator.value === '/') {
			if(y === 0) {
					alert ('forbidden');
			} else {
			return x / y;
			}
	}
}


