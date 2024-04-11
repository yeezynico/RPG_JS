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
            const damage = this.dmg;
            victim.takeDamage(damage);
            return damage;
        }
        return 0;
    }
}


export default Character;