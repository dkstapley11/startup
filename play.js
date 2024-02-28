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
/*setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="player-event">Eich</span> scored ${score}</div>` +
      chatText.innerHTML;
  }, 5000);*/


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

// Start the game
initializeGame();
