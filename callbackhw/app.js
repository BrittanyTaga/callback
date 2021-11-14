// Clock functionality
setInterval(myFunction, 1000)
function myFunction() {
    let d = new Date()
    document.getElementById('clock').innerHTML =
        d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds()
}

// Calculator functionality
function myDisplay(result) {
    document.getElementById('calc').innerHTML = result
}

function calculatorTwo(callBack) {
    if (typeof callBack === 'function') {
        a = document.getElementById('num1').value
        document.getElementById('num1').value = ''
        b = document.getElementById('num2').value
        document.getElementById('num2').value = ''
        myDisplay(callBack(a, b))
    }
}

let calculatorOne = function (callBack) {
    if (typeof callBack === 'function') {
        a = document.getElementById('num3').value
        document.getElementById('num3').value = ''
        myDisplay(callBack(a))
    }
}

// Two parameter + cb
let add = document.getElementById('addition')
add.addEventListener('click', addit, false)
function addit() {
    calculatorTwo(addition)
}
let addition = function (a, b) {
    return parseInt(a) + parseInt(b)
}

let sub = document.getElementById('subtraction')
sub.addEventListener('click', subt, false)
function subt() {
    calculatorTwo(subtraction)
}
let subtraction = function (a, b) {
    return parseInt(a) - parseInt(b)
}

let mul = document.getElementById('multiplication')
mul.addEventListener('click', multi, false)
function multi() {
    calculatorTwo(multiplication)
}
let multiplication = function (a, b) {
    return parseInt(a) * parseInt(b)
}

let div = document.getElementById('division')
div.addEventListener('click', divi, false)
function divi() {
    calculatorTwo(division)
}
let division = function (a, b) {
    if (b === 0 && a !== 0) {
        return parseFloat(a) / parseFloat(b)
    } else {
        alert('The second number cannot be 0, nice try though')
        alert('Don\'t worry, I\'ll fix that for you')
        if (a !== 0 && b === 0) {
            return parseFloat(b) / parseFloat(a)
        } else {
            alert('Ahhh...you made them both 0....')
            return 'Pick real numbers...'
        }
    }
}

// One parameter + cb
let sqrt = document.getElementById('squareRoot')
sqrt.addEventListener('click', sqRt, false)
function sqRt() {
    calculatorOne(squareRoot)
}
let squareRoot = function (a) {
    if (a < 0) {
        a = parseInt(a) * -1
        alert('You thought you could challenge me, eh ?')
        return Math.sqrt(parseInt(a)) + 'i'
    } else if (a > 0) {
        return '±' + Math.sqrt(parseInt(a))
    } else {
        return 0
    }
}

let sqr = document.getElementById('square')
sqr.addEventListener('click', sqR, false)
function sqR() {
    calculatorOne(square)
}
let square = function (a) {
    return parseInt(a) * parseInt(a)
}

let abs = document.getElementById('absoluteValue')
abs.addEventListener('click', absV, false)
function absV() {
    calculatorOne(absoluteValue)
}
let absoluteValue = function (a) {
    if (a < 0) {
        return parseInt(a) * (-1)
    } else {
        return a
    }
}