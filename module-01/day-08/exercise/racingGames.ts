class Car {
  name: string;
  speed: number;
  fuel: number;
  distance: number;

  constructor(_name: string) {
    this.name = _name;
    this.speed = 100;
    this.fuel = 100;
    this.distance = 0;
  }

  move(): void {
    this.fuel -= 10;
    this.distance += this.speed;
  }

  useItem(item: { speed: number }): void {
    this.speed = Math.max(0, this.speed + item.speed);
  }

  showStat(): string {
    return `${this.name} (Speed => ${this.speed}, Fuel => ${this.fuel}, Distance => ${this.distance})`;
  }
}

class RacingGames {
  car1: Car;
  car2: Car;

  constructor(_car1: Car, _car2: Car) {
    this.car1 = _car1;
    this.car2 = _car2;
  }

  getRandomItem(): { speed: number } {
    const items = [{ speed: 20 }, { speed: -20 }, { speed: 0 }];
    return items[Math.floor(Math.random() * items.length)];
  }

  start(): void {
    while (this.car1.fuel > 0 && this.car2.fuel > 0) {
      console.log(this.car1.showStat());
      console.log(this.car2.showStat());
      console.log('');

      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      this.car1.useItem(item1);
      this.car2.useItem(item2);

      this.car1.move();
      this.car2.move();
    }

    console.log(this.car1.showStat());
    console.log(this.car2.showStat());
    console.log('');

    if (this.car1.distance > this.car2.distance) {
      console.log(`Winner: ${this.car1.name}!`);
    } else if (this.car1.distance < this.car2.distance) {
      console.log(`Winner: ${this.car2.name}!`);
    } else {
      console.log(`It's a tie!`);
    }
  }
}

const carA = new Car('Angkot');
const carB = new Car('Bajaj');

const raceA = new RacingGames(carA, carB);

raceA.start();
