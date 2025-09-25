// 접근제어자 - 캡슐화
// private, public(기본), protected(자식요소)
// private 외부에서 접근하여 인스턴스의 값을 이상하게 바꾸는 등의 행동을 제어하기 위함

class Fruit {
  #type = '과일';
  #name;
  constructor(name, emoji) {
    this.#name = name;
    this.emoji = emoji;
  }
  display() {
    return `${this.#name} ${this.emoji}`;
  }
}

const lemon = new Fruit('lemon', '🍋');
lemon.emoji = 'lemon';
// lemon.display();
console.log(lemon);
console.log(lemon.display());
