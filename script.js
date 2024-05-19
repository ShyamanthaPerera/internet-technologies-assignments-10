let Result = document.getElementById('result');

function insertValue(value){
    Result.value += value;
}

function clearDisplay(){
    Result.value = '';
}

function calculate(){
    try {
        Result.value = eval(Result.value);
    }catch (error){
        Result.value = "Error";
    }
}