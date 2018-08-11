let remitente = ''
let destino = ''
window.loadChat = (id) => {
  window.userChatHeader(id)
  destino = id
  remitente = currentUser.uid
  messagesContainer.innerHTML = ''
  window.getMsn(destino , remitente).then((messages)=>{
    Object.values(messages.val()).forEach(msn => {
      window.showMsn(msn)
    });
  })
}

inputMsn.addEventListener("change", function () {
  window.addMsn(remitente, destino, inputMsn.value)
  inputMsn.value = ''
});

window.userChatHeader =(id)=>{
  window.model.getUser(id).then((user) =>{
console.log(user.val())
    window.showHeaderChat(user.val())
  })
}