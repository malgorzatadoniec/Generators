let buttonFN = document.getElementById("buttonFN")

let femaleFName = ['Anna', 'Joanna', 'Małgorzata', 'Dorota', 'Aleksandra', 'Dominika', 'Stefania', 'Franciszka', 'Natalia', 'Katarzyna', 'Zofia', 'Zuzanna', 'Marta', 'Weronika', 'Patrycja', 'Karolina', 'Urszula']
let femaleLName = ['Kowalik', 'Kowalska', 'Michalska', 'Suska', 'Grabowska', 'Bojanowska', 'Adamowska', 'Więcławska', 'Solejukowa', 'Wilska', 'Jędrzejewska', 'Jędrzejczyk', 'Andrzejewska', 'Demarczyk', 'Wiśniewska']
let maleFName = ['Jakub', 'Andrzej', 'Tomasz', 'Stanisław', 'Mateusz', 'Mariusz', 'Wojciech', 'Krzysztof', 'Bartosz', 'Bartłomiej', 'Grzegorz', 'Jerzy', 'Karol', 'Kacper', 'Paweł', 'Piotr', 'Jan', 'Witold', 'Jacek']
let maleLName = ['Kowal', 'Kowalewski', 'Michalski', 'Woronicz', 'Grabowski', 'Bojanowski', 'Adamowski', 'Więcławski', 'Solejuk', 'Wilski', 'Jędrzejewski', 'Pawłowski', 'Andrzejewski', 'Rylski', 'Wiśniewski']

function getFullName() {

    if (document.getElementById('gender').value == 'female') {
        const fFNameIndex = Math.floor(Math.random() * femaleFName.length)
        const fLNameIndex = Math.floor(Math.random() * femaleLName.length)
        const fFName = femaleFName[fFNameIndex]
        const fLName = femaleLName[fLNameIndex]

        let fullName = fFName + " " + fLName
        document.getElementById('newFN').innerHTML += fullName

    } else if (document.getElementById('gender').value == 'male') {
        const mFNameIndex = Math.floor(Math.random() * maleFName.length)
        const mLNameIndex = Math.floor(Math.random() * maleLName.length)
        const mFName = maleFName[mFNameIndex]
        const mLName = maleLName[mLNameIndex]

        let fullName = mFName + " " + mLName
        document.getElementById('newFN').innerHTML += fullName

    } else {
        document.getElementById('newFN').innerHTML += "Wybierz płeć"
    }

    buttonFN.innerHTML = "Odśwież"
    buttonFN.removeEventListener("click", getFullName)

    buttonFN.addEventListener("click", reload)


    function reload() {
        location.reload()
    }
}

