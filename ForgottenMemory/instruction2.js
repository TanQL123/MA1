class instruction2 extends Phaser.Scene {

    constructor() {
        super({
            key: 'instruction2'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here

        // Preload any images here
        this.load.image('background','assets/intro_bg.png');
        this.load.image('howToPlay','assets/copywriting-04.png');
        this.load.image('spacebar','assets/copywriting-03.png');
        this.load.image('memoryPieces','assets/copywriting-06.png');
        this.load.image('mp_text','assets/copywriting-07.png');
        this.load.image('collect','assets/copywriting-09.png');
        this.load.image('avoid','assets/copywriting-10.png');
        this.load.image('a_text','assets/copywriting-11.png');
        this.load.image('monster','assets/copywriting-13.png');
        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** instruction2 scene');

        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

        //this.music.play()
        //window.music = this.music


        // Add image and detect spacebar keypress
        //this.add.image(0, 0, 'main').setOrigin(0, 0);
        this.add.image(0,0, 'background').setOrigin(0,0).setScale(2);
        this.add.image(710,100, 'howToPlay').setScale(0.3);
        this.add.image(710,800, 'spacebar').setScale(0.2);
        this.add.image(650,280, 'collect').setScale(0.2);
        this.add.image(480,580, 'avoid').setScale(0.2);
        this.add.image(320,510, 'memoryPieces').setScale(0.2);
        this.add.image(290,750, 'monster').setScale(0.2);
        this.add.image(875,380, 'mp_text').setScale(0.2);
        this.add.image(945,625, 'a_text').setScale(0.2);

        this.memory = this.physics.add.sprite(300, 280, "memory").play("memory_floating").setScale(4);
        this.enemy = this.physics.add.sprite(300, 600, "enemy").play("enemy_frontback"). setScale(3);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
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


        // Add any text in the main page
        // this.add.text(90, 600, 'Press spacebar to continue', {
        //     font: '30px Courier',
        //     fill: '#FFFFFF'
        // });


        // Create all the game animations here

    }


}