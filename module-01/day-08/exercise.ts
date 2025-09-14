const linerLen = 50;
const liner = (char: string): string => char.repeat(linerLen);

const hd = (text: string, level: number): void => {
  const header = `- ${text} -`;
  const pad = ' '.repeat(Math.floor((linerLen - text.length) / 2));
  const border = level === 1 ? '=' : '-';
  const top = level === 1 ? `${liner(border)}\n\n` : '';
  const bot = level === 1 ? `\n\n${liner(border)}` : level === 2 ? `\n${liner(border)}` : '';

  console.log(`${top}${pad}${header}${bot}`);
};

const bl = (char: string): void => console.log(liner(char));

hd('Exercise Day 08', 1);

hd('01', 3);

// Employee Salary

class Employee {
  name: string;
  workingHours: number;

  constructor(name: string) {
    this.name = name;
    this.workingHours = 0;
  }

  addWorkingHours(hours: number): void {
    this.workingHours += hours;
  }

  calculateSalary(): number {
    return 0;
  }
}

class FullTimeEmployee extends Employee {
  calculateSalary(): number {
    const baseRate = 100000;
    const overHoursRate = 75000;
    const standardHours = 6;
    let totalSalary: number = 0;

    totalSalary =
      Math.min(this.workingHours, standardHours) * baseRate +
      Math.max(0, this.workingHours - standardHours) * overHoursRate;

    return totalSalary;
  }
}

class PartTimeEmployee extends Employee {
  calculateSalary(): number {
    const baseRate = 50000;
    const overHoursRate = 30000;
    const standardHours = 6;
    let totalSalary: number = 0;

    totalSalary =
      Math.min(this.workingHours, standardHours) * baseRate +
      Math.max(0, this.workingHours - standardHours) * overHoursRate;

    return totalSalary;
  }
}

const FTEA = new FullTimeEmployee('Abe');
FTEA.addWorkingHours(8);

console.log(FTEA.calculateSalary());

const PTEA = new PartTimeEmployee('Bambo');
PTEA.addWorkingHours(10);

console.log(PTEA.calculateSalary());

hd('02', 3);

// Shooting Game

class Player {
  name: string;
  health: number;
  power: number;

  constructor(_name: string) {
    this.name = _name;
    this.health = 100;
    this.power = 10;
  }

  damage(power: number): void {
    this.health = Math.max(0, this.health - power);
  }

  useItem(item: { health: number; power: number }): void {
    this.health += item.health;
    this.power += item.power;
  }

  showStat(): void {
    console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
  }
}

class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(_player1: Player, _player2: Player) {
    this.player1 = _player1;
    this.player2 = _player2;
  }

  getRandomItem(): { health: number; power: number } {
    const item = [0, 10];
    const health = item[Math.floor(Math.random() * item.length)];
    const power = item[Math.floor(Math.random() * item.length)];

    return { health: health, power: power };
  }

  start(): void {
    let round: number = 1;

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log(`\nRound ${round}`);

      console.log(`\n${this.player1.name}'s turn`);
      this.player1.showStat();
      const item1 = this.getRandomItem();
      console.log(`${this.player1.name} got: Health +${item1.health}, Power +${item1.power}`);
      this.player1.useItem(item1);
      this.player1.showStat();
      console.log(`\n${this.player1.name} shoots!`);
      this.player2.damage(this.player1.power);
      if (this.player2.health <= 0) {
        console.log(`${this.player2.name} died!`);
        break;
      } else {
        console.log(`${this.player2.name} survived...`);
      }

      console.log(`\n${this.player2.name}'s turn`);
      this.player2.showStat();
      const item2 = this.getRandomItem();
      console.log(`${this.player2.name} got: Health +${item2.health}, Power +${item2.power}`);
      this.player2.useItem(item2);
      this.player2.showStat();
      console.log(`\n${this.player2.name} shoots!`);
      this.player1.damage(this.player2.power);
      if (this.player1.health <= 0) {
        console.log(`${this.player1.name} died!`);
        break;
      } else {
        console.log(`${this.player1.name} survived...`);
      }

      round++;
    }

    console.log(`\nWinner: ${this.player1.health > this.player2.health ? this.player1.name : this.player2.name}!`);
  }
}

const shooterA = new Player('Abe');
const shooterB = new Player('Bambo');

const game = new ShootingGame(shooterA, shooterB);

game.start();
