var database;
var drawing = [];
var currentPath = [];

function setup() {
  canvas = createCanvas(800,700);
  canvas.mousePressed(startPath);
  //canvas.mouseReleased(endPath);
  var firebaseConfig = {
    apiKey: "AIzaSyDxkoAV1RRqfbbIial_7z8POpfto485Ua4",
    authDomain: "final-canvas.firebaseapp.com",
    databaseURL: "https://final-canvas.firebaseio.com",
    projectId: "final-canvas",
    storageBucket: "final-canvas.appspot.com",
    messagingSenderId: "279823121121",
    appId: "1:279823121121:web:1f34b11866de6fa81d95a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
}

function startPath(){

  currentPath = [];

  drawing.push(currentPath);

}

//function endPath(){

//}

function draw() {
background(255,165,0);  

if(mouseIsPressed){

  var point = {

    x:mouseX,
    y:mouseY

  }

  currentPath.push(point);

}


stroke(255);
strokeWeight(5);
noFill();

for(var i = 0 ; i < drawing.length ; i++){
  var path = drawing[i];
  beginShape();
  for(var j = 0 ; j < path.length ; j++){
vertex(path[j].x , path[j].y)

}

endShape();

}
}

