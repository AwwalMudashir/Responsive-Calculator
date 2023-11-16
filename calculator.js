const btns = document.querySelector('#buttons');
const one = document.querySelector('.buts');
const expression = document.querySelector('.exp');
const ac = document.getElementById('ac');
// console.log(btns);


function clear(){
    clearResult();

    
}

ac.addEventListener('click',clear);

// Function to append numbers and operators to the result field
function Run(value) {
  document.getElementById('result').textContent += value;
}

// Function to clear the result field
function clearResult() {
  document.getElementById('result').textContent = '';
}

// Function to calculate the result
function calculateResult() {
  const result = document.getElementById('result').textContent;
  if (result) {
    try {
      document.getElementById('result').textContent = eval(result);
    } catch (error) {
      document.getElementById('result').textContent = 'Error';
    }
  }
}

// Function to calculate the square root
function calculateSquareRoot() {
  const result = document.getElementById('result').textContent;
  if (result) {
    try {
      const squareRoot = Math.sqrt(eval(result));
      if (Number.isNaN(squareRoot)) {
        document.getElementById('result').textContent= 'Invalid input';
      } else {
        document.getElementById('result').textContent = squareRoot;
      }
    } catch (error) {
      document.getElementById('result').textContent = 'Error';
    }
  }
  // document.getElementById('result').textContent.style.font-size = "10px";
}