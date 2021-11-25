
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDhT4CWBXWIbc71OGATJYDoJLx2eI6oYrc",
  authDomain: "chatting-c2959.firebaseapp.com",
  databaseURL: "https://chatting-c2959-default-rtdb.firebaseio.com",
  projectId: "chatting-c2959",
  storageBucket: "chatting-c2959.appspot.com",
  messagingSenderId: "39406088982",
  appId: "1:39406088982:web:60d75349fa12a5f0971637"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
    ;
}