import { user } from "./user.js";
document.getElementById("showname").textContent = user.name;
document.getElementById("showemail").textContent = user.email;

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  console.log(name, email);

  document.getElementById("showname").textContent = name;
  document.getElementById("showemail").textContent = email;
});
