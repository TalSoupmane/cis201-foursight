/* All included in WSU-JSX cheat sheet Dr. */
var quizData = {
    levels: [
        { answer: "fan", images: ["fan1.jpg", "fan2.jpg", "fan3.jpg", "fan4.jpg"] },
        { answer: "water", images: ["w1.jpg", "w2.jpg", "w3.jpg", "w4.jpg"] },
        { answer: "light", images: ["l1.jpg", "l2.jpg", "l3.jpg", "l4.jpg"] },
        { answer: "cold", images: ["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg"] },
        { answer: "time", images: ["t1.jpg", "t2.jpg", "t3.jpg", "t4.jpg"] }
    ],
    currentLevel: 0
};

function loadLevel() {
    var grid = document.getElementById("image-grid");
    var title = document.getElementById("level-title");
    var currentData = quizData.levels[quizData.currentLevel];
    
    title.innerHTML = "Level " + (quizData.currentLevel + 1);
    grid.innerHTML = ""; 

    /* Standard Loop from WSU-JS page 7 */
    for (var i = 0; i < currentData.images.length; i++) {
        var colDiv = document.createElement("div");
        colDiv.className = "col-6";
        var imgElement = document.createElement("img");
        imgElement.src = "images/" + currentData.images[i];
        imgElement.className = "game-image img-fluid";
        colDiv.appendChild(imgElement);
        grid.appendChild(colDiv);
    }
}

function checkAnswer() {
    var inputField = document.getElementById("user-input");
    var feedback = document.getElementById("feedback");
    var userGuess = inputField.value.toLowerCase();
    var correctAnswer = quizData.levels[quizData.currentLevel].answer;

    if (userGuess == correctAnswer) {
        feedback.innerHTML = "Correct!";
        feedback.style.color = "#5a189a";
        quizData.currentLevel = quizData.currentLevel + 1;
        
        if (quizData.currentLevel < quizData.levels.length) {
            inputField.value = "";
            loadLevel();
        } else {
            feedback.innerHTML = "You win the game!";
        }
    } else {
        feedback.innerHTML = "Wrong answer, try again.";
        feedback.style.color = "#f21a05";
    }
}

document.getElementById("submit-btn").onclick = checkAnswer;
loadLevel();