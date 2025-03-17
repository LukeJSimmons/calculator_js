class Calculator {
    constructor() {
        this.num1 = ''
        this.operator = ''
        this.num2 = ''
    }

    operate() {
        this.convertNumsToNumbers()

        switch(this.operator) {
            case '+':
                return this.add()
            case '-':
                return this.subtract()
            case '*':
                return this.multiply()
            case '/':
                return this.divide()
            default:
                return
        }
    }

    add() {
        return this.num1 + this.num2
    }

    subtract() {
        return this.num1 - this.num2
    }

    multiply() {
        return this.num1 * this.num2
    }

    divide() {
        return this.num1 / this.num2
    }

    num1HasValue() {
        return this.num1 != ''
    }

    num2HasValue() {
        return this.num2 != ''
    }

    hasOperator() {
        return this.operator != ''
    }

    convertNumsToNumbers() {
        this.num1 = Number(this.num1)
        this.num2 = Number(this.num2)
    }

    clear() {
        this.num1 = ''
        this.operator = ''
        this.num2 = ''
    }
}

const calculator = new Calculator()
const inputDisplay = document.querySelector('input')

function setInputDisplay(value=`${calculator.num1}${calculator.operator}${calculator.num2}`) {
    inputDisplay.value = value
}

function addDigit(digit) {
    if (calculator.num1HasValue() && calculator.hasOperator()) {
        if (digit == '.' && calculator.num2.includes('.')) {
            return
        }

        calculator.num2 += digit
    }
    else {
        if (digit == '.' && calculator.num1.includes('.')) {
            return
        }

        calculator.num1 += digit
    }
    setInputDisplay()
}

function addOperator(operator) {
    if (calculator.num1HasValue()) {
        calculator.operator = operator
    }
    else if (calculator.num1HasValue() && calculator.num2HasValue()) {
        calculator.operate()
    }
    setInputDisplay()
}

function clearInput() {
    calculator.clear()
    setInputDisplay()
}

function operate() {
    if (calculator.num1HasValue() && calculator.num2HasValue()) {
        let total = calculator.operate()
        if (String(total).length > 5) {
            total = total.toFixed(3)
        }
        setInputDisplay(total)
        calculator.clear()
        
    }
}
