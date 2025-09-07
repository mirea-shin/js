// 생성자 함수

function Fruit(name, emoji) {
  (this.name = name),
    (this.emoji = emoji),
    (this.display = () => {
      console.log(`${this.emoji} ${this.name}`);
    });

  // return this 생략가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

apple.display();
orange.display();
