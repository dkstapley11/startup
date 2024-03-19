function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
  }
  
  const config = require('./dbConfig.json');
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`