{/* <td id="1a" onclick="boxClicked('1a')"></td>
<td id="2a" onclick="boxClicked('2a')"></td>
<td id="3a" onclick="boxClicked('3a')"></td>
<td id="1b" onclick="boxClicked('1b')"></td>
<td id="2b" onclick="boxClicked('2b')"></td>
<td id="3b" onclick="boxClicked('3b')"></td>
<td id="1c" onclick="boxClicked('1c')"></td>
<td id="2c" onclick="boxClicked('2c')"></td>
<td id="3c" onclick="boxClicked('3c')"></td> */}



// create 2 users with array to keep track of clicked squares
var user1 = {
  id: 1,
  valuesPlayed: []
};

var user2 = {
  id: 2,
  valuesPlayed: []
};

// function switchUsers(user) {
  if(user.id === 1){
    userMark ='O'
  } else {
    userMark = 'X'
  }
//}
var currentUser = 'user1';

function boxClicked(position) {

  var userMark = '';
  
  // if(user.id === 1){
  //   userMark ='O'
  // } else {
  //   userMark = 'X'
  // }

  document.getElementById(position).innerHTML = userMark;

  var tempArray = [position[0], position[1]]

  if(currentUser === "user1"){
    user1.valuesPlayed.push(tempArray)
  } else {
    user2.valuesPlayed.push(tempArray)
  } 

//   result = isItAWin();  
//   if(result === true){
//     document.getElementById("winner").innerHTML = currentUser
//   } else {
//     //next user's move
    
//   }

  

// }

// function isItAWin (){
//   // Checks the current user's 
 };