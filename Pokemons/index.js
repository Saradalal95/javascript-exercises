class Pokemon {
  skills = [];
  constructor(_name, _health, _magic) {
    this.name = _name;
    this.health = _health;
    this.magic = _magic;
  }
  learnAttackSkill(attackObject) {
    this.skills.push(attackObject);
  }
  showStatus() {
    console.log(
      `this pokemon has ${this.magic} Magic and ${this.health} Health`
    );
  }
  attack(indexOfSkills, attackedPokemon) {
    var attackSkill = this.skills[indexOfSkills];
    if (attackSkill == null) {
      console.log(`${this.name} did not learn this skill yet !!`);
    } else if (this.magic < attackSkill.attackMagic) {
      return `this Pokemon is so week for this attack`;
    } else if (attackedPokemon.health == 0) {
      return "this pokemon is dead already !!";
    } else {
      this.magic -= attackSkill.attackMagic;
      attackedPokemon.health -= attackSkill.attackDamage;
      if (attackedPokemon.health < attackSkill.attackDamage) {
        return `${this.name} attacked and Killed ${attackedPokemon.name}`;
      } else {
        return `${this.name} attacked ${attackedPokemon.name} ,now ${this.name} has ${this.magic} magic and ${attackedPokemon.name} has health ${attackedPokemon.health}`;
      }
    }
  }
  getMagic(newMagic) {
    this.magic += newMagic;
    console.log(
      `${this.name} has got more magic!! ${this.name} has ${this.magic} magic now `
    );
  }
}

class AttackSkill {
  constructor(name, magic, damage) {
    this.attackName = name;
    this.attackMagic = magic;
    this.attackDamage = damage;
  }
}

let pikachu = new Pokemon("pikachu", 100, 100);
let eevee = new Pokemon("Eevee", 70, 80);
let snorlax = new Pokemon("Snorlax", 30, 10);
let ditto = new Pokemon("Ditto", 90, 80);
let genger = new Pokemon("Genger", 50, 50);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
let lightning = new AttackSkill("lightning", 20, 30);
let flameBody = new AttackSkill("flame body", 130, 140);
let iceBody = new AttackSkill("ice body", 10, 30);
let ironFist = new AttackSkill("iron fist", 20, 40);
let mirrorArmor = new AttackSkill("mirror armor", 20, 40);
let poisonSeed = new AttackSkill("poison seed", 120, 20);
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(flameBody);
pikachu.showStatus();
eevee.showStatus();
pikachu.attack(0, eevee);
pikachu.showStatus();
eevee.showStatus();
pikachu.attack(0, eevee);
pikachu.showStatus();
eevee.showStatus();
// console.log(pikachu.attack(0, ditto));
// pikachu.showStatus();
// console.log(pikachu.attack(0, snorlax));
// pikachu.showStatus();
// pikachu.getMagic(60);
