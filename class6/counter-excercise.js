
const counter = {
  count: 0,
  step: 1,
  setStep(n) {
    this.step = n;
  },
  inc() {
    return this.count += this.step;
  },
  dec() {
    return this.count -= this.step
  },
  // a getter method
  now() {
    return this.count;
  },
  reset() {
    this.count = 0;
    this.step = 1;
  }
};