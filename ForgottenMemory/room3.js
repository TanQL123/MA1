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

        this.scene.launch('showInventory');

        // Call to update inventory
        this.time.addEvent({
          delay: 500,
          callback: updateInventory,
          callbackScope: this,
          loop: false,
          });
        
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
        callback: this.moveDownUp2,
        callbackScope: this,
        loop: false,
      });

      this.time.addEvent({
        delay: 1000,
        callback: this.moveRightLeft,
        callbackScope: this,
        loop: false,
      });

      this.time.addEvent({
        delay: 1000,
        callback: this.moveRightLeft2,
        callbackScope: this,
        loop: false,
      });

    var inside = map.findObject("objLayer_1",(obj) => obj.name === "inRoom3");
    var outside = map.findObject("objLayer_2",(obj) => obj.name === "outRoom3");
    
    this.cursors =this.input.keyboard.createCursorKeys();
    this.player= this.physics.add.sprite(inside.x, inside.y,'girl').play("girl_left")

    this.memory7 = this.physics.add.sprite(888, 130, "memory").play("memory_floating").setVisible(false);
    this.memory8 = this.physics.add.sprite(871, 899, "memory").play("memory_floating").setVisible(false);
    this.memory9 = this.physics.add.sprite(248, 877, "memory").play("memory_floating").setVisible(false);

    this.enemy1 = this.physics.add.sprite(104, 714, "enemy").play("enemy_left");
    this.enemy2 = this.physics.add.sprite(741, 124, "enemy").play("enemy_frontback");
    this.enemy3 = this.physics.add.sprite(461, 232, "enemy").play("enemy_right");
    this.enemy4 = this.physics.add.sprite(598, 913, "enemy").play("enemy_frontback");

    window.player = this.player

    this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.9 )

    this.physics.add.overlap(this.player, this.memory7, this.collectMemory7, null, this);
    this.physics.add.overlap(this.player, this.memory8, this.collectMemory8, null, this);
    this.physics.add.overlap(this.player, this.memory9, this.collectMemory9, null, this);

    this.physics.add.overlap(this.player, this.enemy1, enemyAttack, null, this);
    this.physics.add.overlap(this.player, this.enemy2, enemyAttack, null, this);
    this.physics.add.overlap(this.player, this.enemy3, enemyAttack, null, this);
    this.physics.add.overlap(this.player, this.enemy4, enemyAttack, null, this);

    if (window.memory7 != false) {
      this.memory7.setVisible(true)
    } else {
      this.memory7.disableBody(true,true)
    }

    if (window.memory8 != false) {
      this.memory8.setVisible(true)
    } else {
      this.memory8.disableBody(true,true)
    }

    if (window.memory9 != false) {
      this.memory9.setVisible(true)
    } else {
      this.memory9.disableBody(true,true)
    }

    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    this.borderLayer.setCollisionByExclusion(-1, true)

    this.physics.add.collider(this.player,this.borderLayer);

    this.physics.world.bounds.width = this.groundLayer. width;
    this.physics.world.bounds.height = this.groundLayer. height;

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
      this.player.stop();
        this.player.setVelocity(0);
    }
    }

    //Function to jump to world
    world(player, tile) {
      console.log("world,function")
      player = {};
      player.x = 741;
      player.y = 875;
  
      this.scene.start("world", {player: player})
    }

   moveRightLeft() {
  console.log("moveDownUp");
  this.tweens.timeline({
    targets: this.enemy1,
    loop: -1, // loop forever
    ease: "Linear",
    duration: 6000,
    tweens: [
      {
        x: 408,
      },
      {
        x: 104,
      },
    ],
  });
}

moveRightLeft2() {
  console.log("moveDownUp");
  this.tweens.timeline({
    targets: this.enemy3,
    loop: -1, // loop forever
    ease: "Linear",
    duration: 6000,
    tweens: [
      {
        x: 136,
      },
      {
        x: 461,
      },
    ],
  });
}
  
  moveDownUp() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.enemy2,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 3000,
      tweens: [
        {
          y: 323,
        },
        {
          y: 124,
        },
      ],
    });
  }

    moveDownUp2() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.enemy4,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 5000,
      tweens: [
        {
          y: 425,
        },
        {
          y: 913,
        },
      ],
    });
  }

  //overlap
  collectMemory7(player,memory) {
    window.memory7 = false
    window.memories++
    memory.disableBody(true, true);
    
    //this.updateInventory()
    updateInventory.call(this)

    if (window.memories == 9){
      this.scene.start("victory");
      // this.loseSound.play();
    }
  }
  
  collectMemory8(player,memory) {
    window.memory8 = false
    window.memories++
    memory.disableBody(true, true);
    
    //this.updateInventory()
    updateInventory.call(this)

    if (window.memories == 9){
      this.scene.start("victory");
      // this.loseSound.play();
    }
  }
  
  collectMemory9(player,memory) {
    window.memory9 = false
    window.memories++
    memory.disableBody(true, true);
    
    //this.updateInventory()
    updateInventory.call(this)

    if (window.memories == 9){
      this.scene.start("victory");
      // this.loseSound.play();
    }
  }

  beingAttacked(player,enemy) {
    console.log('hit by enemy')
    this.cameras.main.shake(500);
  }

}  //////////// end of class world ////////////////////////

