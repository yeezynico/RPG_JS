import Character from "./character.js";

class Paladin extends Character {
    constructor() {
        super("Uldder", 16, 3, 160);
    }

    dealDamage(victim) {
        if (this.hp > 0 && victim.hp > 0) {
            const damage = this.dmg;
            victim.takeDamage(damage);
            return damage;
        }
        return 0;
    }

    healingLightning(victim) {
        if (this.mana >= 40) {
            this.hp += 5;
            victim.takeDamage(4);
            this.mana -= 40;
            console.log(`${this.name} utilise Healing Lightning sur ${victim.name} !`);
            return 4; // Renvoyer les dégâts infligés
        } else {
            console.log("Pas assez de mana pour utiliser Healing Lightning.");
            return 0; // Renvoyer 0 si l'action échoue
        }
    }
}

export default Paladin;