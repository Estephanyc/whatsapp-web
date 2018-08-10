window.controller = {}
window.controller.listUser = () =>{
  window.model.getUserList().then((users)=>{
    let usersKeys = Object.keys(users.val())
    usersKeys.forEach(element => {
      let user = window.model.getUser(element)
      user.then((user)=>{
        window.view.showUsers(user.val())
      })
    })
  })
}
window.controller.currentUser = () =>{
  console.log(firebase.auth().currentUser)
}