import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";

document.addEventListener('DOMContentLoaded', function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in, redirect to the home page
            window.location.href = "home.html";
        }
});
});
const firebaseConfig = {
  apiKey: "AIzaSyA3MANC9FdLqvD75jK0ToVmLhyy37tDBcc",
  authDomain: "ecommerceweb-41935.firebaseapp.com",
  projectId: "ecommerceweb-41935",
  storageBucket: "ecommerceweb-41935.appspot.com",
  messagingSenderId: "574858761899",
  appId: "1:574858761899:web:f3c0f84214f25c4030c9ee",
  measurementId: "G-CRZH1DBR29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log('Signup successful:', user);
            window.location.href = "login.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Signup failed:', errorCode, errorMessage);
        });
});


