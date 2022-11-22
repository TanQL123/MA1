class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });

    // Global variable
  }

  preload() {

    this.load.tilemapTiledJSON("main","assets/main.tmj");

    this.load.image("Pipoya", "assets/pipoya.png");
    
  }

  create() {
    console.log("*** world");

    let map = this.make.tilemap({ key: "main" });

    let pipoyaTiles = map.addTilesetImage("pipoya", "Pipoya");

    let tilesArray = [pipoyaTiles]

    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.borderLayer = map.createLayer("borderLayer",tilesArray,0,0);
    this.decoLayer = map.createLayer("decoLayer",tilesArray,0,0);
    
    this.cursors =this.input.keyboard.createCursorKeys();
    this.player= this.physics.add.sprite(200,200,'girl').play("girl_down")
    this.potion = this.physics.add.sprite(746, 448, "potion").play("potion_floating");
    this.potion = this.physics.add.sprite(80, 800, "potion").play("potion_floating");
    this.potion = this.physics.add.sprite(80, 320, "potion").play("potion_floating");
    this.potion = this.physics.add.sprite(720, 96, "potion").play("potion_floating");
    this.potion = this.physics.add.sprite(944, 928, "potion").play("potion_floating");
    window.player = this.player;

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

} //////////// end of class world ////////////////////////
