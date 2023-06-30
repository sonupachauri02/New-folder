const wrapper=document.querySelector('.wrapper');
const formboxlogin=document.querySelector('.form-box.login');
const formboxregister=document.querySelector('.form-box.register');
const loginLink=document.querySelector('.login-link');
const iconclose=document.querySelector('.icon-close');
const registerLink=document.querySelector('.register-link');
const btnlogin=document.querySelector('.btnlogin');
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnlogin.addEventListener('click',()=>{
    wrapper.classList.add('active-login');
});
registerLink.addEventListener('click',()=>{
    formboxlogin.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    formboxlogin.classList.remove('active');
});
registerLink.addEventListener('click',()=>{
    formboxregister.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    formboxregister.classList.remove('active');
});
iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-login');
});

