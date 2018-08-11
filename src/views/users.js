window.view = {}
window.view.showCurrentUser = (user) =>{
console.log(user)
  userImg.innerHTML = `<img class="userImg" src="${user.photoUrl}">`
}
window.view.showUsers = (user) =>{
  let render = '';
  render +=`<div class="user-container" id="${user.key}" onclick="window.loadChat('${user.key}')">`
  render += `<div class="row">`
  render += `<div class="col-2">`
  render += `<img class="userImg" src="${user.val().photoUrl}">`
  render += `</div>`
  render += `<div class="col-10 user-name">`
  render += `<span>${user.val().displayName}</span>`
  render += `</div>`
  render += `</div>`
  usersList.innerHTML += render;
}