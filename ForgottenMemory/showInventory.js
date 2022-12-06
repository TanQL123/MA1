class showInventory extends Phaser.Scene {

  constructor() {
      super({
          key: 'showInventory',
          active: false
      });
  }

  // incoming data from other scene
  init(data) {
      this.player = data.player
      this.inventory = data.inventory
  }

  preload() {}

  create() {
    this.scene.bringToTop('showInventory');
      // var rect = new Phaser.Geom.Rectangle(0, 0, 640, 50);
      // var graphics = this.add.graphics({
      //     fillStyle: {
      //         color: 0x000000
      //     }
      // });
      // graphics.fillRectShape(rect).setScrollFactor(0)

      // Setup heart and keys but visible to false
      this.potionImg1 = this.add.image (30,30,'potion').setScrollFactor(0).setVisible(false).setScale(1.5);
      this.potionImg2 = this.add.image (80,30,'potion').setScrollFactor(0).setVisible(false).setScale(1.5);
      this.potionImg3 = this.add.image (130,30,'potion').setScrollFactor(0).setVisible(false).setScale(1.5);
      this.potionImg4 = this.add.image (180,30,'potion').setScrollFactor(0).setVisible(false).setScale(1.5);
      this.potionImg5 = this.add.image (230,30,'potion').setScrollFactor(0).setVisible(false).setScale(1.5);

      this.memoryImg1 = this.add.image (30,90,'memory').setScrollFactor(0).setVisible(false).setScale(1.3);
      this.memoryImg2 = this.add.image (80,90,'memory').setScrollFactor(0).setVisible(false).setScale(1.3);
      this.memoryImg3 = this.add.image (130,90,'memory').setScrollFactor(0).setVisible(false).setScale(1.3);
      this.memoryImg4 = this.add.image (30,150,'memory').setScrollFactor(0).setVisible(false).setScale(1.3);
      this.memoryImg5 = this.add.image (80,150,'memory').setScrollFactor(0).setVisible(false).setScale(1.3);
      this.memoryImg6 = this.add.image (130,150,'memory').setScrollFactor(0).setVisible(false).setScale(1.3);
      this.memoryImg7 = this.add.image (30,210,'memory').setScrollFactor(0).setVisible(false).setScale(1.3);
      this.memoryImg8 = this.add.image (80,210,'memory').setScrollFactor(0).setVisible(false).setScale(1.3);
      this.memoryImg9 = this.add.image (130,210,'memory').setScrollFactor(0).setVisible(false).setScale(1.3);
      

      // Recv an event, call the method
      this.events.on('inventory', this.updateScreen, this)
  }

  update() {
  }

  updateScreen(data) {
       console.log('Received event inventory', data)

       switch ( data.potion ) {

          case 5: 
            this.potionImg1.setVisible(true)
            this.potionImg2.setVisible(true)
            this.potionImg3.setVisible(true)
            this.potionImg4.setVisible(true)
            this.potionImg5.setVisible(true)
            break;

          case 4: 
            this.potionImg1.setVisible(true)
            this.potionImg2.setVisible(true)
            this.potionImg3.setVisible(true)
            this.potionImg4.setVisible(true)
            this.potionImg5.setVisible(false)
            break;

          case 3: 
              this.potionImg1.setVisible(true)
              this.potionImg2.setVisible(true)
              this.potionImg3.setVisible(true)
              this.potionImg4.setVisible(false)
              this.potionImg5.setVisible(false)
              break;

          case 2:
              this.potionImg1.setVisible(true)
              this.potionImg2.setVisible(true)
              this.potionImg3.setVisible(false)
              this.potionImg4.setVisible(false)
              this.potionImg5.setVisible(false)
              break;

          case 1:
              this.potionImg1.setVisible(true)
              this.potionImg2.setVisible(false)
              this.potionImg3.setVisible(false)
              this.potionImg4.setVisible(false)
              this.potionImg5.setVisible(false)
              break;
           
          case 0:
              this.potionImg1.setVisible(false)
              this.potionImg2.setVisible(false)
              this.potionImg3.setVisible(false)
              this.potionImg4.setVisible(false)
              this.potionImg5.setVisible(false)
              break;    

          default:
          break;
      }

      switch ( data.memory ) {

        case 9:
          this.memoryImg1.setVisible(true)
          this.memoryImg2.setVisible(true)
          this.memoryImg3.setVisible(true)
          this.memoryImg4.setVisible(true)
          this.memoryImg5.setVisible(true)
          this.memoryImg6.setVisible(true)
          this.memoryImg7.setVisible(true)
          this.memoryImg8.setVisible(true)
          this.memoryImg9.setVisible(true)
          break;  
        
        case 8:
            this.memoryImg1.setVisible(true)
            this.memoryImg2.setVisible(true)
            this.memoryImg3.setVisible(true)
            this.memoryImg4.setVisible(true)
            this.memoryImg5.setVisible(true)
            this.memoryImg6.setVisible(true)
            this.memoryImg7.setVisible(true)
            this.memoryImg8.setVisible(true)
            this.memoryImg9.setVisible(false)
            break;

          case 7:
              this.memoryImg1.setVisible(true)
              this.memoryImg2.setVisible(true)
              this.memoryImg3.setVisible(true)
              this.memoryImg4.setVisible(true)
              this.memoryImg5.setVisible(true)
              this.memoryImg6.setVisible(true)
              this.memoryImg7.setVisible(true)
              this.memoryImg8.setVisible(false)
              this.memoryImg9.setVisible(false)
              break;
          
          case 6:
            this.memoryImg1.setVisible(true)
            this.memoryImg2.setVisible(true)
            this.memoryImg3.setVisible(true)
            this.memoryImg4.setVisible(true)
            this.memoryImg5.setVisible(true)
            this.memoryImg6.setVisible(true)
            this.memoryImg7.setVisible(false)
            this.memoryImg8.setVisible(false)
            this.memoryImg9.setVisible(false)
              break;
              
          case 5:
            this.memoryImg1.setVisible(true)
            this.memoryImg2.setVisible(true)
            this.memoryImg3.setVisible(true)
            this.memoryImg4.setVisible(true)
            this.memoryImg5.setVisible(true)
            this.memoryImg6.setVisible(false)
            this.memoryImg7.setVisible(false)
            this.memoryImg8.setVisible(false)
            this.memoryImg9.setVisible(false)
              break;

          case 4:
            this.memoryImg1.setVisible(true)
            this.memoryImg2.setVisible(true)
            this.memoryImg3.setVisible(true)
            this.memoryImg4.setVisible(true)
            this.memoryImg5.setVisible(false)
            this.memoryImg6.setVisible(false)
            this.memoryImg7.setVisible(false)
            this.memoryImg8.setVisible(false)
            this.memoryImg9.setVisible(false)
              break;    

          case 3:
            this.memoryImg1.setVisible(true)
            this.memoryImg2.setVisible(true)
            this.memoryImg3.setVisible(true)
            this.memoryImg4.setVisible(false)
            this.memoryImg5.setVisible(false)
            this.memoryImg6.setVisible(false)
            this.memoryImg7.setVisible(false)
            this.memoryImg8.setVisible(false)
            this.memoryImg9.setVisible(false)
              break;    

          case 2:
            this.memoryImg1.setVisible(true)
            this.memoryImg2.setVisible(true)
            this.memoryImg3.setVisible(false)
            this.memoryImg4.setVisible(false)
            this.memoryImg5.setVisible(false)
            this.memoryImg6.setVisible(false)
            this.memoryImg7.setVisible(false)
            this.memoryImg8.setVisible(false)
            this.memoryImg9.setVisible(false)
              break;  
              
          case 1: 
          this.memoryImg1.setVisible(true)
          this.memoryImg2.setVisible(false)
          this.memoryImg3.setVisible(false)
          this.memoryImg4.setVisible(false)
          this.memoryImg5.setVisible(false)
          this.memoryImg6.setVisible(false)
          this.memoryImg7.setVisible(false)
          this.memoryImg8.setVisible(false)
          this.memoryImg9.setVisible(false)
              break; 
          default: 
              break;
      }
      
  }
}