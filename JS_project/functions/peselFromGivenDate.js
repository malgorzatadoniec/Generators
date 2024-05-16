let buttonGD = document.getElementById("buttonGD")

function getPeselFromGivenDate(givenDate) {

    const date = givenDate
    console.log(date)
    console.log(document.getElementById('dateInput').value)

    let newYear = date[0]
    let newMonth = date[5]

    if (date.length == 0) {

        document.getElementById('newGD').innerHTML += "Wybierz datę"

        buttonGD.innerHTML = "Odśwież"
        buttonGD.removeEventListener("click", getPeselFromGivenDate)

        buttonGD.addEventListener("click", reload)

        function reload() {
            location.reload()
        }
    }

    else if (newYear == 1) {

        let firstNo = date[2]
        let secondNo = date[3]
        let thirdNo = date[5]
        let fourthNo = date[6]
        let fifthNo = date[8]
        let sixthNo = date[9]

        let seventhNo = Math.floor(Math.random() * (1 - 9) + 9)
        let eightNo = Math.floor(Math.random() * (1 - 9) + 9)
        let ninthNo = Math.floor(Math.random() * (1 - 9) + 9)
        let tenthNo = Math.floor(Math.random() * (1 - 9) + 9)

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

        const peselRD = firstNo + secondNo + thirdNo + fourthNo + fifthNo + sixthNo
            + seventhNo.toString() + eightNo.toString() + ninthNo.toString()
            + tenthNo.toString() + eleventhNo.toString()

        document.getElementById('newGD').innerHTML += peselRD

        if (peselRD[9] % 2 == 0) {
            document.getElementById('message').innerHTML += "(PESEL dla kobiety)"

        } else {
            document.getElementById('message').innerHTML += "(PESEL dla mężczyzny)"
        }

        buttonGD.innerHTML = "Odśwież"
        buttonGD.removeEventListener("click", getPeselFromGivenDate)

        buttonGD.addEventListener("click", reload)

        function reload() {
            location.reload()
        }

    } else {

        if (newMonth != 0) {

            let firstNo = date[2]
            let secondNo = date[3]
            let thirdNo = 3
            let fourthNo = date[6]
            let fifthNo = date[8]
            let sixthNo = date[9]

            let seventhNo = Math.floor(Math.random() * (1 - 9) + 9)
            let eightNo = Math.floor(Math.random() * (1 - 9) + 9)
            let ninthNo = Math.floor(Math.random() * (1 - 9) + 9)
            let tenthNo = Math.floor(Math.random() * (1 - 9) + 9)

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

            const peselRD = firstNo + secondNo + thirdNo + fourthNo + fifthNo + sixthNo
                + seventhNo.toString() + eightNo.toString() + ninthNo.toString()
                + tenthNo.toString() + eleventhNo.toString()

            document.getElementById('newGD').innerHTML += peselRD

            if (peselRD[9] % 2 == 0) {
                document.getElementById('message').innerHTML += "(PESEL dla kobiety)"

            } else {
                document.getElementById('message').innerHTML += "(PESEL dla mężczyzny)"
            }

            buttonGD.innerHTML = "Odśwież"
            buttonGD.removeEventListener("click", getPeselFromGivenDate)

            buttonGD.addEventListener("click", reload)

            function reload() {
                location.reload()
            }

        } else {

            let firstNo = date[2]
            let secondNo = date[3]
            let thirdNo = 2
            let fourthNo = date[6]
            let fifthNo = date[8]
            let sixthNo = date[9]

            let seventhNo = Math.floor(Math.random() * (1 - 9) + 9)
            let eightNo = Math.floor(Math.random() * (1 - 9) + 9)
            let ninthNo = Math.floor(Math.random() * (1 - 9) + 9)
            let tenthNo = Math.floor(Math.random() * (1 - 9) + 9)

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

            const peselRD = firstNo + secondNo + thirdNo + fourthNo + fifthNo + sixthNo
                + seventhNo.toString() + eightNo.toString() + ninthNo.toString()
                + tenthNo.toString() + eleventhNo.toString()

            document.getElementById('newGD').innerHTML += peselRD

            if (peselRD[9] % 2 == 0) {
                document.getElementById('message').innerHTML += "(PESEL dla kobiety)"

            } else {
                document.getElementById('message').innerHTML += "(PESEL dla mężczyzny)"
            }

            buttonGD.innerHTML = "Odśwież"
            buttonGD.removeEventListener("click", getPeselFromGivenDate)

            buttonGD.addEventListener("click", reload)

            function reload() {
                location.reload()
            }

        }
    }
}