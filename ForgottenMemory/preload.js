class preload extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preload' });
    }

preload() {
    this.load.spritesheet('girl', 'assets/girl_spritesheet.png',{ frameWidth:32, frameHeight:64 });
    this.load.spritesheet('enemy', 'assets/enemy.png',{ frameWidth:32, frameHeight:64 });
    this.load.spritesheet('memory', 'assets/memory.png',{ frameWidth:32, frameHeight:32 });
    this.load.spritesheet('potion', 'assets/flower.png',{ frameWidth:32, frameHeight:32 });

    this.load.image('background','assets/intro_bg.png');
    this.load.image('fail_bg','assets/failed.png');

    this.load.image('arrowkey','assets/arrowkey.png');

    this.load.image('hooray','assets/victory.png');
    this.load.image('dragged','assets/enemy_drag.png');

    this.load.image('cloud1','assets/cloud_1.png');
    this.load.image('cloud2','assets/cloud_2.png');
    this.load.image('cloud3','assets/cloud_3.png');
    this.load.image('cloud4','assets/cloud_4.png');
    this.load.image('cloud5','assets/cloud_5.png');

    this.load.image('title','assets/copywriting-01.png');
    this.load.image('title_spacebar','assets/copywriting-02.png');
    this.load.image('spacebar','assets/copywriting-03.png');
    this.load.image('howToPlay','assets/copywriting-04.png');
    this.load.image('arrowKey','assets/copywriting-05.png');
    this.load.image('memoryPieces','assets/copywriting-06.png');
    this.load.image('mp_text','assets/copywriting-07.png');
    this.load.image('ak_text','assets/copywriting-08.png');
    this.load.image('collect','assets/copywriting-09.png');
    this.load.image('avoid','assets/copywriting-10.png');
    this.load.image('a_text','assets/copywriting-11.png');
    this.load.image('movement','assets/copywriting-12.png');
    this.load.image('monster','assets/copywriting-13.png');
    this.load.image('gameOver','assets/copywriting-14.png');
    this.load.image('go_caption','assets/copywriting-15.png');
    this.load.image('restart','assets/copywriting-16.png');
    this.load.image('victory','assets/copywriting-17.png');
    this.load.image('v_caption','assets/copywriting-18.png');
    this.load.image('mainMenu','assets/copywriting-19.png');

    this.load.image('v_caption2','assets/Writing-16.png');
    this.load.image('text_1','assets/Writing-17.png');
    this.load.image('text_2','assets/Writing-18.png');
    this.load.image('text_3','assets/Writing-19.png');
    this.load.image('text_4','assets/Writing-20.png');

    this.load.audio('bgm','assets/Enchanted - Emotional Fantasy Music [FREE DOWNLOAD].mp3');
    this.load.audio('gasp','assets/Girl Gasping FREE Sound Effect.mp3');
    this.load.audio('collect','assets/collect_sound.mp3');
    this.load.audio('lose','assets/Misty-Bog_Looping.mp3');
    
}
    create () {

        console.log("preload")
        // this.add.text(10,500, 'Animation labs, press spacebar to continue', 
        //     { font: '24px Courier', fill: '#ffffff' });
        this.bgm = this.sound.add("bgm",{loop: true}).setVolume(1);

        this.bgm.play();

        this.add.image(0,0, 'background').setOrigin(0,0).setScale(2);
        this.add.image(200,300,'cloud1').setScale(0.8);
        this.add.image(1000,530,'cloud4').setScale(0.6);
        this.add.image(750,600, 'title').setScale(0.5);
        this.add.image(710,800, 'title_spacebar').setScale(0.2);
        

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            this.scene.start("intro1");
            }, this );

    this.anims.create({
        key:'girl_right',
        frames:this.anims.generateFrameNumbers('girl',
        { start:9 , end:11 }),
        frameRate:5,
        repeat:-1
    });
  
    this.anims.create({
        key:'girl_up',
        frames:this.anims.generateFrameNumbers('girl',
        { start:3, end:5 }),
        frameRate:5,
        repeat:-1
    });
  
    this.anims.create({
        key:'girl_down',
        frames:this.anims.generateFrameNumbers('girl',
        { start:6, end:8 }),
        frameRate:5,
        repeat:-1
    });
  
    this.anims.create({
        key:'girl_left',
        frames:this.anims.generateFrameNumbers('girl',
        { start:0, end:2 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'enemy_frontback',
        frames:this.anims.generateFrameNumbers('enemy',
        { start:2, end:3 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'enemy_left',
        frames:this.anims.generateFrameNumbers('enemy',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'enemy_right',
        frames:this.anims.generateFrameNumbers('enemy',
        { start:4, end:5 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'potion_floating',
        frames:this.anims.generateFrameNumbers('potion',
        { start:0, end:1 }),
        frameRate:3,
        repeat:-1
    });

    this.anims.create({
        key:'memory_floating',
        frames:this.anims.generateFrameNumbers('memory',
        { start:0, end:1 }),
        frameRate:5,
        repeat:-1
    });
}


}