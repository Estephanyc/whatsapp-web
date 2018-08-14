// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBjUlo3bay5MTBjsrBle_iXYnTPGZrPPUY',
  authDomain: 'whatsapp-web-e42c7.firebaseapp.com',
  databaseURL: 'https://whatsapp-web-e42c7.firebaseio.com',
  projectId: 'whatsapp-web-e42c7',
  storageBucket: 'whatsapp-web-e42c7.appspot.com',
  messagingSenderId: '798065412273'
};
firebase.initializeApp(config);
let currentUser = '';

window.onload = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      currentUser = firebase.auth().currentUser;
      window.controller.listUsers();
      let user = window.model.getUser(currentUser.uid);
      user.then((element)=>{
        window.view.showCurrentUser(element.val()); 
      });
    }
  });
};
// Registro
function registerWithFirebase() {
  console.log('registrar');
  const emailValue = txtEmail.value;
  const passwordValue = txtPassword.value;

  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
      console.log('usuario creado con exito');
      redirectFromLogin();
    })
    .catch((error) => {
      console.log('error de firebase > codigo ' + error.message);
      document.getElementById('message').innerHTML = error.message;
    });
}
// Login
function loginWithFirebase() {
  console.log('registrar');

  const emailValue = txtEmail.value;
  const passwordValue = txtPassword.value;

  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
    .then((e) => {
      console.log('usuario inicio sesion con exito');
      redirectFromLogin();
      document.getElementById('message').innerHTML = e.message;
    })
    .catch((error) => {
      console.log('error de firebase > codigo ' + error.message);
      document.getElementById('message').innerHTML = error.message;
    });
}
// logout
function logoutWithFireBase() {
  console.log('registrar');

  firebase.auth().signOut()
    .then(() => {
      location.href = 'index.html';
      console.log('usuario finalizo su sesion');
    })
    .catch();
}
// login with facebook
function facebookLoginwithFireBase() {
  console.log('registrar');

  const provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({
    'display': 'popup'
  });
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      console.log('login con facebook exitoso');
      redirectFromLogin();
    })
    .catch((error) => {
      console.log('error de firebase > codigo ' + error.code);
      console.log('error de firebase > codigo ' + error.message);
      document.getElementById('message').innerHTML = error.message;
    });
}
// login with google
function googleLoginwithFireBase() {
  console.log('registrar');
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    let token = result.credential.accessToken;
    let user = result.user;
    redirectFromLogin();
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
  });
}

function redirectFromLogin() {
  location.href = 'web.html';
}