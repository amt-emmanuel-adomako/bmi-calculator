var input1;
var input2;
var resultVal;
var calcResult;
var unCalcResult;
window.onload = function () {
    input1 = document.getElementById('height');
    input2 = document.getElementById('weight');
    resultVal = document.getElementById('result');
    calcResult = document.getElementById("calc-res");
    unCalcResult = document.getElementById("un-calc-res");
};
function calculateSum() {
    var value1 = parseFloat(input1.value);
    var value2 = parseFloat(input2.value);
    if (!isNaN(value1) && !isNaN(value2)) {
        var res = (value2) / ((value1 / 100) * (value1 / 100));
        // resultVal.textContent = JSON.stringify(res)
        resultVal.textContent = res.toFixed(1);
        console.log(resultVal.value);
        calcResult.style.display = 'flex';
        unCalcResult.style.display = 'none';
        console.log('Sum:', res);
    }
    else {
        calcResult.style.display = 'none';
        unCalcResult.style.display = 'flex';
    }
}
