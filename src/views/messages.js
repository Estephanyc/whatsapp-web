window.showMsn =(msn)=>{
    let render =''
    if(currentUser.uid == msn.remitent){
        render = `<div class="row"> 
        <div class="col-12"> 
        <span class="message destination">${msn.message}<span class="time"> ${msn.time}</span></span></div></div>`
    }else
    {
        render = `<div class="row"> 
        <div class="col-12">
        <span class="message remitent">${msn.message}<span class="time"> ${msn.time}</span></span>
        </div></div>`
    }
    messagesContainer.innerHTML += render
}
window.showHeaderChat =(user)=>{
    let render = ''
    render += `<img class="userImg" src = "${user.photoUrl}" > `
    render += `<span > ${ user.displayName }</span> `
    idHeaderChat.innerHTML = render
}