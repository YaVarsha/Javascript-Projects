const detectChar = () =>{
  const input = document.querySelector('#inputType').value;

  if (input){
const unicodeValue = input.charCodeAt(0);
const result = `The Unicode value of "${input}" is ${unicodeValue}`;
document.querySelector('#result').textContent = result;
document.querySelector('#inputType').value='';

  }else{
    document.querySelector('#result').textContent = 'Please Enter a Character';
  }
}


