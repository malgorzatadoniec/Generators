let buttonA = document.getElementById("buttonA");

buttonA.addEventListener("click", getAddressData);

let cityNameList = ['Wrocław', 'Bydgoszcz', 'Toruń', 'Lublin', 'Gorzów Wielkopolski', 'Zielona Góra', 'Łódź', 'Kraków', 'Warszawa', 'Opole', 'Rzeszów', 'Białystok', 'Gdańsk', 'Katowice', 'Kielce', 'Olsztyn', 'Poznań', 'Szczecin'];
let streetNameList = ['Grodzka', '3 Maja', 'Korfantego', 'Młyńska', 'Szewska', 'Warszawska', 'Pawia', 'Słoneczna', 'Łąkowa', 'Mickiewicza', 'Wietrzna', 'Kościuszki', 'Siemiradzkiego', 'Wesoła', 'Fiołkowa', 'Modrzejewskiej', 'Sienna', 'Senatorska', 'Koło', 'Wrocławska', 'Jagiellońska', 'Stradomska', 'Basztowa', '1 Maja', 'Zamkowa', '29 Listopada', 'Frycza', 'Focha'];

function getStreet() {
    const streetIndex = Math.floor(Math.random() * streetNameList.length);
    const streetName = streetNameList[streetIndex];
    return streetName;
}

function getPostalCode(firstPart) {
    const postalCodeFirstPart = firstPart;
    const postalCodeSecondPart = Math.floor(Math.random() * 900) + 100;
    const postalCode = postalCodeFirstPart + "-" + postalCodeSecondPart;
    return postalCode;
}

