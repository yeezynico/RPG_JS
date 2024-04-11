class Game {
    constructor() {
        this.players = [new Fighter(), new Paladin(), new Monk(), new Berzerker(), new Assassin()];
        this.turnLeft = 10;
        this.winner = null;
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
                        player.darkVision(target);
                    } else if (player instanceof Paladin) {
                        let target = this.getRandomTarget(player);
                        player.healingLightning(target);
                    } else if (player instanceof Monk) {
                        player.heal();
                    } else if (player instanceof Berzerker) {
                        player.rage();
                    } else if (player instanceof Assassin) {
                        let target = this.getRandomTarget(player);
                        player.shadowHit(target);
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
            attacker.dealDamage(target);
            console.log(`${attacker.name} attaque ${target.name}.`);
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

// Lancement du jeu
const game = new Game();
game.startGame();
