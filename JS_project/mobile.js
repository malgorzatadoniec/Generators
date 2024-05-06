let buttonMob = document.getElementById("buttonMob")

function getMobile() {

    const country = document.getElementById('mobile').value

    switch (country) {
        case "PL":
            const firstPartPL = "+48"
            const secondPartPL = Math.floor(Math.random() * 900) + 100
            const thirdPartPL = Math.floor(Math.random() * 900) + 100
            const fourthPartPL = Math.floor(Math.random() * 900) + 100

            let mobilePl = firstPartPL + " " + secondPartPL + " " + thirdPartPL + " " + fourthPartPL

            document.getElementById('newMobile').innerHTML += mobilePl
            break

        case "GB":
            const firstPartGB = "+44 7"
            const secondPartGB = Math.floor(Math.random() * 90) + 10
            const thirdPartGB = Math.floor(Math.random() * 900) + 100
            const fourthPartGB = Math.floor(Math.random() * 900) + 100

            const mobileGB = firstPartGB + secondPartGB + " " + thirdPartGB + " " + fourthPartGB

            document.getElementById('newMobile').innerHTML += mobileGB
            break

        case "FR":
            const firstPartFR = "+33"
            const secondPartFR = Math.floor(Math.random() * 9) + 1
            const thirdPartFR = Math.floor(Math.random() * 90) + 10
            const fourthPartFR = Math.floor(Math.random() * 90) + 10
            const fifthPartFR = Math.floor(Math.random() * 90) + 10
            const sixthPartFR = Math.floor(Math.random() * 90) + 10

            const mobileFR = firstPartFR + " " + secondPartFR + " " + thirdPartFR + " " + fourthPartFR + " " + fifthPartFR + " " + sixthPartFR

            document.getElementById('newMobile').innerHTML += mobileFR
            break

        case "DE":
            const firstPartDE = "+49"
            const secondPartDE = Math.floor(Math.random() * 900) + 100
            const thirdPartDE = Math.floor(Math.random() * 9000000) + 1000000

            const mobileDE = firstPartDE + " " + secondPartDE + " " + thirdPartDE

            document.getElementById('newMobile').innerHTML += mobileDE
            break

        default:

            document.getElementById('newMobile').innerHTML += "Wybierz kraj"
            break
    }


    buttonMob.innerHTML = "Odśwież"
    buttonMob.removeEventListener("click", getMobile)

    buttonMob.addEventListener("click", reload)


    function reload() {
        location.reload()
    }
}

