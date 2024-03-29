const buttons = document.querySelectorAll('.game button');
const BOMB_COUNT = 4;

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to initialize the game
function initializeGame() {
    const indices = Array(buttons.length).fill().map((_, index) => index);
    const shuffledIndices = shuffle(indices);
    const bombIndices = shuffledIndices.slice(0, BOMB_COUNT);
    var points = document.getElementById('gamble').value;
    // Make sure to validate the input points
    console.log("Game initialized with " + points + " points to gamble.");
    buttons.forEach((button, index) => {
        if (bombIndices.includes(index)) {
            button.dataset.type = 'bomb';
        } else {
            button.dataset.type = 'treasure';
        }
        
        // Reset button appearance
        button.innerHTML = '<img src="https://media.istockphoto.com/id/827452632/vector/question-mark-outline-isolated-vector.jpg?s=612x612&w=0&k=20&c=vgXteeOUWgWeOJZMRZqXkEGYk9APt1BLj-fmrI8YZKU=" class="question-mark">';
    });
}

function fetchRecentGames() {
    fetch('/api/recentGames')
      .then(response => response.json())
      .then(recentGames => {
        console.log(recentGames); // Temporarily log to see the structure
      })
      .catch(error => console.error('Error fetching recent games:', error));
  }

  function saveScore(score) {
    fetch('/api/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    })
      .then(response => response.json())
      .then(updatedScores => {
        // Optionally, update UI based on the response
      })
      .catch(error => console.error('Error saving score:', error));
  }

setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const playerName = `Player${Math.floor(Math.random() * 100)}`;
    const playerMessage = document.createElement('div');
    playerMessage.classList.add('event');
    playerMessage.innerHTML = `<span class="player-event">${playerName}</span> scored ${score}`;
    
    const chatText = document.getElementById('player-messages');
    chatText.insertBefore(playerMessage, chatText.firstChild);
    
    if (chatText.childElementCount > 10) {
        chatText.removeChild(chatText.lastChild);
    }
}, 5000);


// Event listener for buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.dataset.type === 'bomb') {
            this.innerHTML = '<img src="https://media.istockphoto.com/id/1139873743/vector/bomb-icon-vector-illustration-flat-design-style-vector-bomb-icon-illustration-isolated-on.jpg?s=612x612&w=0&k=20&c=1PkzhcIDlqWQ-ALpCryGV2Y35wvLCSCoJozCQP2fsqg=" class="icon">';
            // Handle bomb click
        } else {
            this.innerHTML = '<img src="https://media.istockphoto.com/id/1183998014/vector/treasure-the-treasure-in-the-chest-line-with-editable-stroke.jpg?s=612x612&w=0&k=20&c=ptqmLnZrnGR-AJRuMV6OdwgaIq0Y6jXG_2OPYOGvOu8=" class="icon">';
            // Handle treasure click
        }
    });
});


let gameState = {
    totalPoints: 100, // Starting total points, adjust as needed
    score: 0,
    gameActive: false,
};

// Function to update the UI with the current game state
function updateUI() {
    document.querySelector('.total-points').textContent = `Total Points = ${gameState.totalPoints}`;
    document.querySelector('.current-score').textContent = `Score = ${gameState.score}`;
    document.querySelector('.game-status').textContent = `Status = ${gameState.gameActive ? 'ACTIVE' : 'GAME OVER'}`;
}

// Function to start the game
function startGame() {
    let pointsGambled = parseInt(document.getElementById('gamble').value, 10);
    
    // Subtract points gambled from total points and check for sufficient points
    if (gameState.totalPoints >= pointsGambled) {
        gameState.totalPoints -= pointsGambled;
        gameState.score = pointsGambled;
        gameState.gameActive = true;
    } else {
        alert("Not enough points to gamble.");
        gameState.score = 0;
        gameState.gameActive = false;
    }

    updateUI();
    initializeGame();
}

// Function to handle a button click
function handleButtonClick(button) {
    if (!gameState.gameActive) {
        alert("Got too greedy! You found a landmine");
        return;
    }

    if (button.dataset.type === 'bomb') {
        button.innerHTML = '<img src="https://media.istockphoto.com/id/1139873743/vector/bomb-icon-vector-illustration-flat-design-style-vector-bomb-icon-illustration-isolated-on.jpg?s=612x612&w=0&k=20&c=1PkzhcIDlqWQ-ALpCryGV2Y35wvLCSCoJozCQP2fsqg=" class="icon">';
        gameState.score = 0;
        gameState.gameActive = false;
        saveScore(gameState.score);
    } else {
        button.innerHTML = '<img src="https://media.istockphoto.com/id/1183998014/vector/treasure-the-treasure-in-the-chest-line-with-editable-stroke.jpg?s=612x612&w=0&k=20&c=ptqmLnZrnGR-AJRuMV6OdwgaIq0Y6jXG_2OPYOGvOu8=" class="icon">';
        gameState.score *= 2;
    }

    updateUI();
}

// Function to bank points
function bankPoints() {
    if (gameState.gameActive) {
        gameState.totalPoints += gameState.score;
        saveScore(gameState.score);
        gameState.score = 0;
        gameState.gameActive = false;
        updateUI();
    } else {
        alert("The game is not active. No points to bank.");
    }
}


document.getElementById('gambleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    startGame();
});

document.querySelector('button').addEventListener('click', bankPoints);

document.querySelectorAll('.game button').forEach(button => {
    button.addEventListener('click', function() {
        handleButtonClick(this);
    });
});

updateUI();


initializeGame();
