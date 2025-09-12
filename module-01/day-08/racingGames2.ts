class Car {
  #name: string;
  #speed: number;
  #fuel: number;
  #distance: number;

  constructor(name: string) {
    this.#name = name;
    this.#speed = 100;
    this.#fuel = 100;
    this.#distance = 0;
  }

  get name(): string {
    return this.#name;
  }

  get fuel(): number {
    return this.#fuel;
  }

  get distance(): number {
    return this.#distance;
  }

  get status(): string {
    return `${this.#name} (Speed: ${this.#speed}, Fuel: ${this.#fuel}, Distance: ${this.#distance})`;
  }

  set speedChange(change: number) {
    this.#speed = Math.max(0, this.#speed + change);
  }

  move(): void {
    this.#fuel -= 10;
    this.#distance += this.#speed;
  }
}

class RacingGames {
  #cars: Car[];

  constructor(...cars: Car[]) {
    this.#cars = cars;
  }

  #getRandomItem(): number {
    const items = [20, -20, 0];
    return items[Math.floor(Math.random() * items.length)];
  }

  start(): void {
    while (this.#cars.every((car) => car.fuel > 0)) {
      this.#cars.forEach((car) => console.log(car.status));
      this.#cars.forEach((car) => {
        car.speedChange = this.#getRandomItem();
        car.move();
      });
    }

    this.#cars.forEach((car) => console.log(car.status));

    const ranking = [...this.#cars].sort((a, b) => b.distance - a.distance);

    ranking.forEach((car, i) => {
      console.log(`#${i + 1}: ${car.name}`);
    });
  }
}

new RacingGames(new Car('Angkot'), new Car('Bajaj'), new Car('Ojek'), new Car('Delman')).start();
