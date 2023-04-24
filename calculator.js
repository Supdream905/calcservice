document.getElementById("btnCalculate").onclick = function calculate() {
    const num1 = document.getElementById("operand1").value;
    const num2 = document.getElementById("operand2").value;
    const op = encodeURIComponent(document.getElementById("operator").value);

    const xhr = new XMLHttpRequest();
  
    xhr.onload = () => {
      document.getElementById("result").innerHTML = xhr.responseText;
    }
  
    xhr.open("GET", `http://localhost:8080/?number1=${num1}&number2=${num2}&operator=${op}`);
    xhr.send();
}
