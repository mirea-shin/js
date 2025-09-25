class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display() {
    return `${this.name} ${this.emoji}`;
  }
}

const banana = new Fruit('banana', '🍌');
const lemon = new Fruit('lemon', '🍋');

console.log(banana.display());
console.log(lemon.display());
