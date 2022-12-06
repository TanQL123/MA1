
class gameOver extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gameOver' });
    }

    preload() {

        // this.load.atlas('down', 'assets/knight_walk_down.png', 'assets/knight_walk_down.json');
        // this.load.image("tryagain","assets/tryagain.jpg")
        this.load.image('gameOver','assets/copywriting-14.png');
        this.load.image('go_caption','assets/copywriting-15.png');
        this.load.image('restart','assets/copywriting-16.png');
        this.load.image('fail_bg','assets/failed.png');

    } // end of preload //

    create () {

        // this.loseSound = this.sound.add('lose').setVolume(0.5)

        // this.losebgm = this.sound.add("lose",{loop: true}).setVolume(1);

        // this.losebgm.play();

        // this.add.image (320,320,'tryagain')
        console.log('gameOver')
        this.add.image(0,0, 'fail_bg').setOrigin(0,0).setScale(2);
        this.add.image (760,150, 'gameOver').setScale(0.3);
        this.add.image (740,400, 'dragged').setScale(0.8);
        this.add.image (780,700, 'go_caption').setScale(0.25);
        this.add.image (750,800, 'restart').setScale(0.2);

        var spaceDown = this.input.keyboard.addKey('SPACE');

        window.memories = 0
        window.potions = 3

        spaceDown.on('down', function () {
            console.log('Jump to world scene');

            this.player = {};

            this.player.x = 546;
            this.player.y = 463;

            this.scene.start(
                'world',
                 {player: this.player}
                // Optional parameters
            );
        }, 
        this
        );
            

        // this.add.sprite(330, 470, "down").play("down").setScale(2);
    }

    
}