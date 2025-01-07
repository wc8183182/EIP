var user = {
  name: "yuu",
  email: "yuu@google.com",
};

const setinNewUser = localStorage.getItem("User");
console.log(typeof setinNewUser); //字串
if (setinNewUser) {
  user = JSON.parse(setinNewUser);
}
