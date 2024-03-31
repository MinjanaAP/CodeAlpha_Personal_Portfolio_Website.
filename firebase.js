const firebaseConfig = {
    apiKey: "AIzaSyCaK9A1PVXfAjQJ_Sjg6sl9RmTw0qy64i0",
    authDomain: "myportfolio-edaa5.firebaseapp.com",
    databaseURL: "https://myportfolio-edaa5-default-rtdb.firebaseio.com",
    projectId: "myportfolio-edaa5",
    storageBucket: "myportfolio-edaa5.appspot.com",
    messagingSenderId: "607306460059",
    appId: "1:607306460059:web:de7a0bc99b9c166f810f3e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference db
var db = firebase.database().ref('myportfolio');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    // console.log(name, email, message);
    saveMessage(name, email, message);
    document.getElementById('contactForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name,email,message){
    var newMessageRef = db.push();

    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });

    swal("Thank You!", "Received Your Message", "success");
}