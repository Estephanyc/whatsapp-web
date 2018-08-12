window.view = {}
window.view.showCurrentUser = (user) =>{
  userImg.innerHTML = `<img class="userImg" src="${user.photoUrl}">`
}
window.view.showUsers = (user) =>{
  let render = '';
  render +=`<div class="row user-container" id="${user.key}" onclick="window.loadChat('${user.key}')">`
  render += `<div class="col-12">`
  render += `<img class="userImg" src="${user.val().photoUrl}">`
  render += `<span class="user-name">${user.val().displayName}</span>`
  render += `</div>`
  render += `</div>`
  usersList.innerHTML += render;
}
window.showHeaderChat = (user) => {
  let render = ''
  render += `<img class="userImg" src = "${user.photoUrl}" > `
  render += `<span > ${user.displayName}</span> `
  headerChat.innerHTML = render
}