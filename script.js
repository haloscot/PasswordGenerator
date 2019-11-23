

function generate(){
  let length = document.getElementById("pwLength").value;
  let characters = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm1234567890!@#$%^&*";
  let password = ""

  for(var i = 0; i <= length; i++){
    password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));

    document.getElementById("display").value = password;
  }

}