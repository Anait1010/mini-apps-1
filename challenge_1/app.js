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


  var tempArray = [position];

//console.log('tempArray ------->', tempArray);

  if(currentUser === "user1"){
    user1.valuesPlayed.push(tempArray)
  } else {
    user2.valuesPlayed.push(tempArray)
  };
 //console.log('Values played for user 1 ------->', user1.valuesPlayed)
   
function isItAWin (){
   var winningCombos = [
     [['1a'],['2a'], ['3a']], 
     [['1b'],['2b'], ['3b']], 
     [['1c'],['2c'], ['3c']], 
     [['1a'],['2b'], ['3c']],
     [['3a'],['2b'], ['1c']]];
  // console.log('Winning combos 0 ------->', winningCombos[0]);
  //  console.log('Winning combos  1 ------->', winningCombos[1]);
   for (var i = 0; i < winningCombos.length; i++) {
    if(user1.valuesPlayed == winningCombos[0] || winningCombos[1]) {
      //console.log('Winning combos ------->', winningCombos[i]);
     user1 = 'Winner';
    // alert('Winner')
    
    } else if(user2.valuesPlayed.includes(winningCombos[i])) {
    user2 = 'Winner';
      } else  { 
        return 'Tie'
      }
   };
  //  if(tempArray.includes(winningCombos[0])) {
  //  var winner = alert('Winner');
  //  currentUser = winner;
  
 
  // }
  
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
