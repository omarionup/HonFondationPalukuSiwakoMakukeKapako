// ===== CONFIGURATION FIREBASE — VERSION COMPATIBLE =====
const firebaseConfig = {
  apiKey: "AIzaSyBYXvIVNgII2OSb9nky-pSADQTYI6tEv8g",
  authDomain: "fondation-paluku.firebaseapp.com",
  projectId: "fondation-paluku",
  storageBucket: "fondation-paluku.appspot.com",
  messagingSenderId: "132602039423",
  appId: "1:132602039423:web:7547231de610c2430a4"
};

// Initialiser Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
window.db = firebase.firestore();

