const firebaseConfig = {
    apiKey: "AIzaSyDogy5Aimzix87jtJxIuGA4WFjQByIp8lo",
    authDomain: "fir-8809a.firebaseapp.com",
    projectId: "fir-8809a",
    storageBucket: "fir-8809a.firebasestorage.app",
    messagingSenderId: "289044207825",
    appId: "1:289044207825:web:555b7a341724e9c29fcdf0",
    measurementId: "G-RF6NCVFP1X"
  };
firebase.initializeApp(firebaseConfig);

      // Sign-up function
      function signUp() {
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          firebase.auth().createUserWithEmailAndPassword(email, password)
              .then((userCredential) => {
                  // User is signed up successfully
                  const user = userCredential.user;
                  alert("user registered successfully");
              })
              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  alert("Error: " + errorMessage);
              });
        }