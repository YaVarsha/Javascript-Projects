const calculateTip = () => {
  // console.log("check");

 const billAmountInput = document.querySelector("#billAmount");
 const serviceRatingSelect = document.querySelector("#serviceRating");
 const splitCountInput = document.querySelector("#splitCount");
 const mealTypeSelect = document.querySelector("#mealType");

 const tipAmountOutput = document.querySelector("#tipAmount");
 const totalAmountOutput = document.querySelector("#totalAmount");
 const amountPerPersonOutput = document.querySelector("#amountPerPerson");

 const billAmount = parseFloat(billAmountInput.value);
 const serviceRating = parseFloat(serviceRatingSelect.value);
 const splitCount = parseInt(splitCountInput.value);
 const mealType = mealTypeSelect.value;

 if(isNaN(billAmount) || isNaN(serviceRating) || isNaN (splitCount)){
  tipAmountOutput.textContent = "Please Enter Valid Numbers";
  totalAmountOutput.textContent = "";
  amountPerPersonOutput.textContent = "";
  return;
 }

 let tip;
 switch(serviceRating){
  case 1:
    tip = billAmount * 0.05;
    break;
  case 2:
    tip = billAmount * 0.10;
    break;
  case 3:
    tip = billAmount * 0.15;
    break;
  case 4:
    tip = billAmount * 0.20;
    break;

 }

let totalAmount = billAmount + tip;
let amountPerPerson = totalAmount / splitCount;

if(mealType === "dinner"){
  tip += 5;
  totalAmount += 5;
  amountPerPerson += 5;
}

tipAmountOutput.textContent = `Tip: $${tip.toFixed(2)}`;
totalAmountOutput.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
amountPerPersonOutput.textContent = `Amount Per Person: $${amountPerPerson.toFixed(2)}`;


}

document.querySelector("#CalculateBtn").addEventListener("click",calculateTip);
