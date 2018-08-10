window.view = {}
window.view.showCurrentUser = (user) =>{
console.log(user)
  userImg.innerHTML = `<img class="userImg" src="${user.photoUrl}">`
}
window.view.showUsers = (user) =>{
  console.log(user)
  let render = '';
  render +=`<div class="user-container">`
  render += `<div class="row">`
  render += `<div class="col-2">`
  render += `<img class="userImg" src="${user.photoUrl}">`
  render += `</div>`
  render += `<div class="col-10 user-name">`
  render += `<span>${user.displayName}</span>`
  render += `</div>`
  render += `</div>`
  usersList.innerHTML += render;
}