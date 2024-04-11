import Character from "./character.js";

class Assassin extends Character {
    constructor() {
        super("Carl", 6, 6, 20);
    }

    dealDamage(victim) {
        if (this.hp > 0 && victim.hp > 0) {
            const damage = this.dmg;
            victim.takeDamage(damage);
            return damage;
        }
        return 0;
    }

    shadowHit(target) {
        if (this.mana >= 20) {
            target.takeDamage(7);
            this.mana -= 20;
            console.log(`${this.name} utilise Shadow Hit sur ${target.name} et inflige 7 points de dégâts !`);
            return 7; // Renvoyer les dégâts infligés
        } else {
            console.log("Pas assez de mana pour utiliser Shadow Hit.");
            return 0; // Renvoyer 0 si l'action échoue
        }
    }
}

export default Assassin;
