const MAX_X = 400;
const MAX_Y = 400;
const ENEMY_MAX_Y = 230;
const ENEMY_MIN_Y = 20;

//General figure class that is base class for all figures in the game
class Figure {
    constructor(sprite, loc, speed = getRandomIntInclusive(10,50),boundingBoxX = 20, boundingBoxY = 10){
        //A string containing the image used to visualize the figure on the board.
        this.sprite = sprite;

        //The location of a figure with is an object {x: ,y: }
        this.loc = loc;

        //The figure speed which is a random value either 10 or 50 per default or passed in the constructor
        this.speed = speed;

        this.boundingBoxXValue = boundingBoxX;
        this.boundingBoxYValue = boundingBoxY;

        //The bounding box surrounding the figures
        this.boundingBox = {};
        this.updateBoundingBox();
    }
    // Draw the figure on the screen, required method for game
    render(){
        // @ts-ignore
        ctx.drawImage(Resources.get(this.sprite), this.loc.x, this.loc.y);
    }
    updateBoundingBox(){
        //We calculate a bounding box around the figure
        this.boundingBox.xLeft = this.loc.x - this.boundingBoxXValue;
        this.boundingBox.xRight = this.loc.x + this.boundingBoxXValue;
        this.boundingBox.yDown = this.loc.y + this.boundingBoxYValue;
        this.boundingBox.yUp = this.loc.y - this.boundingBoxYValue;
        //console.log(`BoundingBox: ${this.boundingBox.xRight} ${this.boundingBox.xLeft} ${this.boundingBox.yUp} ${this.boundingBox.yDown}`);
    }
}


// Enemies our player must avoid
class Enemy extends Figure{
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(sprite = 'images/enemy-bug.png'){
        super(sprite,{x:0,y:getRandomIntInclusive(ENEMY_MIN_Y,ENEMY_MAX_Y)});
        console.log(`Enemy: Speed: ${this.speed} Loc: ${this.loc.x} ${this.loc.y} BoundingBox: xRight:${this.boundingBox.xRight} xLeft:${this.boundingBox.xLeft} xUp:${this.boundingBox.yUp} xDown:${this.boundingBox.yDown}`);
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt){
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.loc.x = this.loc.x + this.speed * dt;

        if(this.loc.x >= MAX_X)
        {
            this.loc.x = 0;
            this.loc.y = getRandomIntInclusive(ENEMY_MIN_Y,ENEMY_MAX_Y);
        }
        this.updateBoundingBox();
        this.checkForCollision();
    }
    checkForCollision(){
        //Now we check if the boundingBox of Enemy and Player collide

        if( (this.boundingBox.xRight >= player.boundingBox.xLeft && this.boundingBox.yDown >= player.boundingBox.yUp && this.boundingBox.xLeft <= player.boundingBox.xRight) ) {
                console.log("Collission!!!");
        }
        return false;
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player extends Figure{
    //Load the initial image for the character, if nothing is provided we use char-horn-girl.png
    constructor(sprite='images/char-horn-girl.png'){
        //Load the initial location for the character; y is always 0 x is random between 0-4
        super(sprite, {x:getRandomIntInclusive(0,MAX_X), y:MAX_Y},undefined,10,10)
        console.log(`Player: Speed: ${this.speed} Loc: ${this.loc.x} ${this.loc.y} BoundingBox: xRight:${this.boundingBox.xRight} xLeft:${this.boundingBox.xLeft} xUp:${this.boundingBox.yUp} xDown:${this.boundingBox.yDown}`);
        this.moveX = 0;
        this.moveY = 0;
    }
    update(dt){
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.loc.y +=this.moveY;
        this.loc.x +=this.moveX;
        this.moveX = 0;
        this.moveY = 0;

        //Check if we reached the water
        if(this.loc.y <= 0){
            console.log("Reached the water, we are save. Restart");
            resetGame();
        }
        this.updateBoundingBox();
    }
    handleInput(key){
        console.log(key);
        console.log(`Player: Speed: ${this.speed} Loc: ${this.loc.x} ${this.loc.y} BoundingBox: xRight:${this.boundingBox.xRight} xLeft:${this.boundingBox.xLeft} xUp:${this.boundingBox.yUp} xDown:${this.boundingBox.yDown}`);

        switch (key){
            case 'left':
                this.moveX = -this.speed;
                break;
            case 'right':
                this.moveX = this.speed
                break;
            case 'up':
                this.moveY = -this.speed;
                break;
            case 'down':
                this.moveY = this.speed;
                break;
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let player = new Player();
let allEnemies = [];
allEnemies.push(new Enemy());

// setTimeout(function(){
//     allEnemies.push(new Enemy());
// },1000);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function resetGame(){
    player = new Player();
    allEnemies = [];
    allEnemies.push(new Enemy());
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};
