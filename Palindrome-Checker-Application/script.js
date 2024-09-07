

const isPalindrome = (str) =>{

  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  console.log(cleanStr);

const reversedStr = cleanStr.split('').reverse().join('');
console.log(reversedStr);

return cleanStr === reversedStr;

}

const palindromeChecker = () =>{
const inputText = document.querySelector("#inputText");
const result = document.querySelector("#result");


if(isPalindrome(inputText.value)){
result.textContent = `"${inputText.value}" is a Palindrome`;
}
else{
  result.textContent = `"${inputText.value}" is Not a Palindrome`;
}

result.classList.add('fadeIn');

document.querySelector('#inputText').value='';

}

document.querySelector('#checkButton').addEventListener("click",palindromeChecker);