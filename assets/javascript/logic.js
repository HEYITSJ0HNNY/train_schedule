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
destination = $("#inputDestination").val();
frequency = $("#inputFrequency").val();
firstTrain = $("#inputFirstTrain").val();

  database.ref().push({
  trainName: name,
  destination: destination,
  frequency: frequency,
  firstTrain: firstTrain
})
});

database.ref().on("child_added", function(childSnapshot) {
var snap = childSnapshot.val();

var trainFrequency = snap.frequency;

 var trainTime = snap.firstTrain;
 var timeConverted = moment(trainTime, "HH:mm").subtract(1, "years").format("X");


  var timeDiff = moment().diff(moment.unix(trainTime), "minutes");

   var tRemainder = moment().diff(moment.unix(trainTime)) % trainFrequency;
   var trainMinutes = trainFrequency - tRemainder;
   var arrival = moment().add(trainMinutes, "m").format("hh:mm A");

      $("#fillChart").append("<tr>" + "<td>" + snap.trainName + "</td>" + "<td>" + snap.destination +  "</td>" +"<td>" + snap.frequency + "</td>" + "<td>" + arrival + "</td>" +"<td>" + trainMinutes + "</td>")


 });
