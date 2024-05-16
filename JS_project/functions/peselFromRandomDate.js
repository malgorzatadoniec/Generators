let buttonRP = document.getElementById("buttonRP")

buttonRP.addEventListener("click", getPeselFromRandomDate)


function getPeselFromRandomDate() {

    function subtractYears(date, years) {
        date.setFullYear(date.getFullYear() - years);
        return date;
    }
    const date = new Date()
    const newDate = subtractYears(date, Math.floor(Math.random() * (0 - 124) + 124))

    const shortDate = newDate.toISOString().substring(0, 10)

    let newYear = shortDate[0]
    let newMonth = shortDate[5]


    if (newYear == 1) {

        let firstNo = shortDate[2]
        let secondNo = shortDate[3]
        let thirdNo = shortDate[5]
        let fourthNo = shortDate[6]
        let fifthNo = shortDate[8]
        let sixthNo = shortDate[9]

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

        document.getElementById('newRP').innerHTML += peselRD

        if (peselRD[9] % 2 == 0) {
            document.getElementById('message').innerHTML += "(PESEL dla kobiety)"

        } else {
            document.getElementById('message').innerHTML += "(PESEL dla mężczyzny)"
        }

        buttonRP.innerHTML = "Odśwież"
        buttonRP.removeEventListener("click", getPeselFromRandomDate)

        buttonRP.addEventListener("click", reload)

        function reload() {
            location.reload()
        }

    } else {

        if (newMonth != 0) {

            let firstNo = shortDate[2]
            let secondNo = shortDate[3]
            let thirdNo = 3
            let fourthNo = shortDate[6]
            let fifthNo = shortDate[8]
            let sixthNo = shortDate[9]

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

            document.getElementById('newRP').innerHTML += peselRD

            if (peselRD[9] % 2 == 0) {
                document.getElementById('message').innerHTML += "(PESEL dla kobiety)"

            } else {
                document.getElementById('message').innerHTML += "(PESEL dla mężczyzny)"
            }

            buttonRP.innerHTML = "Odśwież"
            buttonRP.removeEventListener("click", getPeselFromRandomDate)

            buttonRP.addEventListener("click", reload)

            function reload() {
                location.reload()
            }

        } else {

            let firstNo = shortDate[2]
            let secondNo = shortDate[3]
            let thirdNo = 2
            let fourthNo = shortDate[6]
            let fifthNo = shortDate[8]
            let sixthNo = shortDate[9]

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

            document.getElementById('newRP').innerHTML += peselRD

            if (peselRD[9] % 2 == 0) {
                document.getElementById('message').innerHTML += "(PESEL dla kobiety)"

            } else {
                document.getElementById('message').innerHTML += "(PESEL dla mężczyzny)"
            }

            buttonRP.innerHTML = "Odśwież"
            buttonRP.removeEventListener("click", getPeselFromRandomDate)

            buttonRP.addEventListener("click", reload)

            function reload() {
                location.reload()
            }

        }
    }
}
