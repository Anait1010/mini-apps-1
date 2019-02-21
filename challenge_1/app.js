/* <td id="1a" onclick="boxClicked('1a')"></td>
<td id="2a" onclick="boxClicked('2a')"></td>
<td id="3a" onclick="boxClicked('3a')"></td>
<td id="1b" onclick="boxClicked('1b')"></td>
<td id="2b" onclick="boxClicked('2b')"></td>
<td id="3b" onclick="boxClicked('3b')"></td>
<td id="1c" onclick="boxClicked('1c')"></td>
<td id="2c" onclick="boxClicked('2c')"></td>
<td id="3c" onclick="boxClicked('3c')"></td> */



// create 2 user objects with array inside to keep track of clicked boxes
var currentUser = 'user1';

var user1 = {
  valuesPlayed: []
};


var user2 = {
  valuesPlayed: []
};

//function for switching users
function switchUser() {
  if (currentUser === 'user1'){ 
    currentUser = 'user2';
  } else if (currentUser === 'user2') {
    currentUser = 'user1';
  };
};


function boxClicked(position) {
  var userMark = '';

  if(currentUser === 'user1'){
    userMark = 'X';
  } else {
    userMark = 'O';
  };
  document.getElementById(position).innerHTML = userMark;

  switchUser();

// temporary array that holds clicked values before it is pushed to each users array
  var tempArray = [position];

//console.log('tempArray ------->', tempArray);

// push clicked values from tempArray to each user's array
  if(currentUser === 'user1') {
    user1.valuesPlayed.push(tempArray)
    //console.log('user array 1 ------->', user1.valuesPlayed);
  } else  {
    user2.valuesPlayed.push(tempArray)
     console.log('user array 2 ------->', user2.valuesPlayed);
    };


// create an array containing all cells e.g 1a, 1b, 1c .....
// when the board is full
// loop through each users array
// and check if any of them have winning combinations 


  // isItAWin(); 
// function isItAWin (){
//   var winningCombos = [
//     [['1a'],['2a'], ['3a']], 
//     [['1b'],['2b'], ['3b']], 
//     [['1c'],['2c'], ['3c']], 
//     [['1a'],['2b'], ['3c']],
//     [['3a'],['2b'], ['1c']]
//     ];

//      // Compare user1.valuesPlayed/user2.valuesPlayed with winningCombos[i]
//      // if they are equal we have a winner
//   for (var i = 0; i < winningCombos.length; i++) {
//     if(user1.valuesPlayed === winningCombos[i]) {
//       console.log('user 1', user1.valuesPlayed)
//       console.log('"O" is a winner');
//     } else if (user2.valuesPlayed.includes(winningCombos[i])) { 
//       console.log('"X" is a winner');
//       } else  { 
//         console.log('Tie');
//     } 
//   };
//   //  if(tempArray.includes(winningCombos[0])) {
//   //  var winner = alert('Winner');
//   //  currentUser = winner;
//   // }
//  };
  
  //  result = isItAWin();  
  // if(result === true){
  //   document.getElementById("winner").innerHTML = currentUser
  // } else {
  //   //next user's move
    
  // }

}

