import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";


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


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

       // const auth = firebase.auth(); // Use the correct auth object
        // auth.signInWithEmailAndPassword(email, password)
        //     .then((userCredential) => {
        //         // Signed in
        //         const user = userCredential.user;
        //         console.log('Login successful:', user);
        //         // Redirect to the dashboard or another page after successful login
        //         window.location.href = "home.html";
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.error('Login failed:', errorCode, errorMessage);
        //         document.getElementById('errorMessage').textContent = errorMessage;
        //     });
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log('Signup successful:', user);
            window.location.href = "home.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Login failed')
            console.error('Signup failed:', errorCode, errorMessage);
        });
});
    });