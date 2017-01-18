var Animal = function(name, lives) {
    this.name = name;
    this.lives = lives;

    this.kill = function() {
        this.lives = 0;
    }
}

module.exports = Animal;