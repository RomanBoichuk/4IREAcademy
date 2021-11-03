//створюємо змінні валют для обміну
let nameUSA = "USA"
let nameEUR = "EUR"
let nameUAH = "UAH"
let namePLN = "PLN"
let nameGBP = "GBP"
//створюємо змінні курсу кожної валюти
let USA = 26.28
let EUR = 30.3
let UAH = 1
let PLN = 6.5
let GBP = 35.45

let cantor = true
let sumChangeFinal
let account
let changeToCurrency
let continuation

//запускаємо цикл обміну валюти
while(cantor) {
    let currency = prompt("введіть валюту яку маєте USA,EUR,UAH,PLN,GBP або відмініть операцію")
    if (currency === null) {
        alert("Дякуємо що звернулися. Заходьте ще")
        break;
    }
    else if (currency !== nameUSA && currency !== nameEUR
                && currency !== nameUAH && currency !== namePLN && currency !== nameGBP) {
        alert("У нас не приймають дану валюту")
    }
    else if (currency == nameUSA) {
        account = prompt(`введіть кількість ${currency} яку бажаєте обміняти `) * USA
        changeToCurrency = prompt(`введіть нати яку валюту бажаєте поміняти EUR,UAH,PLN,GBP `)
        if (changeToCurrency == nameEUR) {
            sumChangeFinal = account * EUR
            alert(`ви отримуєте ${sumChangeFinal} ${nameEUR}`)
        } else if (changeToCurrency == namePLN) {
            sumChangeFinal = account * PLN
            alert(`ви отримуєте ${sumChangeFinal} ${namePLN}`)
        } else if (changeToCurrency == nameGBP) {
            sumChangeFinal = account * GBP
            alert(`ви отримуєте ${sumChangeFinal} ${nameGBP}`)
        } else {
            sumChangeFinal = account * UAH
            alert(`ви отримуєте ${sumChangeFinal} ${nameUAH}`)
        }
    }
    else if (currency == nameEUR) {
        account = prompt(`введіть кількість ${currency} яку бажаєте обміняти `) * EUR
        changeToCurrency = prompt(`введіть нати яку валюту бажаєте поміняти USA,UAH,PLN,GBP `)
        if (changeToCurrency == nameUSA) {
            sumChangeFinal = account * USA
            alert(`ви отримуєте ${sumChangeFinal} ${nameUSA}`)
        } else if (changeToCurrency == namePLN) {
            sumChangeFinal = account * PLN
            alert(`ви отримуєте ${sumChangeFinal} ${namePLN}`)
        } else if (changeToCurrency == nameGBP) {
            sumChangeFinal = account * GBP
            alert(`ви отримуєте ${sumChangeFinal} ${nameGBP}`)
        }
        else {
            sumChangeFinal = account * UAH
            alert(`ви отримуєте ${sumChangeFinal} ${nameUAH}`) 
        }
    }
    else if (currency == nameUAH) {
        account = prompt(`введіть кількість ${currency} яку бажаєте обміняти `) * UAH
        changeToCurrency = prompt(`введіть нати яку валюту бажаєте поміняти USA,EUR,PLN,GBP `)
        if (changeToCurrency == nameUSA) {
            sumChangeFinal = account * USA
            alert(`ви отримуєте ${sumChangeFinal} ${nameUSA}`)
        } else if (changeToCurrency == namePLN) {
            sumChangeFinal = account * PLN
            alert(`ви отримуєте ${sumChangeFinal} ${namePLN}`)
        } else if (changeToCurrency == nameGBP) {
            sumChangeFinal = account * GBP
            alert(`ви отримуєте ${sumChangeFinal} ${nameGBP}`)
        }
        else {
            sumChangeFinal = account * EUR
            alert(`ви отримуєте ${sumChangeFinal} ${nameEUR}`)
        }
    }
    else if (currency == namePLN) {
        account = prompt(`введіть кількість ${currency} яку бажаєте обміняти `) * PLN
        changeToCurrency = prompt(`введіть нати яку валюту бажаєте поміняти USA,EUR,UAH,GBP `)
        if (changeToCurrency == nameEUR) {
            sumChangeFinal = account * EUR
            alert(`ви отримуєте ${sumChangeFinal} ${nameEUR}`)
        } else if (changeToCurrency == nameUSA) {
            sumChangeFinal = account * USA
            alert(`ви отримуєте ${sumChangeFinal} ${nameUSA}`)
        } else if (changeToCurrency == nameGBP) {
            sumChangeFinal = account * GBP
            alert(`ви отримуєте ${sumChangeFinal} ${nameGBP}`)
        }
        else {
            sumChangeFinal = account * UAH
            alert(`ви отримуєте ${sumChangeFinal} ${nameUAH}`)
        }
    }
    else if (currency == nameGBP) {
    account = prompt(`введіть кількість ${currency} яку бажаєте обміняти `) * GBP
    changeToCurrency = prompt(`введіть нати яку валюту бажаєте поміняти USA,EUR,UAH,PLN `)
    if (changeToCurrency == nameEUR) {
        sumChangeFinal = account * EUR
        alert(`ви отримуєте ${sumChangeFinal} ${nameEUR}`)
    } else if (changeToCurrency == nameUSA) {
        sumChangeFinal = account * USA
        alert(`ви отримуєте ${sumChangeFinal} ${nameUSA}`)
    } else if (changeToCurrency == namePLN) {
        sumChangeFinal = account * PLN
        alert(`ви отримуєте ${sumChangeFinal} ${namePLN}`)
    }
    else {
        sumChangeFinal = account * UAH
        alert(`ви отримуєте ${sumChangeFinal} ${nameUAH}`)
    }
}
    cantor = false
    continuation = confirm(" бажаєте ще щось поміняти?")
    if (continuation == true) {
    cantor = true
    }
    else {
        cantor = false
    }
}


