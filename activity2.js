var score;
function getScore() {
    score =  localStorage.getItem("Score practice activity")
    document.getElementById("update").innerHTML = "<h1>Score: " + score + "</h1>";
}

function back() {
    window.location = "activity_1.html";
}

function remove() {
    localStorage.removeItem("Score practice activity");
}