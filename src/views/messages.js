window.showMsn =(msn)=>{
    let render =''
    console.log(currentUser.uid)
    console.log(msn.remitent)
    if(currentUser.uid == msn.remitent){
        render = `<div class="row"> 
        <div class="col-12"> 
        <div class="float-right">
        <span class="message destination">${msn.message}<span class="time"> ${msn.time}</span></span></div></div></div>`
    }else
    {
        render = `<div class="row"> 
        <div class="col-12">
        <div class="float-left">
        <span class="message remitent">${msn.message}<span class="time"> ${msn.time}</span></span>
        </div></div></div>`
    }
    messagesContainer.innerHTML += render
}
window.showHeaderChat =(user)=>{
    console.log(user)
    let render = ''
    render += `<img class="userImg" src = "${user.photoUrl}" > `
    render += `<span > ${ user.displayName }</span> `
    idHeaderChat.innerHTML = render
}