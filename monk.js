class Monk extends Character {
	constructor(name = 'Moana', hp = 8, mana = 200, dmg = 2,status = 'playing') {
		super(name, hp, mana, dmg,status);
	}

	phoenix = () => {
		this.hp = this.hp + 8;
		this.mana = this.mana - 25;
		console.log(`${this.name} utilise Phoenix ! Comme cet oiseau légendaire il renait de ses cendres et gagne gagne 8 points de vie mais perd 25 points de mana. Il a maintenant ${this.hp} points de vie et ${this.mana} points de mana.`);
	}
}