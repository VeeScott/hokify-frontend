function myFunction() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;

  if (!(
    firstName === "" &&
    lastName === "" &&
    email === "" )&& email.includes('@'))
   {
       alert("Hello at hokify!");
} 

else {
      alert("Please Fill Out the Form!");
  }
}

function darkMode() {
  var content = document.getElementsByTagName("fieldset")[0];
  var background = document.body;
  var title = document.getElementsByName("h2")[0];

  content.classList.toggle("darkMode");
  background.classList.toggle("darkMode");
  title.classList.toggle("darkMode");
}
