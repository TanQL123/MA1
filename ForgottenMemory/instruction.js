class instruction extends Phaser.Scene {

    constructor() {
        super({
            key: 'instruction'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here

        // Preload any images here
        this.load.image('background','assets/intro_bg.png');
        this.load.image('howToPlay','assets/copywriting-04.png');
        this.load.image('spacebar','assets/copywriting-03.png');
        this.load.image('arrowKey','assets/copywriting-05.png');
        this.load.image('ak_text','assets/copywriting-08.png');
        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** instruction scene');

        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

        //this.music.play()
        //window.music = this.music


        // Add image and detect spacebar keypress
        //this.add.image(0, 0, 'main').setOrigin(0, 0);
        this.add.image(0,0, 'background').setOrigin(0,0).setScale(2);
        this.add.image(710,100, 'howToPlay').setScale(0.3);
        this.add.image(720,250, 'movement').setScale(0.2);
        this.add.image(730,350, 'arrowkey').setScale(0.6);
        this.add.image(710,800, 'spacebar').setScale(0.2);
        this.add.image(710,530, 'arrowKey').setScale(0.2);
        this.add.image(690,750, 'ak_text').setScale(0.25);


        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            // console.log('Jump to world scene');

            this.scene.start('instruction2',
                // Optional parameters
                {

                }
            );
        }, this);


        // Add any text in the main page
        // this.add.text(90, 600, 'Press spacebar to continue', {
        //     font: '30px Courier',
        //     fill: '#FFFFFF'
        // });


        // Create all the game animations here

    }


}