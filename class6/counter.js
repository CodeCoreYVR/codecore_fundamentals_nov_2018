const counter = {
  // a setter method
  set(n) {
    this.count = n;
  },
  inc() {
    return this.count += 1;
  },
  dec() {
    return this.count -= 1
  },
  // a getter method
  now() {
    return this.count;
  }
};

counter.set(3);
console.log(counter.now())
counter.inc();
counter.inc();
console.log(counter.now());
counter.dec();
console.log(counter.now());