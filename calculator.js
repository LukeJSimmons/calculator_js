class Calculator {
    operate(input) {
        const [operator, numbers] = this.getOperatorFromInput(input)

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

    getOperatorFromInput(input) {
        if (input.includes('+')) {
            return ['+', input.split('+').map(num => Number(num))]
        } else if (input.includes('-')) {
            return ['-', input.split('-').map(num => Number(num))]
        } else if (input.includes('*')) {
            return ['*', input.split('*').map(num => Number(num))]
        } else if (input.includes('/')) {
            return ['/', input.split('/').map(num => Number(num))]
        } else {
            return ''
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

function operate() {
    const input = document.querySelector("input")
    const calculator = new Calculator()

    input.value = calculator.operate(input.value)
}
