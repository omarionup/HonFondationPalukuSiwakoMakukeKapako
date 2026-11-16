<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBYxVIvNgII2Osb9nky-pSADQTYl6tEv8g",
    authDomain: "fondation-paluku.firebaseapp.com",
    projectId: "fondation-paluku",
    storageBucket: "fondation-paluku.firebasestorage.app",
    messagingSenderId: "132602039423",
    appId: "1:132602039423:web:7547231adeb610c243034a",
    measurementId: "G-X302D0SRGQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
