// Set the default high score to 0 if it's not already set
if (!localStorage.getItem('High Score:')) {
    localStorage.setItem('High Score:', 0);
}

if (!localStorage.getItem('Current Score:')) {
    localStorage.setItem('Current Score:', 0);
}
// Get the high score from localStorage
var highScore = localStorage.getItem('High Score:');
var currentScore = localStorage.getItem('Current Score:');

// Display the high score
document.getElementById('high-score').innerText = 'High Score: ' + highScore;
document.getElementById('current-score').innerText = 'Current Score: ' + currentScore;