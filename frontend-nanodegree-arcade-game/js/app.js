// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // The enemy location as x and y; y is random between 1 and 3
    this.loc = {x:0,y:getRandomIntInclusive(2,4)};

    //The enemy speed which is a random value either 10 or 50
    this.speed = getRandomIntInclusive(10,50);
    console.log(`Speed: ${this.speed} Loc: ${this.loc.x} ${this.loc.y}`);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.loc.x = this.loc.x + (this.speed * dt);
};

Enemy.prototype.collision = function(){
    //TODO implement collision with player
    return false;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.loc.x, this.loc.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(){
        //Load the initial image for the character
        this.sprite = 'images/char-horn-girl.png';
        //Load the initial location for the character; y is always 0 x is random between 0-4
        this.loc = {x:getRandomIntInclusive(0,4), y:0};
    }
    update(dt){
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        //this.loc.y = this.loc.y + (this.speed * dt);
    }
    render(){
        // @ts-ignore
        ctx.drawImage(Resources.get(this.sprite), this.loc.x, this.loc.y);
    }
    handleInput(key){
        switch (key){
            case 'left':
                this.loc.x--;
                break;
            case 'righ':
                this.loc.x++;
                break;
            case 'up':
                this.loc.y++;
                break;
            case 'down':
                this.loc.y--;
                break;
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();
const allEnemies = [];
allEnemies.push(new Enemy());

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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};
