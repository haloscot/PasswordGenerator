
function generate(){

var length = document.getElementById("pwLength").value;
var characters = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm1234567890!@#$%^&*";
var password = ""

  for(var i = 0; i <= length; i++){
    password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
  }

  document.getElementById("display").value = password;

  document.getElementById("prevPW").innerHTML += password + "<br />";
}
