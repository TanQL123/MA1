class room2 extends Phaser.Scene {

    constructor() {
        super({ key: 'room2' });
        
        // Put global variable here
    }


    // init(data) {
    //     this.player = data.player
    // }

    preload() {

        this.load.tilemapTiledJSON("room2","assets/room2.tmj");

    
        this.load.image("Pipoya", "assets/pipoya.png");

    }

    create() {
        console.log('*** room2 scene');

        this.scene.launch('showInventory');

        // Call to update inventory
        this.time.addEvent({
          delay: 500,
          callback: updateInventory,
          callbackScope: this,
          loop: false,
          });
        
        let map = this.make.tilemap({ key: "room2" });

    let pipoyaTiles = map.addTilesetImage("pipoya", "Pipoya");

    let tilesArray = [pipoyaTiles]

    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.borderLayer = map.createLayer("borderLayer",tilesArray,0,0);
    this.top_decoLayer = map.createLayer('top_decoLayer',tilesArray,0,0);

    var inside = map.findObject("objLayer_1",(obj) => obj.name === "inRoom2");
    var outside = map.findObject("objLayer_2",(obj) => obj.name === "outRoom2");

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

      this.time.addEvent({
        delay: 0,
        callback: this.moveDownUp,
        callbackScope: this,
        loop: false,
      });

    this.cursors =this.input.keyboard.createCursorKeys();

    this.player= this.physics.add.sprite(inside.x, inside.y,'girl').play("girl_down")

    this.memory4 = this.physics.add.sprite(704, 259, "memory").play("memory_floating").setVisible(false);
    this.memory5 = this.physics.add.sprite(920, 899, "memory").play("memory_floating").setVisible(false);
    this.memory6 = this.physics.add.sprite(165, 508, "memory").play("memory_floating").setVisible(false);

    this.enemy1 = this.physics.add.sprite(906, 464, "enemy").play("enemy_right");
    this.enemy2 = this.physics.add.sprite(552, 813, "enemy").play("enemy_left");
    this.enemy3 = this.physics.add.sprite(154, 899, "enemy").play("enemy_frontback");

    window.player = this.player

    this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.9 )

    this.physics.add.overlap(this.player, this.memory4, this.collectMemory4, null, this);
    this.physics.add.overlap(this.player, this.memory5, this.collectMemory5, null, this);
    this.physics.add.overlap(this.player, this.memory6, this.collectMemory6, null, this);

    this.physics.add.overlap(this.player, this.enemy1, enemyAttack, null, this);
    this.physics.add.overlap(this.player, this.enemy2, enemyAttack, null, this);
    this.physics.add.overlap(this.player, this.enemy3, enemyAttack, null, this);

    if (window.memory4 != false) {
      this.memory4.setVisible(true)
    } else {
      this.memory4.disableBody(true,true)
    }

    if (window.memory5 != false) {
      this.memory5.setVisible(true)
    } else {
      this.memory5.disableBody(true,true)
    }

    if (window.memory6 != false) {
      this.memory6.setVisible(true)
    } else {
      this.memory6.disableBody(true,true)
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

      if (window.memory4 == false) {
        this.memory4.disableBody(true, true)
      } else {
        this.memory4.setVisible(true)
      }

      if (window.memory5 == false) {
        this.memory5.disableBody(true, true)
      } else {
        this.memory5.setVisible(true)
      }
  
      if (window.memory6 == false) {
        this.memory6.disableBody(true,true)
      } else {
        this.memory6.setVisible(true)
      }

        if (this.player.x > 429 && this.player.x < 464 && this.player.y < 896 && this.player.y > 864) {
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
      player.x = 232;
      player.y = 518;
  
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
          x: 296,
        },
        {
          x: 906,
        },
      ],
    });
  }

  moveRightLeft2() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.enemy2,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 3000,
      tweens: [
        {
          x: 757,
        },
        {
          x: 552,
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
      duration: 4000,
      tweens: [
        {
          y: 651,
        },
        {
          y: 899,
        },
      ],
    });
  }

  //overlap
  collectMemory4(player,memory) {
    window.memory4 = false
    window.memories++
    memory.disableBody(true, true);
    
    //this.updateInventory()
    updateInventory.call(this)

    if (window.memories == 9){
      this.scene.start("victory");
      // this.loseSound.play();
    }
  }
  
  collectMemory5(player,memory) {
    window.memory5 = false
    window.memories++
    memory.disableBody(true, true);
    
    //this.updateInventory()
    updateInventory.call(this)

    if (window.memories == 9){
      this.scene.start("victory");
      // this.loseSound.play();
    }
  }
  
  collectMemory6(player,memory) {
    window.memory6 = false
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
    this.cameras.main.shake(500);
  }

}  //////////// end of class world ////////////////////////

