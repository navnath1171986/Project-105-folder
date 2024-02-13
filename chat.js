// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyITUJRhXUVoc09grZqXUsTWN3a_XuEQo",
    authDomain: "kwitter-e9e51.firebaseapp.com",
    databaseURL: "https://kwitter-e9e51-default-rtdb.firebaseio.com",
    projectId: "kwitter-e9e51",
    storageBucket: "kwitter-e9e51.appspot.com",
    messagingSenderId: "809252691516",
    appId: "1:809252691516:web:5919dc9ea2ef7cded7ad39"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



