
class victory extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'victory' });
    }

    preload() {
        this.load.image('victory','assets/copywriting-17.png');
        this.load.image('v_caption','assets/copywriting-18.png');
        this.load.image('mainMenu','assets/copywriting-19.png');
        this.load.image('hooray','assets/victory.png');

    } // end of preload //

    create () {

        this.loseSound = this.sound.add('lose').setVolume(0.5)

        // this.add.image (320,320,'tryagain')
        console.log('victory')
        this.add.image(0,0, 'background').setOrigin(0,0).setScale(2);

        this.potion = this.physics.add.sprite(650, 250, "potion").play("potion_floating").setScale(3);

        this.add.image (710,150, 'victory').setScale(0.3);
        this.add.image (710,400, 'hooray').setScale(0.7);
        this.add.image (710,680, 'v_caption2').setScale(0.25);
        this.add.image (710,850, 'mainMenu').setScale(0.2);

        this.potion = this.physics.add.sprite(600, 500, "potion").play("potion_floating").setScale(2);
        this.potion = this.physics.add.sprite(900, 300, "potion").play("potion_floating").setScale(4);
        this.potion = this.physics.add.sprite(800, 450, "potion").play("potion_floating").setScale(1);
        this.potion = this.physics.add.sprite(550, 350, "potion").play("potion_floating").setScale(1);

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            this.scene.start("preload");
            }, 
            this );
            

        // this.add.sprite(330, 470, "down").play("down").setScale(2);
    }

    
}