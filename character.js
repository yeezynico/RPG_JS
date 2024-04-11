class Character {
    constructor(name, hp, dmg, mana) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = "playing";
    }

    takeDamage(dmg) {
        if (this.hp > 0) {
            this.hp -= dmg;
            if (this.hp <= 0) {
                this.status = "loser";
            }
        }
    }

    dealDamage(victim) {
        if (this.hp > 0 && victim.hp > 0) {
            victim.takeDamage(this.dmg);
            if (victim.hp === 0) {
                this.mana += 20;
            }
        }
    }
}

class Fighter extends Character {
    constructor() {
        super("Grace", 12, 4, 40);
    }

    darkVision(victim) {
        if (this.mana >= 20) {
            victim.takeDamage(5);
            this.mana -= 20;
            console.log(`${this.name} utilise Dark Vision sur ${victim.name} !`);
        } else {
            console.log("Pas assez de mana pour utiliser Dark Vision.");
        }
    }
}

class Paladin extends Character {
    constructor() {
        super("Uldder", 16, 3, 160);
    }

    healingLightning(victim) {
        if (this.mana >= 40) {
            this.hp += 5;
            victim.takeDamage(4);
            this.mana -= 40;
            console.log(`${this.name} utilise Healing Lightning sur ${victim.name} !`);
        } else {
            console.log("Pas assez de mana pour utiliser Healing Lightning.");
        }
    }
}

class Monk extends Character {
    constructor() {
        super("Moana", 8, 2, 200);
    }

    heal() {
        if (this.mana >= 20) {
            this.hp += 8;
            this.mana -= 20;
            console.log(`${this.name} utilise Heal pour récupérer des points de vie !`);
        } else {
            console.log("Pas assez de mana pour utiliser Heal.");
        }
    }
}

class Berzerker extends Character {
    constructor() {
        super("Draven", 8, 4, 0);
    }

    rage() {
        this.dmg += 1;
        this.hp -= 1;
        console.log(`${this.name} entre dans une rage furieuse !`);
    }
}

class Assassin extends Character {
    constructor() {
        super("Carl", 6, 6, 20);
    }

    shadowHit(victim) {
        if (this.mana >= 20) {
            victim.takeDamage(7);
            this.mana -= 20;
            console.log(`${this.name} utilise Shadow Hit sur ${victim.name} !`);
        } else {
            console.log("Pas assez de mana pour utiliser Shadow Hit.");
        }
    }
}