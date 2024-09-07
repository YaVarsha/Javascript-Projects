document.querySelector('#calculateBtn').addEventListener('click', calculateLoan);

function calculateLoan(){
  const loanAmount = parseFloat(document.querySelector("#loanAmountInput").value);
  const interestRate = parseFloat(document.querySelector("#interestRateInput").value);
  const loanTerm = parseFloat(document.querySelector("#loanTermInput").value);

  if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
    alert('Please enter valid Numbers for all the fields');
  }

  const monthlyInterest = interestRate /100 /12;
  const totalPayments = loanTerm;
  const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1+ monthlyInterest, -totalPayments));

  const totalInterst = (monthlyPayment * totalPayments) - loanAmount;

  displayResult(monthlyPayment,totalInterst);

}

function displayResult(monthlyPayment,totalInterst){
  const resultDiv = document.querySelector('#result');

  resultDiv.innerHTML = `
  <p><strong>Monthly Payments: ${monthlyPayment.toFixed(2)}  </p></strong>
  <p><strong>Total Interest: ${totalInterst.toFixed(2)}  </p></strong>  
  
  `;
}