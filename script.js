function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u && p) {
    window.location.href = "home.html";
  } else {
    alert("Enter username and password");
  }
}