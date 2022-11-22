class room1 extends Phaser.Scene {

    constructor() {
        super({ key: 'room1' });
        
        // Put global variable here
    }


    // init(data) {
    //     this.player = data.player
    // }

    preload() {

        this.load.tilemapTiledJSON("room1","assets/room1.tmj");

    
        this.load.image("Pipoya", "assets/pipoya.png");

    }

    create() {
        console.log('*** room1 scene');
        
        let map = this.make.tilemap({ key: "room1" });

    let pipoyaTiles = map.addTilesetImage("pipoya", "Pipoya");

    let tilesArray = [pipoyaTiles]

    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.bottom_decoLayer = map.createLayer('bottom_decoLayer',tilesArray,0,0);
    this.borderLayer = map.createLayer("borderLayer",tilesArray,0,0);
    this.top_decoLayer = map.createLayer('top_decoLayer',tilesArray,0,0);

    var inside = map.findObject("objLayer_1",(obj) => obj.name === "inRoom1");
    var outside = map.findObject('objLayer_2',(obj)=> obj.name ==="outRoom1")

    this.time.addEvent({
        delay: 1000,
        callback: this.moveDownUp,
        callbackScope: this,
        loop: false,
      });
    
    this.cursors =this.input.keyboard.createCursorKeys();
    this.player= this.physics.add.sprite(inside.x, inside.y,'girl').play("girl_right")
    this.memory = this.physics.add.sprite(885, 544, "memory").play("memory_floating");
    this.memory = this.physics.add.sprite(912, 290, "memory").play("memory_floating");
    this.memory = this.physics.add.sprite(112, 128, "memory").play("memory_floating");
    this.enemy = this.physics.add.sprite(823, 864, "enemy").play("enemy_frontback");
    window.player = this.player

    this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.9 )


    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    this.borderLayer.setCollisionByExclusion(-1, true)

    this.physics.add.collider(this.player,this.borderLayer);

    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player);

    // this.physics.add.overlap(this.player, this.memory, collectMemory, null, this);
    }

    update() {

        if (this.player.x > 858 && this.player.x < 912 && this.player.y < 160 && this.player.y > 126) {
            console.log("Jump to world")
            this.world();
          }

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
    } /////////////////end of update////////////////////

    //Function to jump to world
  world(player, tile) {
    console.log("world,function")
    this.scene.start("world")
  }

   moveDownUp() {
  console.log("moveDownUp");
  this.tweens.timeline({
    targets: this.enemy,
    ease: "Linear",
    loop: -1, // loop forever
    duration: 3000,
    tweens: [
      {
        y: 896,
      },
      {
        y: 864,
      },
    ],
  });
}

// collectMemory (player, memory)

// {
//     memory.disableBody(true, true);

//     //shaking screen effects
//     this.cameras.main.shake(300);
    
// }

}  //////////// end of class world ////////////////////////

