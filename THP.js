import Character from "./character.js";
class THP extends Character {
    constructor() {
        super("THP", 100, 0, 100);
    }

    cerveauEnBouillie(players) {
        console.log(`${this.name} utilise Cerveau en Bouillie et inflige 100 points de dégâts à tous les joueurs !`);
        players.forEach(player => {
            if (player !== this && player.hp > 0) {
                player.takeDamage(100);
            }
        });
    }
}
export default THP;