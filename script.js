const signinlink = document.querySelector('.singinlinkbtn');
const signuplink = document.querySelector('.singuplinkbtn');
const container = document.querySelector('.container');

signuplink.addEventListener('click',()=> {
    container.classList.toggle('active');
});


signinlink.addEventListener('click',()=> {
    container.classList.toggle('active');
});