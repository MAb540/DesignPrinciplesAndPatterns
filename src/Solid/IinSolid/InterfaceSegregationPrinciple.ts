/**
 * initial Entity Interface
 */
interface Entity {
  name: string;
  health: string;
  attackDamage: string;

  move: () => void;
  attack: () => void;
  hide: () => void;
}

interface Entity {
  name: string;
  health: string;
  attackDamage: string;

  move: () => void;
}

interface Defence {
  attack: () => void;
  hide: () => void;
}

/**
 * character need every property and method of
 * initial Entity interface.
 */
class Character implements Entity, Defence {
  name = "some";
  health = "23%";
  attackDamage = "somesdf";

  move() {
    console.log("this is character move method");
  }

  attack() {
    console.log("this is character attack method");
  }

  hide() {
    console.log("this is character hide method");
  }
}

/**
 * Turret does not need every property and method of Entity interface.
 * It only need attack and takeDamage methods.
 * So we will break the Entity interface into smaller interfaces by following
 * interface segregation principle.
 */

class Turret implements Defence {
  attack() {
    console.log("this is Turret attack method");
  }

  hide() {
    console.log("this is Turret hide method");
  }
}

export const Segregation = () => {
  const c1 = new Character();
  c1.move();
  c1.attack();
  c1.hide();

  const t1 = new Turret();
  t1.attack();
  t1.hide();
};
