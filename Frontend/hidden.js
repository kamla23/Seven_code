
const pass = document.getElementById("pass");
const eye = document.getElementById("eye");
const icon = eye.querySelector("i");

eye.addEventListener("click", () => {

  if(pass.type === "password"){
    pass.type = "text";
    icon.classList.remove("fa-eye-low-vision");
    icon.classList.add("fa-eye");
  }
  else{
    pass.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-low-vision");
  }
});

