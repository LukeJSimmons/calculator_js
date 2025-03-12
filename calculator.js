class Calculator {
    operate(operator, numbers) {
        switch(operator) {
            case '+':
                return this.add(numbers)
            case '-':
                return this.subtract(numbers)
            case '*':
                return this.multiply(numbers)
            case '/':
                return this.divide(numbers)
            default:
                return
        }
    }

    add(numbers) {
        return numbers.reduce((acc, current) => acc + current, 0)
    }

    subtract(numbers) {
        return numbers.reduce((acc, current) => acc - current)
    }

    multiply(numbers) {
        return numbers.reduce((acc, current) => acc * current, 1)
    }

    divide(numbers) {
        return numbers.reduce((acc, current) => acc / current)
    }
}

const calc = new Calculator

console.log(calc.operate('+', [2,2]))
