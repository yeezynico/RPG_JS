import Character from "./character.js";

class Fighter extends Character {
    constructor() {
        super("Grace", 12, 4, 40);
    }

    dealDamage(victim) {
        if (this.hp > 0 && victim.hp > 0) {
            const damage = this.dmg;
            victim.takeDamage(damage);
            return damage;
        }
        return 0;
    }

    darkVision(victim) {
        if (this.mana >= 20) {
            victim.takeDamage(5);
            this.mana -= 20;
            console.log(`${this.name} utilise Dark Vision sur ${victim.name} !`);
            return 5; // Renvoyer les dégâts infligés
        } else {
            console.log("Pas assez de mana pour utiliser Dark Vision.");
            return 0; // Renvoyer 0 si l'action échoue
        }
    }
}

export default Fighter;
