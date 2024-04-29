let buttonM = document.getElementById("buttonM")

buttonM.addEventListener("click", getMail)

let firstPart = ['test', 'jakkowalski', 'testowo', 'testing', 'mailtestowy', 'johndoe123', 'anna.nowak75']
let middlePart = ['@test', '@mail', '@poczta', '@net', '@email', '@domena']
let lastPart = ['.pl', '.com', '.eu', '.org']

function getMail() {

    const fPIndex = Math.floor(Math.random() * firstPart.length)
    const mailBegining = firstPart[fPIndex]

    const mPIndex = Math.floor(Math.random() * middlePart.length)
    const mailMiddle = middlePart[mPIndex]

    const lPIndex = Math.floor(Math.random() * lastPart.length)
    const mailLast = lastPart[lPIndex]

    const mail = mailBegining + mailMiddle + mailLast

    let newMail = document.getElementById('newMail')
    newMail.innerHTML += mail


    buttonM.innerHTML = "Odśwież"
    buttonM.removeEventListener("click", getMail)

    buttonM.addEventListener("click", reload)


    function reload() {
        location.reload()
    }
}

