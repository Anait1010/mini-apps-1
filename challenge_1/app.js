
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

 var oneA =  document.getElementById('1a');
 var oneB =  document.getElementById('1b');
 var oneC =  document.getElementById('1c');
 var twoA =  document.getElementById('2a');
 var twoB =  document.getElementById('2b');
 var twoC =  document.getElementById('2c');
 var threeA =  document.getElementById('3a');
 var threeB =  document.getElementById('3b');
 var threeC =  document.getElementById('3c');
// console.log('oneA',oneA.textContent )

  switchUser();

// temporary array that holds clicked values before it is pushed to each users array
  var tempArray = [position];


// push clicked values from tempArray to each user's array
  if(currentUser === 'user1') {
    user1.valuesPlayed.push(tempArray)
  } else  {
    user2.valuesPlayed.push(tempArray)
    // console.log('user array 2 ------->', user2.valuesPlayed);
    };

 isItAWin(); 
function isItAWin () {
  if (oneA.textContent === 'X' && twoA.textContent === 'X' && threeA.textContent === 'X') {
    return 'X';
  }
  else if (oneB.textContent === 'X' && twoB.textContent === 'X' && threeB.textContent === 'X') {
    return 'X';
  }
  else if (oneC.textContent === 'X' && twoC.textContent === 'X' && threeC.textContent === 'X') {
    return 'X';
  }
  else if (oneA.textContent === 'X' && oneB.textContent === 'X' && oneC.textContent === 'X') {
    return 'X';
  }
  else if (twoA.textContent === 'X' && twoB.textContent === 'X' && twoC.textContent === 'X') {
    return 'X';
  }
  else if (threeA.textContent === 'X' && threeB.textContent === 'X' && threeC.textContent === 'X') {
    return 'X';
  }
  else if (oneA.textContent === 'X' && twoB.textContent === 'X' && threeC.textContent === 'X') {
    return 'X';
  }
  else if (threeA.textContent === 'X' && twoB.textContent === 'X' && oneC.textContent === 'X') {
    return 'X';
  }
  else if (oneA.textContent === 'O' && twoA.textContent === 'O' && threeA.textContent === 'O') {
    return 'O';
  }
  else if (oneB.textContent === 'O' && twoB.textContent === 'O' && threeB.textContent === 'O') {
    return 'O';
  }
  else if (oneC.textContent === 'O' && twoC.textContent === 'O' && threeC.textContent === 'O') {
    return 'O';
  }
  else if (oneA.textContent === 'O' && oneB.textContent === 'O' && oneC.textContent === 'O') {
    return 'O';
  }
  else if (twoA.textContent === 'O' && twoB.textContent === 'X' && twoC.textContent === 'O') {
    return 'O';
  }
  else if (threeA.textContent === 'O' && threeB.textContent === 'X' && threeC.textContent === 'X') {
    return 'O';
  }
  else if (oneA.textContent === 'O' && twoB.textContent === 'O' && threeC.textContent === 'O') {
    return 'O';
  }
  else if (threeA.textContent === 'O' && twoB.textContent === 'O' && oneC.textContent === 'O') {
    return 'O';
  }
};
  if(isItAWin() === 'X') {
    alert('X is a winner!')
  }
  if(isItAWin() === 'O') {
    alert('O is a winner!')
  }
  var reset = document.getElementById('reset');
    reset.addEventListener('click', function() {
      document.getElementById(position).innerHTML = userMark;
      userMark = '';
      currentUser = 'user1';
    });
};

