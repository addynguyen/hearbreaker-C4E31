// signup
const signupForm=document.getElementById('signup-form');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    //get user info
    const email = signupForm['email'].value;
    const password= signupForm['password'].value;
    const rePassword= signupForm['confirm-password'].value;
    // validate
    if(rePassword!=password){
        alert('Password is not the same!');
    }
    else{
        //signup the user
        auth.createUserWithEmailAndPassword(email, password).then(()=>{
        signupForm.reset()
    });
    }
    
})

//login
const loginForm=document.getElementById('login-form');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = loginForm['email'].value;
    const password= loginForm['password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred=>{
        console.log('Account logged in');
        loginForm.reset();
        document.getElementById('open-login-form').style.display='none';
        document.getElementById('open-signup-form').style.display='none';
        document.getElementById('log-out').style.display='block';
    });
});

//logout
const logout= document.getElementById('log-out');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log('users signed out');
    })
})