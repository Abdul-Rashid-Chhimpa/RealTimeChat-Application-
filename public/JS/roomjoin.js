const socket = io();

const inp = document.getElementById("name");
const btn = document.getElementById("btn");
const h3 = document.createElement("h3");

btn.addEventListener("click", function() {
    let inputName = inp.value;
    socket.emit("newUser", inputName);
})