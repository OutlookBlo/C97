
const firebaseConfig = {
      apiKey: "AIzaSyAHhRY3GaU5u8fHEqvsv7_cQync7vGXOoY",
      authDomain: "kwitter-53829.firebaseapp.com",
      databaseURL: "https://kwitter-53829-default-rtdb.firebaseio.com",
      projectId: "kwitter-53829",
      storageBucket: "kwitter-53829.appspot.com",
      messagingSenderId: "660527006991",
      appId: "1:660527006991:web:6424f630d5477d15f96a7a",
      measurementId: "G-7WBCEMS6MX"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update
      ({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}