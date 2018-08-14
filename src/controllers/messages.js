let remitente = ''
let destino = ''
window.loadChat = (id) => {
  window.userChatHeader(id)
  destino = id
  remitente = currentUser.uid
  messagesContainer.innerHTML = ''
  window.getMsn(destino, remitente).on('child_added', (msn) => {
    if(msn.key !== 'members'){
      msn = msn.val()
      window.showMsn(msn) 
    }
    });
}

inputMsn.addEventListener("change", function () {
  window.addMsn(remitente, destino, inputMsn.value).then((msn)=>{
  }).catch((error) => {
    alert('error')
  });
  inputMsn.value = ''
});

window.userChatHeader =(id)=>{
    window.model.getUser(id).then((user) =>{
    window.showHeaderChat(user.val())
    })
    .catch((error) => {
     alert('error')
    });
}