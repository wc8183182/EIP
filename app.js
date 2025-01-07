document.getElementById("showname").textContent = user.name;
document.getElementById("showemail").textContent = user.email;

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", function () {
  console.log(user);

  const Name = document.getElementById("name").value;
  const Email = document.getElementById("email").value;
  console.log(Name, Email);

  document.getElementById("showname").textContent = Name;
  document.getElementById("showemail").textContent = Email;

  const NewUser = {
    name: Name,
    email: Email,
  };

  localStorage.setItem("User", JSON.stringify(NewUser));
  console.log(NewUser);
});
