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

// for if I want to use the simon JS to generate random stuff
setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="player-event">Eich</span> scored ${score}</div>` +
      chatText.innerHTML;
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

// Define the game state
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
    initializeGame(); // Call your existing function to set up the game
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
