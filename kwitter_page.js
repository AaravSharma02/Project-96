

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBkhsx1dJFZakVM_EWxxR3tN-y2QGEVHtA",
    authDomain: "project-45910.firebaseapp.com",
    databaseURL: "https://project-45910-default-rtdb.firebaseio.com",
    projectId: "project-45910",
    storageBucket: "project-45910.appspot.com",
    messagingSenderId: "1054594349695",
    appId: "1:1054594349695:web:0ee0ef7184688afaebdd4a",
    measurementId: "G-WB8E0XL46F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();