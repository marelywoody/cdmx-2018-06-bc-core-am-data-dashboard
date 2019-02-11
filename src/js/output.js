const buttonLogout = document.getElementById('button-logOut');

window.auth = () => {
  buttonLogout.innerHTML = `
  <input type="button" id="logOut" value="Cerrar sesión">
  `;

  const logOut = document.getElementById('logOut');

  logOut.addEventListener('click', event => {
    inputEmail.value = '';
    inputEmail.placeholder = 'Ingresa tu usuario';
    inputPassword.value = '';
    inputPassword.placeholder = 'Ingresa la contraseña';
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
    });
  });
};