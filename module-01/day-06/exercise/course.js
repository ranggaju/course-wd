class Student {
  constructor(name, email, dateOfBirth, score) {
    this.Name = name;
    this.Email = email;
    this.Age = this.getAge(dateOfBirth);
    this.Score = score;
  }

  getAge(date) {
    const age = Math.round(((new Date() - new Date(date)) / (365.25 * 24 * 60 * 60 * 1000)) * 100) / 100;
    return age;
  }
}

class StudentsReport {
  constructor(students) {
    this.Students = students;
  }

  getStats(arr = []) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;

    for (let key in arr) {
      let value = arr[key];
      value > max && (max = value);
      value < min && (min = value);
      sum += value;
    }

    return {
      Highest: max,
      Lowest: min,
      Average: Math.round((sum / arr.length) * 100) / 100,
    };
  }

  calculate() {
    const scores = [];
    const ages = [];

    for (let key in this.Students) {
      const student = this.Students[key];
      scores.push(student.Score);
      ages.push(student.Age);
    }

    return {
      Scores: this.getStats(scores),
      Ages: this.getStats(ages),
    };
  }
}

const students = [
  new Student('Abe', 'abe@school.com', '2009-07-26', 80),
  new Student('Bambo', 'bambo@school.com', '2009-10-17', 70),
  new Student('Cici', 'cici@school.com', '2009-11-04', 90),
  new Student('David', 'david@school.com', '2010-02-02', 100),
];

console.log(new StudentsReport(students).calculate());
