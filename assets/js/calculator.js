//Operations
function addition(a, b) {
    return a + b
}
function substration(a, b) {
    return a - b
}
function multiplication(a, b) {
    return a * b
}
function division(a, b) {
    if (b === 0) {
        return "Error"
    }
    return a / b
}

// Numbers validation
function validateNumber(input) {
    let number = parseFloat(input)
    if (isNaN(number)) {
        return null
    }
    return number
}

//Main loop
let boolean = true
while (boolean) {
    let menu = prompt(
    "What operation do you want to calculate?\n" +
    "1 - Addition\n" +
    "2 - Substraction\n" +
    "3 - Multiplication\n" +
    "4 - Division\n" +
    "5 - Quitter\n"
    )
    switch (menu) {
        case "1":
            let sum1 = validateNumber(prompt("Enter first number : "))
            let sum2 = validateNumber(prompt("Enter first number : "))
            if (sum1, sum2 !== null) {
                console.log(`Result : ${addition(sum1, sum2)}`)
            } else {
                console.log("Invalid input. Please enter numbers.")
            }
            break
        case "2":
            let dif1 = validateNumber(prompt("Enter first number : "))
            let dif2 = validateNumber(prompt("Enter first number : "))
            if (dif1, dif2 !== null) {
                console.log(`Result : ${substration(dif1, dif2)}`)
            } else {
                console.log("Invalid input. Please enter numbers.")
            }
            break
        case "3":
            let pro1 = validateNumber(prompt("Enter first number : "))
            let pro2 = validateNumber(prompt("Enter first number : "))
            if (pro1, pro2 !== null) {
                console.log(`Result : ${multiplication(pro1, pro2)}`)
            } else {
                console.log("Invalid input. Please enter numbers.")
            }
            break
        case "4":
            let quo1 = validateNumber(prompt("Enter first number : "))
            let quo2 = validateNumber(prompt("Enter first number : "))
            if (quo1, quo2 !== null) {
                console.log(`Result : ${division(quo1, quo2)}`)
            } else {
                console.log("Invalid input. Please enter numbers.")
            }
            break
        case "5":
            console.log("Thanks for using my calculator. Good bye!")
            boolean = false
            break
        default:
            console.log("Invalid choice. Please input a number between 1 and 5.")
            break
    }
}