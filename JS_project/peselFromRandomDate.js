let buttonRP = document.getElementById("buttonRP")

buttonRP.addEventListener("click", getPeselFromRandomDate)


function getPeselFromRandomDate() {
    // generowanie przypadkowej daty w formacie YY-MM-DD

    function subtractYears(date, years) {
        date.setFullYear(date.getFullYear() - years);
        return date;
    }
    const date = new Date()
    const newDate = subtractYears(date, Math.floor(Math.random() * (24 - 120) + 120))

    const shortDate = newDate.toISOString().substring(0, 10)


    // przypisanie wartości z daty do poszczególnych cyfr z PESEL-u (1-6)
    let firstNo = shortDate[2]
    let secondNo = shortDate[3]
    let thirdNo = shortDate[5]
    let fourthNo = shortDate[6]
    let fifthNo = shortDate[8]
    let sixthNo = shortDate[9]

    // przypisanie przypadkowych cyfr do kolejnych cyfr z PESEL-u (7-10)
    let seventhNo = Math.floor(Math.random() * (1 - 9) + 9)
    let eightNo = Math.floor(Math.random() * (1 - 9) + 9)
    let ninthNo = Math.floor(Math.random() * (1 - 9) + 9)
    let tenthNo = Math.floor(Math.random() * (1 - 9) + 9)

    //cyfra kontrolna
    // Wagi:1, 3, 7, 9, 1, 3, 7, 9, 1, 3
    let sum = (Number(firstNo) * 1) % 10 + (Number(secondNo) * 3) % 10 + (Number(thirdNo) * 7) % 10
        + (Number(fourthNo) * 9) % 10 + (Number(fifthNo) * 1) % 10 + (Number(sixthNo) * 3) % 10
        + (seventhNo * 7) % 10 + (eightNo * 9) % 10 + (ninthNo * 1) % 10 + (tenthNo * 3) % 10

    function controlNo(sum) {
        let eleventhNo = 0
        if (sum % 10 != 0) {
            eleventhNo = 10 - (sum % 10)
        }
        return eleventhNo
    }

    const eleventhNo = controlNo(sum)

    // złożenie wszystkich cyfr w PESEL

    const pesel = firstNo + secondNo + thirdNo + fourthNo + fifthNo + sixthNo
        + seventhNo.toString() + eightNo.toString() + ninthNo.toString()
        + tenthNo.toString() + eleventhNo.toString()

    const newPesel = pesel

    let addPesel = document.getElementById('newRP')
    addPesel.innerHTML += pesel

    buttonRP.innerHTML = "Odśwież"
    buttonRP.removeEventListener("click", getAddressData)

    buttonRP.addEventListener("click", reload)


    function reload(){
        location.reload()
    }
}
