window.onload = function() {
let form = document.querySelector("form");
form.onsubmit = function(event) {
  event.preventDefault();

  const sentence = document.getElementById("sentence").value.toUpperCase();
  

  document.querySelector("span#sentenceInput").innerText = sentence;

  document.querySelector("div#shout").removeAttribute("class");
 };
};