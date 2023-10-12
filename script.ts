
let input1 
let input2 
let resultVal
let calcResult
let unCalcResult
window.onload = function () {
  input1 = document.getElementById('height')! as HTMLInputElement;
  input2 = document.getElementById('weight')! as HTMLInputElement;
  resultVal = document.getElementById('result')! as HTMLInputElement;
  calcResult = document.getElementById("calc-res")! as HTMLInputElement;
  unCalcResult = document.getElementById("un-calc-res")! as HTMLInputElement;
  
}

function calculateSum() {
  const value1 = parseFloat(input1.value);
  const value2 = parseFloat(input2.value);

  if (!isNaN(value1) && !isNaN(value2)) {
    const res = (value2) / ((value1/100) * (value1/100));
    // resultVal.textContent = JSON.stringify(res)
    resultVal.textContent = res.toFixed(1)
    console.log(resultVal.value);
    calcResult.style.display = 'flex'
    unCalcResult.style.display = 'none'
    console.log('Sum:', res);
  }
  else{
    calcResult.style.display = 'none'
    unCalcResult.style.display = 'flex'
  }
}