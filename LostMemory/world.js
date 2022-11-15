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
    console.log("*** world scene");

    let map = this.make.tilemap({ key: "main" });

    let pipoyaTiles = map.addTilesetImage("pipoya", "Pipoya");

    let tilesArray = [pipoyaTiles, plantTiles, villageTiles]

    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.borderLayer = map.createLayer("borderLayer",tilesArray,0,0);
    this.decoLayer = map.createLayer("decoLayer",tilesArray,0,0);
    
    this.cursors =this.input.keyboard.createCursorKeys();
    this.player= this.physics.add.sprite(200,200,'girl').play("girl_down")
    window.player = this.player;

    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    this.borderLayer.setCollisionByExclusion(-1, true)
    this.buildingLayer.setCollisionByExclusion(-1, true)

    // var end = map.findObject("objectLayer",(obj) => obj.name === "end");

    this.physics.add.collider(this.player,this.borderLayer);
    this.physics.add.collider(this.player,this.buildingLayer);
    this.physics.add.collider(this.player,this.decoLayer)

    this.player.setCollideWorldBounds(true);

    this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

  update() {

    if (this.player.x > 464 && this.player.x < 528 && this.player.y < 709 && this.player.y > 672) {
      console.log("Jump to room1")
      this.room1();
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
} //////////// end of class world ////////////////////////
