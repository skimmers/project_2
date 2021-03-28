const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

// // Global variables from elements in signup.hbs
// const signupForm = document.querySelector('.signup-form');
// const userEmail = document.querySelector('input#email-signup');
// const userPassword = document.querySelector('input#password-signup');
// const userName = document.querySelector('input#name-signup');

// // event handler for the signupForm submission
// signupForm.addEventListener('submit', event => {
//     event.preventDefault();

//     // save user inputs in userData object
//     const userData = {
//         username: userUsername.value.trim(),
//         email: userEmail.value.trim(),
//         password: userPassword.value.trim()
//     };

//     // If user has entered all necessary information, call the signupFormHandler function else return
//     if (userData.username && userData.email && userData.password) {
//         signupFormHandler(userData.username, userData.email, userData.password);
//     } else {
//         alert("Signup unsuccessful. Ensure all necessary fields are filled in and try again.");
//         return;
//     }
// });

// // API call to the api/user/ (aka signup) POST route
// async function signupFormHandler(username, email, password) {

//     await fetch('/api/user', {
//         method: 'POST',
//         body: JSON.stringify({email, password, username}),
//         headers: { 'Content-Type': 'application/json' },
//     }).then((response) => {        
//         document.location.replace('/homepage');
//     }).catch((err) => {
//         if (err) throw err;
//     });
// };