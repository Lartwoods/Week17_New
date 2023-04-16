class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return Number(this.rate) * Number(this.days);
  }
}
const worker1 = new Worker("vasya", "pupkin", 500, 4);
console.log(worker1.getSalary());
