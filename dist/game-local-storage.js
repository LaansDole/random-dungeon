// Set the default high score to 0 if it's not already set
if (!localStorage.getItem('High Score:')) {
    localStorage.setItem('High Score:', 0);
}

localStorage.setItem('Current Score:', 0);

localStorage.setItem('Healing Potions:', 10)

// Get the high score from localStorage
let highScore = localStorage.getItem('High Score:');
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

// Display the score
document.getElementById('high-score').innerText = 'High Score: ' + highScore;
document.getElementById('current-score').innerText = 'Current Score: ' + currentScore;