class preload extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preload' });
    }

preload() {
    this.load.spritesheet('girl', 'assets/girl_spritesheet.png',{ frameWidth:32, frameHeight:64 });
    this.load.spritesheet('enemy', 'assets/enemy.png',{ frameWidth:32, frameHeight:64 });
    this.load.spritesheet('memory', 'assets/memory.png',{ frameWidth:32, frameHeight:32 });
    this.load.spritesheet('potion', 'assets/potion.png',{ frameWidth:32, frameHeight:32 });
}
    create () {

        console.log("animationScene")
        this.add.text(10,500, 'Animation labs, press spacebar to continue', 
            { font: '24px Courier', fill: '#ffffff' });

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            this.scene.start("world");
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
        frameRate:1,
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