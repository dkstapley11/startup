# My Startup -- Elevator Pitch
I have an idea for an online game! I got the inspiration from a game I remember playing as a kid. Basically, you have a grid of panels. Behind each panel is either a treasure chest or a landmine. Each time you flip one over and find treasure, your points double! You start with 1 point, and see how far you can make it. But, flip over a landmine, and it's game over! It's simple, and it plays into humans' propensity to gamble. It would provide a quick and easy thrill for when you had 5 minutes to kill. You would also be able to increase your starting bet as you collect more points, raising your potential to get tons more. 

## Design

![Grid Game design](Grid_Game.png)

## Technologies and Features My Online Game Will Employ

### Authentication:

In order to play, the user will have to create an account and login. They will need an account so that we can store the user's high scores and saved points. 

### Database Data:

As mentioned before, part of the fun of the game will be getting exponential increases in points. In order to save progress so that players wouldn't have to start over from one, the game will store the specific user's all-time points that they've saved up. There will also be a leaderboard of the highest point holders in the world. 

### Websocket Data:

Every time a user starts or ends a round, the leaderboard will update. Each user will be able to see their global ranking change after each round.

### Additional Technology Notes:

- **HTML** - I will use three precisely structured html pages. One for logging in, one for playing the game, and one to see the global leaderboard.
- **CSS** - Professional-looking styling to ensure that the site is playable and reachable on all screen sizes.
- **JavaScript** - Will provide the meat of the grid game. Panels will be interactive, like buttons.
- **React** - Application ported to use the React web framework.


# HTMl deliverable
### Criteria and how they're met
- **simon deployed** - simon is deployed on simon.landminegame.com
- **GitHub Linked** - my github is linked in every footer
- **HTML pages** - Included index, about, play, leaderboard (and links between them in every header)
- **HTML code** - Wrote solid html code to be the skeleton of my game
- **textual content** - included a how-to-play in the about page, other text as necessary
- **Placeholder for 3rd party service calls//Application images** - Included images found online that I pulled into my about page (the icons for the game)
- **Login** - Login placeholder on index page
- **Database Data** - Leaderboard page and current points (your account will save your accumulated point count)
- **Websocket data** - realtime communication goes in the leaderboard page and the play.html shows the live "top 3" podium


# CSS deliverable
### Criteria and how they're met
- **Header, Footer, Main Content** - Styled the same on each page. Simplistic blue look at the top
- **Navigation elements** - Simplistic/Minimal center-aligned navigation links under the header!
- **Responsive to window resizing** - tested on multiple devices, all necessary elements have a "display: flex;" that responsds well to different screen sizes
- **Application Elements** - All necessary startup elements are included and styled
- **Text Content** - All text properly formatted and decorated
- **Application images** - Included on blue background on-theme in the about page

# JS deliverable
### Criteria and how they're met
- **Simon JS deployed** - done.
- **JS support for login** - included on homepage, stores name in localstorage
- **JS support for database data** - leaderboard updates randomly and sorts by score. everything is ready to fetch data
- **JS Websocket Support** - player activity is displayed as events occur (adjacent to the game portion on the play page)
- **JS interactivity** - my game works!

# Express deliverable
### Criteria and how they're met
- **Prerequisite**: Simon Service deployed to your production environment ✅
- **Prerequisite**: A link to your GitHub startup repository prominently displayed on your application's home page ✅
- **Prerequisite**: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. ✅
- **Prerequisite**: At least 10 git commits spread consistently throughout the assignment period. ✅
- Backend web service support and interaction
 - Create an HTTP service using Node.js and Express ✅
   - Created index.js file, initialized express web service. 
 - Frontend served up using Express static middleware
   - Used Express built-in static middleware to load up front-end code.
 - Your frontend calls third party service endpoints
   - Load a random quote on `about.html` using the same API as Simon
 - Your backend provides service endpoints
   - Endpoints (/score, /scores, /newgame)
  - 20% - Your frontend calls your service endpoints