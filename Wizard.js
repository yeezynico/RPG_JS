import Character from "./character.js";
class Wizard extends Character {
    constructor() {
        super("LeMage", 10, 2, 200);
    }

    dealDamage(victim) {
        if (this.hp > 0 && victim.hp > 0) {
            const damage = this.dmg;
            victim.takeDamage(damage);
            return damage;
        }
        return 0;
    }

    Fireball(target) {
        if (this.mana >= 25) {
            target.takeDamage(7);
            this.mana -= 25;
            console.log(`${this.name} utilise fire ball sur ${target.name} et inflige 7 points de dégâts !`);
            return 7;
        } else {
            console.log("Pas assez de mana pour utiliser Shadow Hit.");
            return 0;
        }

    }

}
export default Wizard;