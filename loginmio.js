
var nodetodoadmin;
var todolodeadminfire;
var vinpnombre;
var  vpass;
function inicia(){

    var config = {
        apiKey: "AIzaSyBJZNbNmUQekatLuc2NnXUBedh5hzLvRm0",
        authDomain: "electoralempity.firebaseapp.com",
        databaseURL: "https://electoralempity.firebaseio.com",
        projectId: "electoralempity",
        storageBucket: "electoralempity.appspot.com",
        messagingSenderId: "366446292235"
      };
      firebase.initializeApp(config);
      funatraefireadmi();

}


function segundoinicio() {
    
}

  // Initialize Firebase



function funatraefireadmi(){
    firebase.database().ref().child(String("admin")).on("value", function(snapshot) {
  
        todolodeadminfire=snapshot.val();
        segundoinicio();


    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }


function fbtlogin(){
 vinpnombre=getv("idinpnombre");
 vpass=String(getv("inppass"));
console.log(todolodeadminfire);
    for(var i in todolodeadminfire){
if(todolodeadminfire.nombre==vinpnombre&&todolodeadminfire.clave==vpass){
window.location="index2.html";

alert(777);
}

    }

   
}

function getv(st){
   return document.getElementById(st).value;
}