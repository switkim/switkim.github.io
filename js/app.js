let evaluation = "";
calculator.answer.value = "";
var acceptableInput = ["1","2","3","4","5","6","7","8","9","0","+","-","/","*"]

function handleNumberClick(value){
    evaluation = evaluation + value;
    calculator.answer.value = evaluation;
}

function handleOperatorClick(value){
    var currentExpression = calculator.answer.value;
    if(value == "/" || value == "*"){
      //check that it is not the first entry
      if(currentExpression.length == 0){
        return;
      }
    }

    //check that two operators do not follow
    var lastChar = currentExpression[currentExpression.length - 1];
    //alert(lastChar)
    if(lastChar != null){
      if(!isNaN(lastChar)){
        evaluation = evaluation + value;
        calculator.answer.value = evaluation;
      }
    }
}

function clear(){
    evaluation = "";
    calculator.answer.value = "";
}

function compute(){
    var lastChar = evaluation[evaluation.length - 1];
    if(isNaN(lastChar)){
      evaluation = evaluation = evaluation.slice(0,-1);
      calculator.answer.value = evaluation;
    }
    
    let result = eval(evaluation);
    evaluation = result;
    calculator.answer.value = evaluation;;
}

document.addEventListener('click', function (event) {
	if (event.target.matches('.resultOperator')) {
		compute()
    }
    
    if (event.target.matches('.numbers')) {
		handleNumberClick(event.target.value);
    }
    
    if (event.target.matches('.operators')) {
		handleOperatorClick(event.target.value);
    }
    
    if (event.target.matches('.clearOperator')) {
		clear();
	}
}, false);

document.getElementById("answer").addEventListener("input", function(event){
   evaluation = event.target.value;
   var lastChar = event.target.value[event.target.value.length - 1];
   if(!acceptableInput.includes(lastChar)){
     evaluation = evaluation.slice(0,-1);
     calculator.answer.value = evaluation;
     return;
   } 

   evaluation = evaluation.slice(0,-1);
   calculator.answer.value = evaluation;
 
   if(lastChar == "="){
     compute();
   }
   
   if(isNaN(lastChar) == false){
     handleNumberClick(lastChar);
   }
   else{
     handleOperatorClick(lastChar);
   }
   
});