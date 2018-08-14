window.controller = {};
window.controller.listUsers = () =>{
  window.model.getUserList().on('child_added', (user) => {
    window.view.showUsers(user);
  });
};
