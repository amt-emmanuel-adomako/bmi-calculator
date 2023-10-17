var input1;
var input2;
var resultVal;
var calcResult;
var unCalcResult;
var imperialInput1;
var imperialInput2;
var imperialInput1In;
var imperialInput2Lbs;
var bmiRange;
window.onload = function () {
    input1 = document.getElementById('height');
    input2 = document.getElementById('weight');
    imperialInput1 = document.getElementById('imperialHeight');
    imperialInput1In = document.getElementById('imperialHeightIn');
    imperialInput2 = document.getElementById('ImperialWeight');
    imperialInput2Lbs = document.getElementById('imperialWeightLbs');
    resultVal = document.getElementById('result');
    calcResult = document.getElementById("calc-res");
    unCalcResult = document.getElementById("un-calc-res");
    bmiRange = document.getElementById("bmi-range");
    var metricRadio = document.getElementById("met-rad");
    var imperialRadio = document.getElementById("imp-rad");
    var metDiv = document.getElementById("frame-64");
    var impDiv = document.getElementById("frame-64-imp");
    // console.log(bmiRange.value)
    metricRadio.addEventListener("change", function () {
        if (metricRadio.checked) {
            metDiv.style.display = 'flex';
            impDiv.style.display = 'none';
            calcResult.style.display = 'none';
            unCalcResult.style.display = 'flex';
        }
    });
    imperialRadio.addEventListener("change", function () {
        if (imperialRadio.checked) {
            metDiv.style.display = 'none';
            impDiv.style.display = 'flex';
            calcResult.style.display = 'none';
            unCalcResult.style.display = 'flex';
        }
    });
};
function calculateMetric() {
    var value1 = parseFloat(input1.value);
    var value2 = parseFloat(input2.value);
    if (!isNaN(value1) && !isNaN(value2)) {
        var res = (value2) / ((value1 / 100) * (value1 / 100));
        // resultVal.textContent = JSON.stringify(res)
        resultVal.textContent = res.toFixed(1);
        bmiRange.textContent = '63.3kgs - 85.2kgs';
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
function calculateImperial() {
    var value1 = parseFloat(imperialInput1.value);
    var value2 = parseFloat(imperialInput2.value);
    var value3 = parseFloat(imperialInput1In.value);
    var value4 = parseFloat(imperialInput2Lbs.value);
    if (!isNaN(value1) && !isNaN(value2) && !isNaN(value3) && !isNaN(value4)) {
        var res = (((value2 * 14) + value4) / (((value1 * 12) + value3) * ((value1 * 12) + value3))) * 703;
        // resultVal.textContent = JSON.stringify(res)
        // const res = value1+value2+value3+value4;
        resultVal.textContent = res.toFixed(1);
        bmiRange.textContent = '9st 6lbs - 12st 10lbs';
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
