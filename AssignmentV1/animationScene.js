
class animationScene extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'animationScene' });
    }

    preload() {

        this.load.spritesheet('girl', 'asset/Girl_spritesheet.png',{ frameWidth:32, frameHeight:64 });
        this.load.tilemapTiledJSON("room1","asset/room1.tmj");

        this.load.image("pipoyas", "asset/pipoya.png");

        
    } // end of preload //

    create (){

    console.log("animationScene")

    let map = this.make.tilemap({ key: "room1" });

    let pipoyaTiles = map.addTilesetImage("pipoya", "pipoyas");

    let tilesArray = [pipoyaTiles]

    this.floor = map.createLayer("Floor",tilesArray,0,0);
    this.stairs = map.createLayer("Stairs",tilesArray,0,0);
    this.a = map.createLayer("a",tilesArray,0,0);
    this.b = map.createLayer("b",tilesArray,0,0);

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

    this.add.sprite(100, 100, 'girl').play('girl_right').setScale(2)
    this.add.sprite(200, 100, 'girl').play('girl_up').setScale(2)
    this.add.sprite(300, 100, 'girl').play('girl_down').setScale(2)
    this.add.sprite(400, 100, 'girl').play('girl_left').setScale(2)

    this.cursors =this.input.keyboard.createCursorKeys();
       this.player= this.physics.add.sprite(0,0,'girl');

   this.player.setCollideWorldBounds(true);
    } 
    // end of create //

    update () {

        if (this.cursors.left.isDown)
        {
           this.player.setVelocityX(-160);
            this.player.anims.play('girl_left',true);
        }
        else if (this.cursors.right.isDown)
        {
           this.player.setVelocityX(160);
            this.player.anims.play('girl_right',true);
        }
        else if (this.cursors.up.isDown)
        {
           this.player.setVelocityY(-160);
            this.player.anims.play('girl_up',true);
        }
        else if (this.cursors.down.isDown)
        {
           this.player.setVelocityY(160);
            this.player.anims.play('girl_down',true);
        }
        else
        {
            this.player.setVelocity(0);
        }
    } // end of update // 
}