class room3 extends Phaser.Scene {

    constructor() {
        super({ key: 'room3' });
        
        // Put global variable here
    }


    // init(data) {
    //     this.player = data.player
    // }

    preload() {

        this.load.tilemapTiledJSON("room3","assets/room3.tmj");

    
        this.load.image("Pipoya", "assets/pipoya.png");

    }

    create() {
        console.log('*** room3 scene');
        
        let map = this.make.tilemap({ key: "room3" });

    let pipoyaTiles = map.addTilesetImage("pipoya", "Pipoya");

    let tilesArray = [pipoyaTiles]

    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.borderLayer = map.createLayer("borderLayer",tilesArray,0,0);
    this.decoLayer = map.createLayer('decoLayer',tilesArray,0,0);

    this.time.addEvent({
        delay: 1000,
        callback: this.moveDownUp,
        callbackScope: this,
        loop: false,
      });

      this.time.addEvent({
        delay: 1000,
        callback: this.moveRightLeft,
        callbackScope: this,
        loop: false,
      });

    var inside = map.findObject("objLayer_1",(obj) => obj.name === "inRoom3");
    var outside = map.findObject("objLayer_2",(obj) => obj.name === "outRoom3");
    
    this.cursors =this.input.keyboard.createCursorKeys();
    this.player= this.physics.add.sprite(inside.x, inside.y,'girl').play("girl_left")
    this.memory = this.physics.add.sprite(888, 130, "memory").play("memory_floating");
    this.memory = this.physics.add.sprite(871, 899, "memory").play("memory_floating");
    this.memory = this.physics.add.sprite(248, 877, "memory").play("memory_floating");
    this.enemy = this.physics.add.sprite(144, 572, "enemy").play("enemy_frontback");
    // this.enemy2 = this.physics.add.sprite(362, 467, "enemy").play("enemy_frontback");
    // this.enemy3 = this.physics.add.sprite(711, 213, "enemy").play("enemy_frontback");
    window.player = this.player

    this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.9 )


    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    this.borderLayer.setCollisionByExclusion(-1, true)

    this.physics.add.collider(this.player,this.borderLayer);

    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player);
    }

    update() {

        if (this.player.x > 144 && this.player.x < 208 && this.player.y < 384 && this.player.y > 346) {
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
    }

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
      duration: 5000,
      tweens: [
        {
          y: 899,
        },
        {
          y: 572,
        },
      ],
    });
  }

   moveRightLeft() {
  console.log("moveDownUp");
  this.tweens.timeline({
    targets: this.enemy3,
    loop: -1, // loop forever
    ease: "Linear",
    duration: 1000,
    tweens: [
      {
        x: 597,
      },
      {
        x: 362,
      },
    ],
  });
}
  
  moveDownUp() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.enemy3,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 5000,
      tweens: [
        {
          y: 323,
        },
        {
          y: 213,
        },
      ],
    });
  }
}  //////////// end of class world ////////////////////////

