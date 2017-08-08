// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNIKLQEY5Nkvmba62IiDmdc-WsK-96t4k",
  authDomain: "employee-database-3ad26.firebaseapp.com",
  databaseURL: "https://employee-database-3ad26.firebaseio.com",
  projectId: "employee-database-3ad26",
  storageBucket: "",
  messagingSenderId: "693622641737"
};
firebase.initializeApp(config);

//creating variables
var database = firebase.database();

var name = "";
var destination = "";
var frequency = "";
var firstTrain = "";

//creating function for when 'submit' button is clicked
$("#button").on("click", function() {
// console.log("true");
name = $("#inputTrain").val();
role = $("#inputDestination").val();
start = $("#inputStartDate").val();
monthly = $("#inputMonthlyPay").val();
database.ref().push({
  trainName: name,
  destination: destination,
  frequency: frequency,
  firstTrain: firstTrain
})
});

database.ref().on("child_added", function(childSnapshot) {
var snap = childSnapshot.val();
console.log(snap);
$("#fillChart").append(
  "<td>" + snap.trainName + "</td>" +
  "<td>" + snap.destination + "</td>" +
  "<td>" + snap.frequency + "</td>" +
  "<td>" + snap.firstTrain + "</td>"
)
});
