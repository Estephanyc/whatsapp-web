let remitente = ''
let destino = ''
window.loadChat = (id) => {
  window.userChatHeader(id)
  destino = id
  remitente = currentUser.uid
  messagesContainer.innerHTML = ''
  window.getMsn(destino, remitente).on('child_added', (msn) => {
      msn = msn.val()
      console.log(msn)
      window.showMsn(msn) 
    });
}

inputMsn.addEventListener("change", function () {
  window.addMsn(remitente, destino, inputMsn.value)
  inputMsn.value = ''
});

window.userChatHeader =(id)=>{
    window.model.getUser(id).then((user) =>{
    window.showHeaderChat(user.val())
  })
}