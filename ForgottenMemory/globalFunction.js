////////////////////////////////////////////////////////
//
// access this function using updateInventory.call(this)
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function updateInventory() {
    console.log("*** updateInventory()")
    // Emit events showInventory
    this.inventory = {}
    this.inventory.potion = window.potions
    this.inventory.memory = window.memories
  
    console.log('*** updateInventory() Emit event', this.inventory)
    this.invEvent = (event, data) =>  { this.scene.get('showInventory').events.emit(event, data); }
    this.invEvent("inventory", this.inventory);
  }
  
  ////////////////////////////////////////////////////////
  //
  // access this function using guardCaught
  // Uses a JS function to prevent repeated codes
  // 
  ///////////////////////////////////////////////////////
  function enemyAttack(player,enemy) {
      console.log("*** enemyAttack: attack by enemy");

      this.hurtSound = this.sound.add("gasp").setVolume(0.3);
      this.collectSound = this.sound.add('collect').setVolume(0.5)
  
    //play sound
    console.log('play sound')
    this.hurtSound.play();
  
      // Shake screen
    this.cameras.main.shake(150);
  
      window.potions--
      enemy.disableBody(false, true);
      //this.updateInventory()
      updateInventory.call(this)
  
    if (window.potions == 0){
      this.scene.start("gameOver");
      // this.loseSound.play();
    }
  }

function collectPotion(player,potion) {
    console.log("*** collectPotion: collect a potion");

    //play sound
    this.collectSound.play();

    // Shake screen
//   this.cameras.main.shake(150);

    window.potions++
    potion.disableBody(false, true);
    //this.updateInventory()
    updateInventory.call(this)

  // if (window.heart == 0){
  //   this.scene.start("gameOver");
  //   this.loseSnd.play();
  // }
}