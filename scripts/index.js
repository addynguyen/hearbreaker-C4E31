const openLoginForm=document.getElementById('open-login-form');
openLoginForm.addEventListener('click',()=>{
    document.getElementById('login-modal').style.display="flex";
    document.getElementById('signup-modal').style.display="none";
})
const openSignupForm=document.getElementById('open-signup-form');
openSignupForm.addEventListener('click',()=>{
    document.getElementById('signup-modal').style.display="flex";
    document.getElementById('login-modal').style.display="none";
})

const createAccount = document.getElementById('link-create-account');
createAccount.addEventListener('click',()=>{
    document.getElementById('login-modal').style.display="none";
    document.getElementById('signup-modal').style.display="flex";
})