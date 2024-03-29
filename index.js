const express = require('express');
const app = express();
const DB = require('./database.js');
connectDB().catch(err => console.log(err));


// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', async (req, res) => {
  try {
      const { getScoresCollection } = require('./database.js');
      const scoresCollection = getScoresCollection();
      const score = req.body;
      
      await scoresCollection.insertOne(score);
      res.status(201).send(score);
  } catch (error) {
      res.status(500).send(error.message);
  }
});


apiRouter.get('/recentGames', async (_req, res) => {
  try {
      const { getScoresCollection } = require('./database.js');
      const scoresCollection = getScoresCollection();
      
      const recentScores = await scoresCollection.find({}).sort({ _id: -1 }).limit(10).toArray();
      res.json(recentScores);
  } catch (error) {
      res.status(500).send(error.message);
  }
});

apiRouter.post('/recentGame', (req, res) => {
  res.send(scores);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let scores = [];
let recentGames = []; // New array to track the most recent games

function addRecentGame(newGame) {
  recentGames.unshift(newGame); // Add the new game to the beginning of the array
  if (recentGames.length > 10) {
    recentGames.length = 10; // Keep only the 10 most recent games
  }
}

function updateScores(newScore, scores) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }

  return scores;
}
