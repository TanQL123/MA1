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

    // var start = map.findObject("objectLayer",(obj) => obj.name === "start");
    
    this.cursors =this.input.keyboard.createCursorKeys();
    this.player= this.physics.add.sprite(start.x, start.y,'girl').play("girl_up")
    window.player = this.player


    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    this.borderLayer.setCollisionByExclusion(-1, true)

    this.physics.add.collider(this.player,this.borderLayer);

    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player);
    }

    update() {

        if (this.player.x > 580 && this.player.x < 673 && this.player.y < 765 && this.player.y > 736) {
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

}
