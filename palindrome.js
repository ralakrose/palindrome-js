function palindrome() {
  let text = document.getElementById("myInput").value; // get the value input by a user
  let reg = /[^A-Za-z0-9]/g; //regular expression to check characters
  text = text.toLowerCase().replace(reg, ""); //convert the array of strings to lower case
  let textLength = text.length;
  for (var i = 0; i < textLength / 2; i++) {
    if (text[i] !== text[textLength - 1 - i]) {
      alert("Not a Palindrome!");
    }
  }
  alert("Palindrome");
}
