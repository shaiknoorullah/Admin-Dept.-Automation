// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAuth, signInWithPopup, RecaptchaVerifier,  GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js"
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWznEyCp2Q63WycA4vWyXoFlidUmkRCHA",
  authDomain: "college-auth-system-1.firebaseapp.com",
  projectId: "college-auth-system-1",
  storageBucket: "college-auth-system-1.appspot.com",
  messagingSenderId: "694431777860",
  appId: "1:694431777860:web:da11a6e956571882902811",
  measurementId: "G-1WQ0MQ69LS"
};


const google_login_btn = document.querySelector(".google-login-btn")
const phone_login_btn = document.querySelector(".phone-login-btn")
// const usr_phone_sub_btn = document.querySelector(".usr-phn-no")


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();


function googleLogin() {

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


let UsrPhoneNo 

function get_usr_phn() {

    UsrPhoneNo = document.querySelector('input').value
    // console.log(UsrPhoneNo)
    // logError = UsrPhoneNo
    return(UsrPhoneNo)

}

console.log(UsrPhoneNo)

function phoneLogin() {

    window.recaptchaVerifier = new RecaptchaVerifier(phone_login_btn, {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      }, auth);

}


google_login_btn.addEventListener("click", ()=>{
    get_usr_phn()
})

// usr_phone_sub_btn.addEventListener("click", ()=>{
//     googleLogin()
// })

phone_login_btn.addEventListener("click", ()=>{
    phoneLogin()
})