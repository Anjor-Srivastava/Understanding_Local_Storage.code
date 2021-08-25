var score = 0;

function update_score() {
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function save_score() {
    localStorage.setItem("Score practice activity", score);
    console.log(localStorage.getItem("Score practice activity"));
}

function next_page() {
    window.location = "activity_2.html";
}