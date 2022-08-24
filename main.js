// Moveable Objects Module

let moveWindow = false;

function grab(event, self) {
    moveWindow = true;

    var rect = event.target.getBoundingClientRect();
    var withinElement_x = event.clientX - rect.left;
    var withinElement_y = event.clientY - rect.top;
    
    window.addEventListener('mousemove', function(event) {
        if (moveWindow) {
            let positionX = Math.floor(event.clientX) - Math.floor(withinElement_x);
            let positionY = Math.floor(event.clientY) - Math.floor(withinElement_y);
            self.style.top = positionY;
            self.style.left = positionX;
            self.style.cursor = 'default';

            if (positionX <= 0) {
                self.style.left = 0;
            }

            if (positionY <= 0) {
                self.style.top = 0;
            }

            if ((positionX <= 0) && (positionY <= 0)) {
                self.style.borderRadius = 0;
            } else {
                self.style.borderRadius = '10pt';
            }
        }
    })
}

function ungrab() {
    moveWindow = false;
}

// ----- ----- -----