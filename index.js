const operation = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
};

class SuperMath {
    constructor() {
    this.input();
    }

    input() {
        do {
            this.x = +prompt('Введить значення - X');
        } while (isNaN(this.x));

        do {
            this.y = +prompt('Введить значення - Y');
        } while (isNaN(this.y));

        do {
            this.znak = prompt(`Введить знак математичної операції ${this.getOperations()}`);
        } while (!operation[this.znak]);

        return this;
    }

    calculation() {
        const confirFromUser = confirm(`Здійснити вирахування: ${this.x} ${this.znak} ${this.y}?`);

        return confirFromUser ? operation[this.znak](this.x, this.y) : this.input().calculation();
    }

    getOperations() {
        return Object.keys(operation).join(', ');
    }
}

const math = new SuperMath();

alert(`Результат: ${math.x} ${math.znak} ${math.y} = ${math.calculation()}`);