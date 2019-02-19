/* <td id="1a" onclick="boxClicked('1a')"></td>
<td id="2a" onclick="boxClicked('2a')"></td>
<td id="3a" onclick="boxClicked('3a')"></td>
<td id="1b" onclick="boxClicked('1b')"></td>
<td id="2b" onclick="boxClicked('2b')"></td>
<td id="3b" onclick="boxClicked('3b')"></td>
<td id="1c" onclick="boxClicked('1c')"></td>
<td id="2c" onclick="boxClicked('2c')"></td>
<td id="3c" onclick="boxClicked('3c')"></td> */



// create 2 users with array to keep track of clicked squares
var currentUser = 'user1';

var user1 = {
  valuesPlayed: []
};

var user2 = {
  valuesPlayed: []
};

// function switchUser() {
//   if (currentUser === 'X') {
//     currentUser = 'O'
//   } else if (currentUser === 'O') {
//     currentUser = 'X'
//   }
// };




function boxClicked(position) {

  var userMark = '';
  
  if(currentUser === user1){
    userMark = 'X';
   // currentUser = user2;
  } else {
    userMark = 'O';
  };
  //  else if (currentUser === user2){
  //   userMark = 'O';
  //   currentUser = user1;
  // }

  document.getElementById(position).innerHTML = userMark;

  var tempArray = [position];

  

  if(currentUser === "user1"){
    user1.valuesPlayed.push(tempArray)
  } else {
    user2.valuesPlayed.push(tempArray)
  } 

  console.log('tempArray ------->', tempArray);

 
function isItAWin (){
   var winningCombos = [['1a', '2a', '3a'], ['1b','2b', '3b'],['1c', '2c', '3c']]
   for (var i = 0; i < winningCombos.length; i++) {
    if(tempArray.includes(winningCombos[i])) {
      currentUser = 'Winner';
  }
   }
   if(tempArray.includes(winningCombos[0])) {
   var winner = alert('Winner');
   currentUser = 'winner';
  
 
  }
  //console.log('Winner');
  // console.log(winningCombos[i]) 
 };
  
   result = isItAWin();  
  if(result === true){
    document.getElementById("winner").innerHTML = currentUser
  } else {
    //next user's move
    
  }

}

// function isItAWin (){
//    var winningCombos = [['1a', '2a', '3a'], ['1b','2b', '3b'],['1c', '2c', '3c']]
//    for (var i = 0; i < winningCombos.length; i++) {
//     if(tempArray.includes(winningCombos[i])) {
//       currentUser = 'Winner';
//   }
//    }
//    if(tempArray.includes(winningCombos[0])) {
//    var winner = alert('Winner');
//    currentUser = 'winner';
  
 
//   }
//   //console.log('Winner');
//   console.log(winningCombos[i]) 
//  };

 //};
