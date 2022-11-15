class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

preload() {
    this.load.spritesheet('girl', 'assets/girl_spritesheet.png',{ frameWidth:32, frameHeight:64 });
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
}


}