class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });

    // Global variable
  }
    //incoming data from scene below
    init(data) {
      this.player = data.player
    }


  preload() {

    this.load.tilemapTiledJSON("main","assets/main.tmj");

    this.load.image("Pipoya", "assets/pipoya.png");
    
  }

  create() {
    console.log("*** world");

    this.collectSound = this.sound.add('collect').setVolume(0.5);

    this.scene.launch ('showInventory');

    // Call to update inventory
    this.time.addEvent({
      delay: 500,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
      });

    let map = this.make.tilemap({ key: "main" });

    let pipoyaTiles = map.addTilesetImage("pipoya", "Pipoya");

    let tilesArray = [pipoyaTiles]

    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.borderLayer = map.createLayer("borderLayer",tilesArray,0,0);
    this.decoLayer = map.createLayer("decoLayer",tilesArray,0,0);
    
    this.cursors =this.input.keyboard.createCursorKeys();
    this.player= this.physics.add.sprite(this.player.x, this.player.y, 'girl').play("girl_down")
    this.potion1 = this.physics.add.sprite(746, 448, "potion").play("potion_floating");
    this.potion2 = this.physics.add.sprite(80, 800, "potion").play("potion_floating");
    this.potion3 = this.physics.add.sprite(80, 320, "potion").play("potion_floating");
    this.potion4 = this.physics.add.sprite(720, 96, "potion").play("potion_floating");
    this.potion5 = this.physics.add.sprite(944, 928, "potion").play("potion_floating");
    window.player = this.player;

    this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.9 )

    this.physics.add.overlap(this.player, this.potion1, collectPotion, null, this);
    this.physics.add.overlap(this.player, this.potion2, collectPotion, null, this);
    this.physics.add.overlap(this.player, this.potion3, collectPotion, null, this);
    this.physics.add.overlap(this.player, this.potion4, collectPotion, null, this);
    this.physics.add.overlap(this.player, this.potion5, collectPotion, null, this);

    

    if (window.potion1 != false) {
      this.potion1.setVisible(true)
    } else {
      this.potion1.disableBody(true,true)
    }

    if (window.potion2 != false) {
      this.potion2.setVisible(true)
    } else {
      this.potion2.disableBody(true,true)
    }

    if (window.potion3 != false) {
      this.potion3.setVisible(true)
    } else {
      this.potion3.disableBody(true,true)
    }

    if (window.potion4 != false) {
      this.potion4.setVisible(true)
    } else {
      this.potion4.disableBody(true,true)
    }

    if (window.potion5 != false) {
      this.potion5.setVisible(true)
    } else {
      this.potion5.disableBody(true,true)
    }

    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    this.borderLayer.setCollisionByExclusion(-1, true)

    var room1 = map.findObject("objLayer_room1",(obj) => obj.name === "toRoom1");
    var room2 = map.findObject("objLayer_room2",(obj) => obj.name === "toRoom2");
    var room3 = map.findObject("objLayer_room3",(obj) => obj.name === "toRoom3");

    // this.player= this.physics.add.sprite(room1.x, room1.y,'girl').play("girl_right")
    // this.player= this.physics.add.sprite(room2.x, room2.y,'girl').play("girl_left")
    // this.player= this.physics.add.sprite(room3.x, room3.y,'girl').play("girl_left")

    this.physics.add.collider(this.player,this.borderLayer);

    this.physics.world.bounds.width = this.groundLayer. width;
    this.physics.world.bounds.height = this.groundLayer. height;

    this.player.setCollideWorldBounds(true);

    this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

  update() {

    if (this.player.x > 880 && this.player.x < 944 && this.player.y < 274 && this.player.y > 186) {
      console.log("Jump to room1")
      this.room1();
    }

    if (this.player.x > 109 && this.player.x < 181 && this.player.y < 533 && this.player.y > 448) {
      console.log("Jump to room2")
      this.room2();
    }

    if (this.player.x > 624 && this.player.x < 685 && this.player.y < 928 && this.player.y > 864) {
      console.log("Jump to room3")
      this.room3();
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
  } /////////////////// end of update //////////////////////////////

  //Function to jump to room1
  room1(player, tile) {
    console.log("room1,function")
    this.scene.start("room1")
  }

  //Function to jump to room2
    room2(player, tile) {
      console.log("room2,function")
      this.scene.start("room2")
    }

  //Function to jump to room3
  room3(player, tile) {
    console.log("room3,function")
    this.scene.start("room3")
  }

  //Collect potion
  collectPotion1(player,potion) {
    console.log('collect potion')
    potion.disableBody (true,true)
    window.potion1 = false

    //play Sound
    // this.collectSound.play();
  }

  collectPotion2(player,potion) {
    console.log('collect potion')
    potion.disableBody (true,true)
    window.potion2 = false
  }

  collectPotion3(player,potion) {
    console.log('collect potion')
    potion.disableBody (true,true)
    window.potion3 = false
  }

  collectPotion4(player,potion) {
    console.log('collect potion')
    potion.disableBody (true,true)
    window.potion4 = false
  }

  collectPotion5(player,potion) {
    console.log('collect potion')
    potion.disableBody (true,true)
    window.potion5 = false
  }

} //////////// end of class world ////////////////////////
