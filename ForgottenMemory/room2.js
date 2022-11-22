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
        
        let map = this.make.tilemap({ key: "room2" });

    let pipoyaTiles = map.addTilesetImage("pipoya", "Pipoya");

    let tilesArray = [pipoyaTiles]

    this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
    this.borderLayer = map.createLayer("borderLayer",tilesArray,0,0);
    this.top_decoLayer = map.createLayer('top_decoLayer',tilesArray,0,0);

    var inside = map.findObject("objLayer_1",(obj) => obj.name === "inRoom2");
    var outside = map.findObject("objLayer_2",(obj) => obj.name === "outRoom2");
    
    this.cursors =this.input.keyboard.createCursorKeys();
    this.player= this.physics.add.sprite(inside.x, inside.y,'girl').play("girl_down")
    this.memory = this.physics.add.sprite(704, 259, "memory").play("memory_floating");
    this.memory = this.physics.add.sprite(920, 899, "memory").play("memory_floating");
    this.memory = this.physics.add.sprite(165, 508, "memory").play("memory_floating");
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
        this.player.setVelocity(0);
    }
    }

    //Function to jump to world
  world(player, tile) {
    console.log("world,function")
    this.scene.start("world")
  }

}  //////////// end of class world ////////////////////////

