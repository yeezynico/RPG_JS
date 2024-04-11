import Assassin from "./Assassin.js";
import Berzerker from "./Berzerker.js";
import Fighter from "./Fighter.js";
import Monk from "./Monk.js";
import Paladin from "./Paladin.js";
import THP from "./THP.js";
import Wizard from "./Wizard.js";

class Game {
    constructor() {
        this.players = this.generateRandomPlayers();
        this.turnLeft = 10;
        this.winner = null;
    }

    generateRandomPlayers() {
        const playerTypes = [Fighter, Paladin, Monk, Berzerker, Assassin, Wizard, THP];
        const playerCount = 6; // Nombre total de joueurs

        let players = [];
        for (let i = 0; i < playerCount; i++) {
            const randomPlayerIndex = Math.floor(Math.random() * playerTypes.length);
            const PlayerClass = playerTypes[randomPlayerIndex];
            players.push(new PlayerClass());
        }

        return players;
    }

    startGame() {
        console.log("Le jeu commence!");

        while (this.turnLeft > 0 && !this.winner) {
            this.startTurn();
            this.turnLeft--;
        }

        if (!this.winner) {
            console.log("Fin du jeu ! Aucun gagnant.");
        }
    }

    startTurn() {
        console.log(`C'est le tour ${11 - this.turnLeft}`);

        let shuffledPlayers = this.shuffleArray(this.players);

        shuffledPlayers.forEach(player => {
            if (player.status === "playing") {
                console.log(`C'est à ${player.name} de jouer`);
                let actionIndex = Math.random(); // Génère un nombre aléatoire entre 0 et 1

                // Si actionIndex est inférieur à 0.5, le personnage attaque normalement, sinon il utilise son sort
                if (actionIndex < 0.5) {
                    this.attackRandomTarget(player);
                } else {
                    if (player instanceof Fighter) {
                        let target = this.getRandomTarget(player);
                        console.log(`${player.name} (${player.constructor.name}) utilise darkVision!`);
                        let damage = player.darkVision(target);
                        console.log(`${player.name} inflige ${damage} points de dégâts à ${target.name}!`);
                    } else if (player instanceof Paladin) {
                        let target = this.getRandomTarget(player);
                        console.log(`${player.name} (${player.constructor.name}) utilise healingLightning!`);
                        let damage = player.healingLightning(target);
                        console.log(`${player.name} inflige ${damage} points de dégâts à ${target.name}!`);
                    } else if (player instanceof Monk) {
                        console.log(`${player.name} (${player.constructor.name}) utilise heal!`);
                        let healAmount = player.heal();
                        console.log(`${player.name} se soigne de ${healAmount} points de vie!`);
                    } else if (player instanceof Berzerker) {
                        console.log(`${player.name} (${player.constructor.name}) utilise rage!`);
                        player.rage();
                    } else if (player instanceof Assassin) {
                        let target = this.getRandomTarget(player);
                        console.log(`${player.name} (${player.constructor.name}) utilise shadowHit!`);
                        let damage = player.shadowHit(target);
                        console.log(`${player.name} inflige ${damage} points de dégâts à ${target.name}!`);
                    }
                    else if (player instanceof Wizard) {
                        let target = this.getRandomTarget(player);
                        console.log(`${player.name} (${player.constructor.name}) utilise Fire Ball!`);
                        let damage = player.Fireball(target);
                        console.log(`${player.name} inflige ${damage} points de dégâts à ${target.name}!`);
                    }
                    else if (player instanceof THP) {
                        console.log(`${player.name} (${player.constructor.name}) utilise Cerveau en Bouillie!`);
                        player.cerveauEnBouillie(this.players);
                    }

                }
            }
        });


        this.displayStats();

        if (this.checkWinner()) {
            this.endGame();
        }
    }

    attackRandomTarget(attacker) {
        let aliveTargets = this.players.filter(player => player.status === "playing" && player !== attacker);
        if (aliveTargets.length > 0) {
            let target = aliveTargets[Math.floor(Math.random() * aliveTargets.length)];
            let damage = attacker.dealDamage(target);
            console.log(`${attacker.name} attaque ${target.name} et inflige ${damage} points de dégâts!`);
        }
    }

    displayStats() {
        console.log("Statistiques des personnages :");
        this.players.forEach(player => {
            console.log(`${player.name} : HP=${player.hp}`);
        });
    }

    checkWinner() {
        let alivePlayers = this.players.filter(player => player.status === "playing");
        if (alivePlayers.length === 1) {
            this.winner = alivePlayers[0];
            return true;
        }
        return false;
    }

    endGame() {
        console.log(`Fin du jeu ! ${this.winner.name} remporte la partie !`);
        this.turnLeft = 0; // Met fin immédiatement au jeu
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getRandomTarget(attacker) {
        let aliveTargets = this.players.filter(player => player.status === "playing" && player !== attacker);
        return aliveTargets[Math.floor(Math.random() * aliveTargets.length)];
    }
}

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGame);

function startGame() {
    const game = new Game();
    game.startGame();
}
