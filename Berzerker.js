import Character from "./character.js";
class Berzerker extends Character {
    constructor() {
        super("Draven", 8, 4, 0);
    }

    dealDamage(victim) {
        if (this.hp > 0 && victim.hp > 0) {
            const damage = this.dmg;
            victim.takeDamage(damage);
            return damage;
        }
        return 0;
    }

    rage() {
        this.dmg += 1;
        this.hp -= 1;
        console.log(`${this.name} entre dans une rage furieuse !`);
        return 1; // Renvoyer les dégâts infligés
    }
}
export default Berzerker;