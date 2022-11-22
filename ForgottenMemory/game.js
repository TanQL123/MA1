var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 20 * 50,
    height: 20 * 50,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, main, room1, world, room2, room3]
};

var game = new Phaser.Game(config);
window.potion1 = true;
window.potion2 = true;
window.potion3 = true;
window.potion4 = true;
window.potion5 = true;


