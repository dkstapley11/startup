setInterval(() => {
    const updatedPlayers = []; 
    for(let i = 0; i < 10; i++) {
        updatedPlayers.push({
            name: `Player${Math.floor(Math.random() * 100)}`,
            score: Math.floor(Math.random() * 3000)
        });
    }

    updatedPlayers.sort((a, b) => b.score - a.score);

    const leaderboard = document.querySelector('.players');

    while (leaderboard.firstChild) {
        leaderboard.removeChild(leaderboard.firstChild);
    }

    updatedPlayers.forEach(player => {
        const playerEntry = document.createElement('li');
        playerEntry.innerHTML = `<span class="name">${player.name}</span><span class="points">${player.score}</span>`;
        leaderboard.appendChild(playerEntry);
    });
}, 5000);
