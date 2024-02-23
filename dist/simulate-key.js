function simulateKeyPress(keyCode) {
    // Create a new 'KeyboardEvent' event
    var event = new KeyboardEvent('keydown', {
        keyCode: keyCode,
        bubbles: true,
        cancelable: true
    });
    console.log(event);
    // Dispatch it on the body
    document.body.dispatchEvent(event);
}

// Mapping of keys to button ids
const keyMap = {
    '87': 'up',    // 'W' key
    '65': 'left',  // 'A' key
    '83': 'down',  // 'S' key
    '68': 'right', // 'D' key
    '49': 'heal'   // '1' key
};

// Add the 'highlight' class to the button when the key is pressed
document.addEventListener('keydown', function (event) {
    const buttonId = keyMap[event.keyCode.toString()];
    if (buttonId) {
        const button = document.getElementById(buttonId);
        button.classList.add('btn-outline-warning');
    }
});

// Remove the 'highlight' class when the key is released
document.addEventListener('keyup', function (event) {
    const buttonId = keyMap[event.keyCode.toString()];
    if (buttonId) {
        const button = document.getElementById(buttonId);
        button.classList.remove('btn-outline-warning');
    }
});

