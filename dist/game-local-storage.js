// Initialize the high scores array if it's not already set
if (!localStorage.getItem('High Scores')) {
    localStorage.setItem('High Scores', JSON.stringify([0, 0, 0, 0, 0]));
}

localStorage.setItem('Current Score:', 0);

localStorage.setItem('Healing Potions:', 10)

// Get the high scores from localStorage
let highScores = JSON.parse(localStorage.getItem('High Scores'));
let currentScore = localStorage.getItem('Current Score:');
let numberOfPotions = localStorage.getItem('Healing Potions:');

// Get the element with id 'healing-potion'
let potionElement = document.getElementById('healing-potion');

// Set the innerHTML of the element to the number of potions
potionElement.innerHTML = numberOfPotions;

// Add visually hidden span for accessibility
let visuallyHiddenSpan = document.createElement('span');
visuallyHiddenSpan.className = 'visually-hidden';
visuallyHiddenSpan.innerHTML = 'healing potions';
potionElement.appendChild(visuallyHiddenSpan);

// Display the scores
let highScoresDiv = document.getElementById('high-scores');
highScoresDiv.innerHTML = '';
highScores.sort((a, b) => b - a).forEach((score, index) => {
    highScoresDiv.innerHTML += `High Score ${index + 1}: ${score}<br>`;
});
document.getElementById('current-score').innerText = 'Current Score: ' + currentScore;