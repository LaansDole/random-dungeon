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

