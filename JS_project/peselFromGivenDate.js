let buttonGD = document.getElementById("buttonGD")

function getPeselFromGivenDate(givenDate) {

    const date = givenDate

    // przypisanie wartości z daty do poszczególnych cyfr z PESEL-u (1-6)
    let firstNo = date[2]
    let secondNo = date[3]
    let thirdNo = date[5]
    let fourthNo = date[6]
    let fifthNo = date[8]
    let sixthNo = date[9]

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
    const peselGD = firstNo + secondNo + thirdNo + fourthNo + fifthNo + sixthNo
        + seventhNo.toString() + eightNo.toString() + ninthNo.toString()
        + tenthNo.toString() + eleventhNo.toString()

    let addPesel = document.getElementById('newGD')
    addPesel.innerHTML += peselGD

    buttonGD.removeEventListener("click", getPeselFromGivenDate)
    buttonGD.innerHTML = "Odśwież"

    buttonGD.addEventListener("click", reload)

    function reload() {
        location.reload()
    }
}