function getAddressData() {

    const cityIndex = Math.floor(Math.random() * cityNameList.length);
    const cityName = cityNameList[cityIndex];

    switch (cityName) {
        case 'Wrocław':

            const streetNameWr = getStreet();
            const houseNumberWr = Math.floor(Math.random() * 200) + 1;
            const postalCodeWr = getPostalCode(50);
            const addressWr = cityName + ", " + "ulica " + streetNameWr + ", " + houseNumberWr + ", " + postalCodeWr;
            document.getElementById('newAdress').innerHTML += addressWr;
            break;

        case 'Bydgoszcz':
            const streetNameByd = getStreet();
            const houseNumberByd = Math.floor(Math.random() * 200) + 1;
            const postalCodeByd = getPostalCode(85);
            const addressByd = cityName + ", " + "ulica " + streetNameByd + ", " + houseNumberByd + ", " + postalCodeByd;
            document.getElementById('newAdress').innerHTML += addressByd;
            break;

        case 'Toruń':
            const streetNameTr = getStreet();
            const houseNumberTr = Math.floor(Math.random() * 200) + 1;
            const postalCodeTr = getPostalCode(87);
            const addressTr = cityName + ", " + "ulica " + streetNameTr + ", " + houseNumberTr + ", " + postalCodeTr;
            document.getElementById('newAdress').innerHTML += addressTr;
            break;

        case 'Lublin':
            const streetNameLb = getStreet();
            const houseNumberLb = Math.floor(Math.random() * 200) + 1;
            const postalCodeLb = getPostalCode(20);
            const addressLb = cityName + ", " + "ulica " + streetNameLb + ", " + houseNumberLb + ", " + postalCodeLb;
            document.getElementById('newAdress').innerHTML += addressLb;
            break;

        case 'Gorzów Wielkopolski':
            const streetNameGw = getStreet();
            const houseNumberGw = Math.floor(Math.random() * 200) + 1;
            const postalCodeGw = getPostalCode(66);
            const addressGw = cityName + ", " + "ulica " + streetNameGw + ", " + houseNumberGw + ", " + postalCodeGw;
            document.getElementById('newAdress').innerHTML += addressGw;
            break;

        case 'Zielona Góra':
            const streetNameZg = getStreet();
            const houseNumberZg = Math.floor(Math.random() * 200) + 1;
            const postalCodeZg = getPostalCode(65);
            const addressZg = cityName + ", " + "ulica " + streetNameZg + ", " + houseNumberZg + ", " + postalCodeZg;
            document.getElementById('newAdress').innerHTML += addressZg;
            break;

        case 'Łódź':
            const streetNameLo = getStreet();
            const houseNumberLo = Math.floor(Math.random() * 200) + 1;
            const postalCodeLo = getPostalCode(90);
            const addressLo = cityName + ", " + "ulica " + streetNameLo + ", " + houseNumberLo + ", " + postalCodeLo;
            document.getElementById('newAdress').innerHTML += addressLo;
            break;

        case 'Kraków':
            const streetNameKr = getStreet();
            const houseNumberKr = Math.floor(Math.random() * 200) + 1;
            const postalCodeKr = getPostalCode(30);
            const addressKr = cityName + ", " + "ulica " + streetNameKr + ", " + houseNumberKr + ", " + postalCodeKr;
            document.getElementById('newAdress').innerHTML += addressKr;
            break;

        case 'Warszawa':
            const streetNameWa = getStreet();
            const houseNumberWa = Math.floor(Math.random() * 200) + 1;
            const postalCodeWa = getPostalCode('00');
            const addressWa = cityName + ", " + "ulica " + streetNameWa + ", " + houseNumberWa + ", " + postalCodeWa;
            document.getElementById('newAdress').innerHTML += addressWa;
            break;

        case 'Opole':
            const streetNameOp = getStreet();
            const houseNumberOp = Math.floor(Math.random() * 200) + 1;
            const postalCodeOp = getPostalCode(45);
            const addressOp = cityName + ", " + "ulica " + streetNameOp + ", " + houseNumberOp + ", " + postalCodeOp;
            document.getElementById('newAdress').innerHTML += addressOp;
            break;

        case 'Rzeszów':
            const streetNameRz = getStreet();
            const houseNumberRz = Math.floor(Math.random() * 200) + 1;
            const postalCodeRz = getPostalCode(35);
            const addressRz = cityName + ", " + "ulica " + streetNameRz + ", " + houseNumberRz + ", " + postalCodeRz;
            document.getElementById('newAdress').innerHTML += addressRz;
            break;

        case 'Białystok':
            const streetNameBs = getStreet();
            const houseNumberBs = Math.floor(Math.random() * 200) + 1;
            const postalCodeBs = getPostalCode(15);
            const addressBs = cityName + ", " + "ulica " + streetNameBs + ", " + houseNumberBs + ", " + postalCodeBs;
            document.getElementById('newAdress').innerHTML += addressBs;
            break;

        case 'Gdańsk':
            const streetNameGd = getStreet();
            const houseNumberGd = Math.floor(Math.random() * 200) + 1;
            const postalCodeGd = getPostalCode(80);
            const addressGd = cityName + ", " + "ulica " + streetNameGd + ", " + houseNumberGd + ", " + postalCodeGd;
            document.getElementById('newAdress').innerHTML += addressGd;
            break;

        case 'Katowice':
            const streetNameKt = getStreet();
            const houseNumberKt = Math.floor(Math.random() * 200) + 1;
            const postalCodeKt = getPostalCode(40);
            const addressKt = cityName + ", " + "ulica " + streetNameKt + ", " + houseNumberKt + ", " + postalCodeKt;
            document.getElementById('newAdress').innerHTML += addressKt;
            break;

        case 'Kielce':
            const streetNameKc = getStreet();
            const houseNumberKc = Math.floor(Math.random() * 200) + 1;
            const postalCodeKc = getPostalCode(25);
            const addressKc = cityName + ", " + "ulica " + streetNameKc + ", " + houseNumberKc + ", " + postalCodeKc;
            document.getElementById('newAdress').innerHTML += addressKc;
            break;

        case 'Olsztyn':
            const streetNameOl = getStreet();
            const houseNumberOl = Math.floor(Math.random() * 200) + 1;
            const postalCodeOl = getPostalCode(10);
            const addressOl = cityName + ", " + "ulica " + streetNameOl + ", " + houseNumberOl + ", " + postalCodeOl;
            document.getElementById('newAdress').innerHTML += addressOl;
            break;

        case 'Poznań':
            const streetNamePo = getStreet();
            const houseNumberPo = Math.floor(Math.random() * 200) + 1;
            const postalCodePo = getPostalCode(60);
            const addressPo = cityName + ", " + "ulica " + streetNamePo + ", " + houseNumberPo + ", " + postalCodePo;
            document.getElementById('newAdress').innerHTML += addressPo;
            break;

        case 'Szczecin':
            const streetNameSz = getStreet();
            const houseNumberSz = Math.floor(Math.random() * 200) + 1;
            const postalCodeSz = getPostalCode(70);
            const addressSz = cityName + ", " + "ulica " + streetNameSz + ", " + houseNumberSz + ", " + postalCodeSz;
            document.getElementById('newAdress').innerHTML += addressSz;
            break;

        default:
            document.getElementById('newAdress').innerHTML += "Błąd";
    }

    buttonA.innerHTML = "Odśwież";
    buttonA.removeEventListener("click", getAddressData);

    buttonA.addEventListener("click", reload);

    function reload() {
        location.reload();
    }
}