  class Paladin extends Character {
	constructor(name = 'Ulder', hp = 16, mana = 160, dmg = 3, status = 'playing') {
		super(name, hp, mana, dmg,status);
	}

	healingLighting = (victim) => {
		victim.hp = victim.hp - 4;
		this.hp = this.hp + 5;
		this.mana = this.mana -40;
		console.log(`${this.name} utilise Healing Lighting ! Il gagne 5 hp mais perd 40 pts de mana. Il a maintenant ${this.hp} points de vie et ${this.mana} points de mana. Cette attaque inflige 4 dmg à ${victim.name}. ${victim.name} a maintenant ${victim.hp} points de vie restants.`);
	}
}