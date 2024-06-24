import{initializeApp}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithRedirect,getRedirectResult,signInWithPopup,sendEmailVerification,sendPasswordResetEmail}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore,setDoc,doc}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{firebaseConfig}from"./config.js";const app=initializeApp(firebaseConfig),auth=getAuth(),db=getFirestore(),provider=new GoogleAuthProvider;function showMessage(e,t){var s=document.getElementById(t);s.style.display="block",s.innerHTML=e,s.style.opacity=1,setTimeout((function(){s.style.opacity=0}),5e3)}const signUp=document.getElementById("submitSignUp");signUp.addEventListener("click",(e=>{e.preventDefault();const t=document.getElementById("rEmail").value,s=document.getElementById("rPassword").value,n=document.getElementById("fName").value,i=document.getElementById("lName").value;createUserWithEmailAndPassword(auth,t,s).then((e=>{const s=e.user,a={email:t,firstName:n,lastName:i};showMessage("Account Created Successfully","signUpMessage");const o=doc(db,"users",s.uid);setDoc(o,a).then((()=>{window.location.href="index.html"})).catch((e=>{})),sendEmailVerification(auth.currentUser).then((function(){alert("Email Verification Sent! Please verify your email!")}))})).catch((e=>{showMessage("auth/email-already-in-use"==e.code?"Email Address Already Exists !!!":"unable to create User","signUpMessage")}))}));const signIn=document.getElementById("submitSignIn");signIn.addEventListener("click",(e=>{e.preventDefault();const t=document.getElementById("email").value,s=document.getElementById("password").value;signInWithEmailAndPassword(auth,t,s).then((e=>{showMessage("login is successful","signInMessage");const t=e.user;localStorage.setItem("loggedInUserId",t.uid),window.location.href="homePage.html"})).catch((e=>{showMessage("auth/invalid-credential"===e.code?"Incorrect Email or Password":"Account does not Exist","signInMessage")}))}));const signInWithGoogle=document.getElementsByClassName("fa-google");for(let e=0;e<signInWithGoogle.length;e++)signInWithGoogle[e].addEventListener("click",(e=>{signInWithRedirect(auth,provider)}));getRedirectResult(auth).then((e=>{GoogleAuthProvider.credentialFromResult(e).accessToken,e.user})).catch((e=>{e.code,e.message}));const passwordResetBtn=document.getElementById("passwordReset");function sendPasswordReset(){const e=document.getElementById("email").value;sendPasswordResetEmail(auth,e).then((function(){alert("Password Reset Email Sent!")})).catch((function(e){const t=e.code,s=e.message;("auth/invalid-email"==t||"auth/user-not-found"==t)&&alert(s)}))}passwordResetBtn.addEventListener("click",(()=>{sendPasswordReset()}));