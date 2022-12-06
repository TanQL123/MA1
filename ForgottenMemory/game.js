var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 30 * 50,
    height: 30 * 30,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, intro1, intro2, intro3, intro4, instruction, instruction2, world, room1, room2, room3, showInventory, victory ,gameOver]
};

var game = new Phaser.Game(config);
window.potion1 = true;
window.potion2 = true;
window.potion3 = true;
window.potion4 = true;
window.potion5 = true;

window.memory1 = true;
window.memory2 = true;
window.memory3 = true;
window.memory4 = true;
window.memory5 = true;
window.memory6 = true;
window.memory7 = true;
window.memory8 = true;
window.memory9 = true;

window.potions = 3
window.memories = 0


