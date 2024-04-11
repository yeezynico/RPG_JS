class Game {
    constructor() {
        this.players = [new Fighter(), new Paladin(), new Monk(), new Berzerker(), new Assassin()]; // Initialisation des joueurs
        this.turnLeft = 10;
        this.winner = null; // Variable pour stocker le gagnant
    }

    startGame() {
        console.log("Le jeu commence!");

        while (this.turnLeft > 0 && !this.winner) {
            this.startTurn(); // méthode pour commencer un tour
            this.turnLeft--;
        }

        if (!this.winner) {
            console.log("Fin du jeu ! Aucun gagnant.");
        }
    }

    startTurn() {
        console.log(`C'est le tour ${11 - this.turnLeft}`);

        let shuffledPlayers = this.shuffleArray(this.players); // Mélange aléatoire de l'ordre des joueurs


        shuffledPlayers.forEach(player => {
            if (player.status === "playing") {
                console.log(`C'est à ${player.name} de jouer`);
                this.attackRandomTarget(player); // méthode pour attaquer une cible aléatoire
            }
        });

        this.displayStats();

        if (this.checkWinner()) {
            this.endGame();
        }
    }

    attackRandomTarget(attacker) {
        let aliveTargets = this.players.filter(player => player.status === "playing" && player !== attacker); // Filtrage des cibles vivantes
        if (aliveTargets.length > 0) {
            let target = aliveTargets[Math.floor(Math.random() * aliveTargets.length)]; // Sélection aléatoire d'une cible parmi celles vivantes
            attacker.dealDamage(target); // Le joueur attaquant inflige des dégâts à la cible sélectionnée
            console.log(`${attacker.name} attaque ${target.name}.`); // Affichage de l'action d'attaque
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
        this.turnLeft = 0; // Met fin immédiatement au jeu en réinitialisant le nombre de tours restants
    }

    shuffleArray(array) {
        // Méthode pour mélanger un tableau
        for (let i = array.length - 1; i > 0; i--) { // Parcours du tableau en partant de la fin jusqu'au début
            const j = Math.floor(Math.random() * (i + 1)); // Génération d'un indice aléatoire entre 0 et i inclus
            [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments d'indice i et j pour mélanger le tableau
        }
        return array; // Retour du tableau mélangé
    }
}


const game = new Game();
game.startGame();
