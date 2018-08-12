window.controller = {}
window.controller.listUsers = () =>{
  window.model.getUserList().on('child_added', (user) => {
    console.log(user.val())
    window.view.showUsers(user)
  });
}
