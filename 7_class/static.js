class Fruit {
  static MAX_COUNT = 3;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  static makeRose() {
    return new Fruit('rose', '🌹');
  }
  display() {
    return `${this.name} ${this.emoji}`;
  }
}

const lemon = new Fruit('lemon', '🍋');
const flower = Fruit.makeRose();

// const test = lemon.makeRose();
console.log(lemon);
console.log(flower);
console.log(Fruit.MAX_COUNT);

console.log();
