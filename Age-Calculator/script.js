// function calculateAge(){
  const calculateAge = () => {

const today = new Date();
const birthDateInput = document.querySelector("#birthDate").value;
const birthDateParts = birthDateInput.split("-");
const birthDay = birthDateParts[0];
const birthMonth = birthDateParts[1] - 1;
const birthYear = birthDateParts[2];

const birthDate = new Date(birthYear, birthMonth, birthDay);

// console.log(birthDateInput);
// console.log(birthDateParts);
// console.log(birthDay);
// console.log(birthMonth);
// console.log(birthYear);

const isValidDate = (date) => {
  return (
Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
  );
};

if (!isValidDate(birthDate)) {
alert("Invalid Date Format: Please enter a valid date in DD-MM-YYYY format");
return;
}

const ageInMilliSeconds = today - birthDate;
const ageInSeconds = Math.floor(ageInMilliSeconds/1000);
const ageInMinutes = Math.floor(ageInSeconds/60);
const ageInHours = Math.floor(ageInMinutes/60);
const ageInDays = Math.floor(ageInHours/24);
const ageInWeeks = Math.floor(ageInDays/7);
const ageInMonths = Math.floor(ageInDays/30.436875);
const ageInYears = Math.floor(ageInDays/356.25);

const resultContainer = document.querySelector("#resultContainer");
const result  = document.querySelector("#result");

result.innerHTML = `
<div class = "result-item">
<h3> Age:</h3>
<p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
</div>

<div class = "result-item">
<h3> Months Passed:</h3>
<p>${ageInMonths} </p>
</div>

<div class = "result-item">
<h3> Weeks Passed:</h3>
<p>${ageInWeeks} </p>
</div>

<div class = "result-item">
<h3> Days Passed:</h3>
<p>${ageInDays} </p>
</div>

<div class = "result-item">
<h3> Hours Passed:</h3>
<p>${ageInHours}</p>
</div>

<div class = "result-item">
<h3> Minute Passed:</h3>
<p>${ageInMinutes}</p>
</div>

<div class = "result-item">
<h3> Seconds Passed:</h3>
<p>${ageInSeconds}</p>
</div>

`;



resultContainer.style.display = "block";

}



const ageCalculatorForm = document.querySelector("#ageCalculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  calculateAge(); 
});