let buttonA = document.getElementById("buttonA")

buttonA.addEventListener("click", getAddressData)

let cityNameList = ['Kraków', 'Poznań', 'Wrocław', 'Warszawa', 'Toruń', 'Lublin', 'Bydgoszcz', 'Katowice', 'Gdańsk', 'Gdynia', 'Sopot', 'Chorzów', 'Grodzisk Mazowiedzki', 'Ustrzyki Górne', 'Solina', 'Sosnowiec', 'Trzebinia', 'Grodzisk Mazowiecki', 'Kołobrzeg', 'Szczecin', 'Radom', 'Kielce', 'Węgorzewo', 'Mikołajki', 'Bartoszyce', 'Bytom', 'Proszowice', 'Opatkowice'];
let streetNameList = ['Grodzka', '3 Maja', 'Korfantego', 'Młyńska', 'Szewska', 'Warszawska', 'Pawia', 'Słoneczna', 'Łąkowa', 'Mickiewicza', 'Wietrzna', 'Kościuszki', 'Siemiradzkiego', 'Wesoła', 'Fiołkowa', 'Modrzejewskiej', 'Sienna', 'Senatorska', 'Koło', 'Wrocławska', 'Jagiellońska', 'Stradomska', 'Basztowa', '1 Maja', 'Zamkowa', '29 Listopada', 'Frycza', 'Focha'];

function getAddressData() {


    const cityIndex = Math.floor(Math.random() * cityNameList.length);
    const streetIndex = Math.floor(Math.random() * streetNameList.length);
    const cityName = cityNameList[cityIndex];
    const streetName = streetNameList[streetIndex];

    const houseNumber = Math.floor(Math.random() * 200) + 1;

    const postalCodeFirstPart = Math.floor(Math.random() * 90) + 10;
    const postalCodeSecondPart = Math.floor(Math.random() * 900) + 100;
    const postalCode = postalCodeFirstPart + "-" + postalCodeSecondPart;

    const address = cityName + ", " + "ulica " + streetName + ", " + houseNumber + ", " + postalCode

    let newAdress = document.getElementById('newAdress')
    newAdress.innerHTML += address


    buttonA.innerHTML = "Odśwież"
    buttonA.removeEventListener("click", getAddressData)

    buttonA.addEventListener("click", reload)


    function reload() {
        location.reload()
    }
}


