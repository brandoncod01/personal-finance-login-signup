let loginForm = document.querySelector('.auth__form--login');
let signupForm = document.querySelector('.auth__form--signup');
let showSignupForm = document.querySelector('.auth__selectSignup');
let showLoginForm = document.querySelector('.auth__selectLogin');
let listFeatures = document.querySelector('.auth__list');

showSignupForm.addEventListener('click', () =>{
    console.log(loginForm);
    console.log(signupForm);
    loginForm.classList.add('hidde');
    signupForm.classList.remove('hidde');
    listFeatures.classList.add('remove');
});

showLoginForm.addEventListener('click', () =>{
    loginForm.classList.remove('hidde');
    signupForm.classList.add('hidde');
    listFeatures.classList.remove('remove');

});

