class Fighter extends Character{
  constructor(name="Grace",hp=12,dmg=4,mana=40,status='playing'){
    super(name,hp,dmg,status);
  }
darkVision = () => {
  // dmg =5,mana -20
  victim.hp = victim.hp -4;
  this.mana = this.mana -20;
  console.log(`${this.name} utilise sa DarkVision ! ça fait mal !`)
}
}




//(name,hp,dmg,mana,status)