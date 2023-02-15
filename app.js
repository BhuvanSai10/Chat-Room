const socket = io("http://localhost:9000");

const send = () => {
  const msg = document.getElementById("m").value
  console.log(msg)
  socket.emit("chat message", msg)
}

socket.on("chat message", (msg) => {
  const para = document.createElement("p")
  para.innerText = msg;
  document.getElementById("messages").appendChild(para)
})

socket.on("new user notification", () => {
  const para = document.createElement("p")
  para.innerHTML = "<strong>New User "+socket.id+ " Connected.</strong>";
  document.getElementById("messages").appendChild(para)
})