function palindrome() {
  let text = document.getElementById("myInput").value;
  let reg = /[^A-Za-z0-9]/g;
  text = text.toLowerCase().replace(reg, "");
  let textLength = text.length;
  for (var i = 0; i < textLength / 2; i++) {
    if (text[i] !== text[textLength - 1 - i]) {
      alert("Not a Palindrome!");
    }
  }
  alert("Palindrome");
}
