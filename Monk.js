import Character from "./character.js";
class Monk extends Character {
    constructor() {
        super("Moana", 8, 2, 200);
    }

    dealDamage(victim) {
        if (this.hp > 0 && victim.hp > 0) {
            const damage = this.dmg;
            victim.takeDamage(damage);
            return damage;
        }
        return 0;
    }

    heal() {
        if (this.mana >= 20) {
            this.hp += 8;
            this.mana -= 20;
            console.log(`${this.name} utilise Heal pour récupérer des points de vie !`);
            return 8; // Renvoyer les points de vie récupérés
        } else {
            console.log("Pas assez de mana pour utiliser Heal.");
            return 0; // Renvoyer 0 si l'action échoue
        }
    }
}
export default Monk;