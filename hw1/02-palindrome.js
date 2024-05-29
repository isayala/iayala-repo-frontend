const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput() {
  const value = parseFloat(elem.value);
  const resultDiv = document.querySelector("#result");

  if (value >= 0) {
    const numString = value.toString();
    const reverseString = numString.split("").reverse().join("");

    if (numString == reverseString) {
      resultDiv.textContent = "Yes. This is a palindrome!";
      document.getElementById("result").style.color = "green";
    } else {
      resultDiv.textContent = "No. Try again.";
      document.getElementById("result").style.color = "red";
    }
  } else {
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = "Please enter a positive number.";
    document.getElementById("result").style.color = "black";
  }
}
