let buttonA = document.getElementById("buttonA")

buttonA.addEventListener("click", getAddressData)

let cityNameList = ['Wrocław', 'Bydgoszcz', 'Toruń', 'Lublin', 'Gorzów Wielkopolski', 'Zielona Góra', 'Łódź', 'Kraków', 'Warszawa', 'Opole', 'Rzeszów', 'Białystok', 'Gdańsk', 'Katowice', 'Kielce', 'Olsztyn', 'Poznań', 'Szczecin'];
let streetNameList = ['Grodzka', '3 Maja', 'Korfantego', 'Młyńska', 'Szewska', 'Warszawska', 'Pawia', 'Słoneczna', 'Łąkowa', 'Mickiewicza', 'Wietrzna', 'Kościuszki', 'Siemiradzkiego', 'Wesoła', 'Fiołkowa', 'Modrzejewskiej', 'Sienna', 'Senatorska', 'Koło', 'Wrocławska', 'Jagiellońska', 'Stradomska', 'Basztowa', '1 Maja', 'Zamkowa', '29 Listopada', 'Frycza', 'Focha'];

function getAddressData() {


    const cityIndex = Math.floor(Math.random() * cityNameList.length);
    const cityName = cityNameList[cityIndex];

    switch (cityName) {
        case 'Wrocław':

            const streetIndexWr = Math.floor(Math.random() * streetNameList.length);
            const streetNameWr = streetNameList[streetIndexWr];
            const houseNumberWr = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartWr = 50
            const postalCodeSecondPartWr = Math.floor(Math.random() * 900) + 100;
            const postalCodeWr = postalCodeFirstPartWr + "-" + postalCodeSecondPartWr;

            const addressWr = cityName + ", " + "ulica " + streetNameWr + ", " + houseNumberWr + ", " + postalCodeWr

            document.getElementById('newAdress').innerHTML += addressWr

            break
        case 'Bydgoszcz':
            const streetIndexByd = Math.floor(Math.random() * streetNameList.length);
            const streetNameByd = streetNameList[streetIndexByd];
            const houseNumberByd = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartByd = 85
            const postalCodeSecondPartByd = Math.floor(Math.random() * 900) + 100;
            const postalCodeByd = postalCodeFirstPartByd + "-" + postalCodeSecondPartByd;

            const addressByd = cityName + ", " + "ulica " + streetNameByd + ", " + houseNumberByd + ", " + postalCodeByd

            document.getElementById('newAdress').innerHTML += addressByd
            break

        case 'Toruń':
            const streetIndexTr = Math.floor(Math.random() * streetNameList.length);
            const streetNameTr = streetNameList[streetIndexTr];
            const houseNumberTr = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartTr = 87
            const postalCodeSecondPartTr = Math.floor(Math.random() * 900) + 100;
            const postalCodeTr = postalCodeFirstPartTr + "-" + postalCodeSecondPartTr;

            const addressTr = cityName + ", " + "ulica " + streetNameTr + ", " + houseNumberTr + ", " + postalCodeTr

            document.getElementById('newAdress').innerHTML += addressTr
            break

        case 'Lublin':
            const streetIndexLb = Math.floor(Math.random() * streetNameList.length);
            const streetNameLb = streetNameList[streetIndexLb];
            const houseNumberLb = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartLb = 20
            const postalCodeSecondPartLb = Math.floor(Math.random() * 900) + 100;
            const postalCodeLb = postalCodeFirstPartLb + "-" + postalCodeSecondPartLb;

            const addressLb = cityName + ", " + "ulica " + streetNameLb + ", " + houseNumberLb + ", " + postalCodeLb

            document.getElementById('newAdress').innerHTML += addressLb
            break

        case 'Gorzów Wielkopolski':
            const streetIndexGw = Math.floor(Math.random() * streetNameList.length);
            const streetNameGw = streetNameList[streetIndexGw];
            const houseNumberGw = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartGw = 66
            const postalCodeSecondPartGw = Math.floor(Math.random() * 900) + 100;
            const postalCodeGw = postalCodeFirstPartGw + "-" + postalCodeSecondPartGw;

            const addressGw = cityName + ", " + "ulica " + streetNameGw + ", " + houseNumberGw + ", " + postalCodeGw

            document.getElementById('newAdress').innerHTML += addressGw
            break

        case 'Zielona Góra':
            const streetIndexZg = Math.floor(Math.random() * streetNameList.length);
            const streetNameZg = streetNameList[streetIndexZg];
            const houseNumberZg = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartZg = 65
            const postalCodeSecondPartZg = Math.floor(Math.random() * 900) + 100;
            const postalCodeZg = postalCodeFirstPartZg + "-" + postalCodeSecondPartZg;

            const addressZg = cityName + ", " + "ulica " + streetNameZg + ", " + houseNumberZg + ", " + postalCodeZg

            document.getElementById('newAdress').innerHTML += addressZg
            break

        case 'Łódź':
            const streetIndexLo = Math.floor(Math.random() * streetNameList.length);
            const streetNameLo = streetNameList[streetIndexLo];
            const houseNumberLo = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartLo = 90
            const postalCodeSecondPartLo = Math.floor(Math.random() * 900) + 100;
            const postalCodeLo = postalCodeFirstPartLo + "-" + postalCodeSecondPartLo;

            const addressLo = cityName + ", " + "ulica " + streetNameLo + ", " + houseNumberLo + ", " + postalCodeLo

            document.getElementById('newAdress').innerHTML += addressLo
            break


        case 'Kraków':
            const streetIndexKr = Math.floor(Math.random() * streetNameList.length);
            const streetNameKr = streetNameList[streetIndexKr];
            const houseNumberKr = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartKr = 30
            const postalCodeSecondPartKr = Math.floor(Math.random() * 900) + 100;
            const postalCodeKr = postalCodeFirstPartKr + "-" + postalCodeSecondPartKr;

            const addressKr = cityName + ", " + "ulica " + streetNameKr + ", " + houseNumberKr + ", " + postalCodeKr

            document.getElementById('newAdress').innerHTML += addressKr
            break

        case 'Warszawa':
            const streetIndexWa = Math.floor(Math.random() * streetNameList.length);
            const streetNameWa = streetNameList[streetIndexWa];
            const houseNumberWa = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartWa = '00'
            const postalCodeSecondPartWa = Math.floor(Math.random() * 900) + 100;
            const postalCodeWa = postalCodeFirstPartWa + "-" + postalCodeSecondPartWa;

            const addressWa = cityName + ", " + "ulica " + streetNameWa + ", " + houseNumberWa + ", " + postalCodeWa

            document.getElementById('newAdress').innerHTML += addressWa
            break

        case 'Opole':
            const streetIndexOp = Math.floor(Math.random() * streetNameList.length);
            const streetNameOp = streetNameList[streetIndexOp];
            const houseNumberOp = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartOp = 45
            const postalCodeSecondPartOp = Math.floor(Math.random() * 900) + 100;
            const postalCodeOp = postalCodeFirstPartOp + "-" + postalCodeSecondPartOp;

            const addressOp = cityName + ", " + "ulica " + streetNameOp + ", " + houseNumberOp + ", " + postalCodeOp

            document.getElementById('newAdress').innerHTML += addressOp
            break

        case 'Rzeszów':
            const streetIndexRz = Math.floor(Math.random() * streetNameList.length);
            const streetNameRz = streetNameList[streetIndexRz];
            const houseNumberRz = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartRz = 35
            const postalCodeSecondPartRz = Math.floor(Math.random() * 900) + 100;
            const postalCodeRz = postalCodeFirstPartRz + "-" + postalCodeSecondPartRz;

            const addressRz = cityName + ", " + "ulica " + streetNameRz + ", " + houseNumberRz + ", " + postalCodeRz

            document.getElementById('newAdress').innerHTML += addressRz
            break

        case 'Białystok':
            const streetIndexBs = Math.floor(Math.random() * streetNameList.length);
            const streetNameBs = streetNameList[streetIndexBs];
            const houseNumberBs = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartBs = 15
            const postalCodeSecondPartBs = Math.floor(Math.random() * 900) + 100;
            const postalCodeBs = postalCodeFirstPartBs + "-" + postalCodeSecondPartBs;

            const addressBs = cityName + ", " + "ulica " + streetNameBs + ", " + houseNumberBs + ", " + postalCodeBs

            document.getElementById('newAdress').innerHTML += addressBs
            break

        case 'Gdańsk':
            const streetIndexGd = Math.floor(Math.random() * streetNameList.length);
            const streetNameGd = streetNameList[streetIndexGd];
            const houseNumberGd = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartGd = 80
            const postalCodeSecondPartGd = Math.floor(Math.random() * 900) + 100;
            const postalCodeGd = postalCodeFirstPartGd + "-" + postalCodeSecondPartGd;

            const addressGd = cityName + ", " + "ulica " + streetNameGd + ", " + houseNumberGd + ", " + postalCodeGd

            document.getElementById('newAdress').innerHTML += addressGd
            break

        case 'Katowice':
            const streetIndexKt = Math.floor(Math.random() * streetNameList.length);
            const streetNameKt = streetNameList[streetIndexKt];
            const houseNumberKt = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartKt = 40
            const postalCodeSecondPartKt = Math.floor(Math.random() * 900) + 100;
            const postalCodeKt = postalCodeFirstPartKt + "-" + postalCodeSecondPartKt;

            const addressKt = cityName + ", " + "ulica " + streetNameKt + ", " + houseNumberKt + ", " + postalCodeKt

            document.getElementById('newAdress').innerHTML += addressKt
            break


        case 'Kielce':
            const streetIndexKc = Math.floor(Math.random() * streetNameList.length);
            const streetNameKc = streetNameList[streetIndexKc];
            const houseNumberKc = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartKc = 25
            const postalCodeSecondPartKc = Math.floor(Math.random() * 900) + 100;
            const postalCodeKc = postalCodeFirstPartKc + "-" + postalCodeSecondPartKc;

            const addressKc = cityName + ", " + "ulica " + streetNameKc + ", " + houseNumberKc + ", " + postalCodeKc

            document.getElementById('newAdress').innerHTML += addressKc
            break

        case 'Olsztyn':
            const streetIndexOl = Math.floor(Math.random() * streetNameList.length);
            const streetNameOl = streetNameList[streetIndexOl];
            const houseNumberOl = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartOl = 10
            const postalCodeSecondPartOl = Math.floor(Math.random() * 900) + 100;
            const postalCodeOl = postalCodeFirstPartOl + "-" + postalCodeSecondPartOl;

            const addressOl = cityName + ", " + "ulica " + streetNameOl + ", " + houseNumberOl + ", " + postalCodeOl

            document.getElementById('newAdress').innerHTML += addressOl
            break

        case 'Poznań':
            const streetIndexPo = Math.floor(Math.random() * streetNameList.length);
            const streetNamePo = streetNameList[streetIndexPo];
            const houseNumberPo = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartPo = 60
            const postalCodeSecondPartPo = Math.floor(Math.random() * 900) + 100;
            const postalCodePo = postalCodeFirstPartPo + "-" + postalCodeSecondPartPo;

            const addressPo = cityName + ", " + "ulica " + streetNamePo + ", " + houseNumberPo + ", " + postalCodePo

            document.getElementById('newAdress').innerHTML += addressPo
            break


        case 'Szczecin':
            const streetIndexSz = Math.floor(Math.random() * streetNameList.length);
            const streetNameSz = streetNameList[streetIndexSz];
            const houseNumberSz = Math.floor(Math.random() * 200) + 1;

            const postalCodeFirstPartSz = 70
            const postalCodeSecondPartSz = Math.floor(Math.random() * 900) + 100;
            const postalCodeSz = postalCodeFirstPartSz + "-" + postalCodeSecondPartSz;

            const addressSz = cityName + ", " + "ulica " + streetNameSz + ", " + houseNumberSz + ", " + postalCodeSz

            document.getElementById('newAdress').innerHTML += addressSz
            break


        default:
            document.getElementById('newAdress').innerHTML += "Błąd"
    }



    buttonA.innerHTML = "Odśwież"
    buttonA.removeEventListener("click", getAddressData)

    buttonA.addEventListener("click", reload)


    function reload() {
        location.reload()
    }
}


