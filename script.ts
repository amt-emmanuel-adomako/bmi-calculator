
let input1 
let input2 
let resultVal
let calcResult
let unCalcResult

let imperialInput1
let imperialInput2
let imperialInput1In
let imperialInput2Lbs
window.onload = function () {
  input1 = document.getElementById('height')! as HTMLInputElement;
  input2 = document.getElementById('weight')! as HTMLInputElement;
  imperialInput1 = document.getElementById('imperialHeight')! as HTMLInputElement;
  imperialInput1In = document.getElementById('imperialHeightIn')! as HTMLInputElement;
  imperialInput2 = document.getElementById('ImperialWeight')! as HTMLInputElement;
  imperialInput2Lbs = document.getElementById('imperialWeightLbs')! as HTMLInputElement;
  resultVal = document.getElementById('result')! as HTMLInputElement;
  calcResult = document.getElementById("calc-res")! as HTMLInputElement;
  unCalcResult = document.getElementById("un-calc-res")! as HTMLInputElement;
  const metricRadio = document.getElementById("met-rad") as HTMLInputElement;
  const imperialRadio = document.getElementById("imp-rad") as HTMLInputElement;
  const metDiv = document.getElementById("frame-64") as HTMLDivElement;
  const impDiv = document.getElementById("frame-64-imp") as HTMLDivElement;

  metricRadio.addEventListener("change", () => {
    if (metricRadio.checked) {
      metDiv.style.display = 'flex'
      impDiv.style.display = 'none'
    } 
  });

  imperialRadio.addEventListener("change", () => {
    if (imperialRadio.checked) {
      metDiv.style.display = 'none'
      impDiv.style.display = 'flex'
    } 
  });
}

function calculateMetric() {
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

function calculateImperial() {
  const value1 = parseFloat(imperialInput1.value);
  const value2 = parseFloat(imperialInput2.value);
  const value3 = parseFloat(imperialInput1In.value)
  const value4 = parseFloat(imperialInput2Lbs.value)
  if (!isNaN(value1) && !isNaN(value2) && !isNaN(value3) && !isNaN(value4)) {
    const res = (((value2 * 14)+value4) / (((value1 * 12) +value3)* ((value1 * 12) +value3)))*703;
    // resultVal.textContent = JSON.stringify(res)
    // const res = value1+value2+value3+value4;
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