function setPetName() {
  let name =
    document.getElementById("petNameInput").value;

if (name === "") {
  document.getElementById("petDisplay").innerText = 
    "⚠️ Please enter a name for your pet.";
  return;
}
  localStorage.setItem("petName", name);
  document.getElementById("petDisplay").innerText =
    "🐾" + name + " says: hii mama💗";
}
window.onload = function () {
  let savedName = localStorage.getItem("petName");

  if (savedName) {
    document.getElementById("petDisplay").innerText = 
      "🐾" + savedName + " says: hii mama💗";
  }
};
