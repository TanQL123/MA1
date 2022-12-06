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

        this.load.audio('gasp','assets/Girl Gasping FREE Sound Effect.mp3');
        this.load.audio('collect','assets/collect_sound.mp3');
    
        this.load.image("Pipoya", "assets/pipoya.png");

    }

    create() {
        console.log('*** room1 scene');

        this.collectSound = this.sound.add('collect').setVolume(0.5)

        this.scene.launch('showInventory');

        // Call to update inventory
        this.time.addEvent({
          delay: 500,
          callback: updateInventory,
          callbackScope: this,
          loop: false,
          });
        
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
        delay: 0,
        callback: this.moveDownUp,
        callbackScope: this,
        loop: false,
      });

      this.time.addEvent({
        delay: 0,
        callback: this.moveDownUp2,
        callbackScope: this,
        loop: false,
      });

      this.time.addEvent({
        delay: 0,
        callback: this.moveRightLeft,
        callbackScope: this,
        loop: false,
      });

      this.time.addEvent({
        delay: 0,
        callback: this.moveRightLeft2,
        callbackScope: this,
        loop: false,
      });
    
    this.cursors =this.input.keyboard.createCursorKeys();
    this.player= this.physics.add.sprite(inside.x, inside.y,'girl').play("girl_right")

    this.memory1 = this.physics.add.sprite(885, 544, "memory").play("memory_floating").setVisible(false);
    this.memory2 = this.physics.add.sprite(912, 290, "memory").play("memory_floating").setVisible(false);
    this.memory3 = this.physics.add.sprite(112, 128, "memory").play("memory_floating").setVisible(false);

    this.enemy1 = this.physics.add.sprite(823, 864, "enemy").play("enemy_frontback");
    this.enemy2 = this.physics.add.sprite(200, 301, "enemy").play("enemy_left");
    this.enemy3 = this.physics.add.sprite(690, 707, "enemy").play("enemy_frontback");
    this.enemy4 = this.physics.add.sprite(117, 612, "enemy").play("enemy_right");
    window.player = this.player

    this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.9 )


    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    this.borderLayer.setCollisionByExclusion(-1, true)

    this.physics.add.collider(this.player,this.borderLayer);

    this.physics.world.bounds.width = this.groundLayer. width;
    this.physics.world.bounds.height = this.groundLayer. height;

    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player);

    this.physics.add.overlap(this.player, this.memory1, this.collectMemory1, null, this);
    this.physics.add.overlap(this.player, this.memory2, this.collectMemory2, null, this);
    this.physics.add.overlap(this.player, this.memory3, this.collectMemory3, null, this);

    this.physics.add.overlap(
      this.player, 
      [this.enemy1,this.enemy2, this.enemy3, this.enemy4], 
      enemyAttack, 
      null, 
      this);
    // this.physics.add.overlap(this.player, this.enemy2, enemyAttack, null, this);
    // this.physics.add.overlap(this.player, this.enemy3, enemyAttack, null, this);
    // this.physics.add.overlap(this.player, this.enemy4, enemyAttack, null, this);


    }

    update() {

        if (window.memory1 == false) {
          this.memory1.disableBody(true, true)
        } else {
          this.memory1.setVisible(true)
        }

        if (window.memory2 == false) {
          this.memory2.disableBody(true, true)
        } else {
          this.memory2.setVisible(true)
        }
    
        if (window.memory3 == false) {
          this.memory3.disableBody(true,true)
        } else {
          this.memory3.setVisible(true)
        }

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
      this.player.stop();
        this.player.setVelocity(0);
    }
    } /////////////////end of update////////////////////

    //Function to jump to world
  world(player, tile) {
    console.log("world,function")
    player = {};
    player.x = 815;
    player.y = 241;

    this.scene.start("world", {player: player})
  }

  moveDownUp() {
  console.log("moveDownUp");
  this.tweens.timeline({
    targets: this.enemy1,
    ease: "Linear",
    loop: -1, // loop forever
    duration: 2000,
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

moveDownUp2() {
  console.log("moveDownUp");
  this.tweens.timeline({
    targets: this.enemy3,
    ease: "Linear",
    loop: -1, // loop forever
    duration: 8000,
    tweens: [
      {
        y: 284,
      },
      {
        y: 707,
      },
    ],
  });
}

moveRightLeft() {
  console.log("moveDownUp");
  this.tweens.timeline({
    targets: this.enemy2,
    loop: -1, // loop forever
    ease: "Linear",
    duration: 6000,
    tweens: [
      {
        x: 568,
      },
      {
        x: 200,
      },
    ],
  });
}

moveRightLeft2() {
  console.log("moveDownUp");
  this.tweens.timeline({
    targets: this.enemy4,
    loop: -1, // loop forever
    ease: "Linear",
    duration: 5000,
    tweens: [
      {
        x: 536,
      },
      {
        x: 117,
      },
    ],
  });
}

//overlap
collectMemory1(player,memory) {

  this.collectSound.play();

  window.memory1 = false
  window.memories++
  memory.disableBody(true, true);
  
  //this.updateInventory()
  updateInventory.call(this)

  if (window.memories == 9){
    this.scene.start("victory");
    // this.loseSound.play();
  }
}
collectMemory2(player,memory) {

  this.collectSound.play();

  window.memory2 = false
  window.memories++
  memory.disableBody(true, true);
  
  //this.updateInventory()
  updateInventory.call(this)

  if (window.memories == 9){
    this.scene.start("victory");
    // this.loseSound.play();
  }
}

collectMemory3(player,memory) {

  this.collectSound.play();

  window.memory3 = false
  window.memories++
  memory.disableBody(true, true);
  
  //this.updateInventory()
  updateInventory.call(this)

  if (window.memories == 9){
    this.scene.start("victory");
    // this.loseSound.play();
  }
}

beingAttacked(player,enenmy) {
  console.log('hit by enemy')
 
  // //play sound
  // console.log('play sound')
  // this.hurtSound.play();

  //shake camera
  // console.log('shake screen')
  // this.cameras.main.shake(500);

      //   if (window.potion == 0){
    //     this.scene.start("gameOver");
    //     this.loseSnd.play();

    //   }
}



}  //////////// end of class world ////////////////////////

