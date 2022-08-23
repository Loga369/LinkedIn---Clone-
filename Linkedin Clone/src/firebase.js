import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCSFrb72pdTK3FG4cRFhuVORe9tAK_ar2A",
    authDomain: "linkedin-clone-2409d.firebaseapp.com",
    projectId: "linkedin-clone-2409d",
    storageBucket: "linkedin-clone-2409d.appspot.com",
    messagingSenderId: "938394407466",
    appId: "1:938394407466:web:c14969c45799129fcb6953"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();


  export {auth,provider,storage};

  export default db;
