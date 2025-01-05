import { user } from "./user.js";
document.getElementById("showname").textContent = user.name;
document.getElementById("showemail").textContent = user.email;

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  console.log(name, email);
  // alert(`資料已更新:\n姓名: ${name}\n信箱: ${email}`);

  document.getElementById("showname").textContent = name;
  document.getElementById("showemail").textContent = email;
});
