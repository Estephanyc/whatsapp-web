let counter =0
window.showMsn = (msn)=>{
    counter ++
    console.log(counter)
  let render = '';
  if (currentUser.uid === msn.remitent) {
    render = `<div class="row"> 
        <div class="col-12"> 
        <span class="message destination">${msn.message}<span class="time"> ${msn.time}</span></span></div></div>`;
  } else {
    render = `<div class="row"> 
        <div class="col-12">
        <span class="message remitent">${msn.message}<span class="time"> ${msn.time}</span></span>
        </div></div>`;
  }
  messagesContainer.innerHTML += render;
};
