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
  const analytics = getAnalytics(app);

function addUser()
{
    user_name = document.getElementById("user_name", user_name);

  localStorage.setItem("user_name", user_name);

      window.location = "kwitter_room.html";
}

function getData() 
{
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           childData = childSnapshot.val();
            if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    }});});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "index.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location = "index.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push
    ({
name:user_name,
message:msg,
like:0
    });

    document.getElementById("msg").value = "";
}