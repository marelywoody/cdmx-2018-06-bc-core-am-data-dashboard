const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const login = document.getElementById('login');

login.addEventListener('click', event => {
  const email = inputEmail.value;
  const password = inputPassword.value;
  loginIn(email, password);
});

const loginIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
    alert('Usuario o contraseña incorrectos');
  });
};

const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      inputEmail.style.display = 'none';
      inputPassword.style.display = 'none';
      login.style.display = 'none';
      auth();
      document.getElementById('select-sede').style.display = 'inline-block';
      // document.getElementById('select-generation').style.display = 'inline-block';
    } else {
      inputEmail.style.display = 'inline-block';
      inputPassword.style.display = 'inline-block';
      login.style.display = 'inline-block';
      document.getElementById('logOut').style.display = 'none';
      document.getElementById('select-sede').style.display = 'none';
      document.getElementById('select-generation').style.display = 'none';
    }
  });
};
observer();