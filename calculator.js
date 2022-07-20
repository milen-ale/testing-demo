/* eslint-disable */
class Calculator {
  #a;
  #b;
  constructor(a, b) {
    this.#a = a;
    this.#b = b;
  }
  add() {
    if (!isFinite(this.#a) || !isFinite(this.#b))
      throw new Error('Argument not a number');
    return this.#a + this.#b;
  }
  subtract() {
    if (!isFinite(this.#a) || !isFinite(this.#b))
      throw new Error('Argument not a number');
    return this.#a - this.#b;
  }
  multiply() {
    if (!isFinite(this.#a) || !isFinite(this.#b))
      throw new Error('Argument not a number');
    return this.#a * this.#b;
  }
  divide() {
    if (!isFinite(this.#a) || !isFinite(this.#b))
      throw new Error('Argument not a number');
    if (this.#b === 0)
      throw new Error('Division by zero at this level is insane');
    return this.#a / this.#b;
  }
}

module.exports = Calculator;
