const heightInput = document.querySelector('.height-input');
const weightInput = document.querySelector('.weight-input');
const calcBtn = document.querySelector('.calculate');
const clearBtn = document.querySelector('.clear')
const result = document.querySelector('.result');
const resultText = document.querySelector('.your-result-text');
const divResults = document.querySelector('.results');


function loadPage(){

    divResults.innerHTML = JSON.parse(localStorage.getItem('state'));

}

loadPage();

const calculate = () => {


    if(heightInput.value === '' || weightInput.value === '') {
        // const error = document.body.createElement('p');
        // document.body.appendChild(error);
        //
        // error.innerText = 'Musisz wypłełnić wszystkie pola !';
        // error.style.color = 'red';
        // error.fontSize = '20px'
        // setTimeout(()=> {
        //     error.remove();
        // }, 1200);
        alert('Musisz wypełnić wszystkie pola !')


    } else {

        let calcResult = (Number(weightInput.value) / (Number(heightInput.value)) ** 2) * 10000;
        result.innerHTML = Number(calcResult.toFixed(2));
        resultText.removeAttribute('style');

        if (result.innerHTML <= 18.5) {
            const data = new Date();
            const opcje = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric',
                minute: 'numeric', second: 'numeric', hour12: false };
            const pelnaData = data.toLocaleString('pl-PL', opcje);
            const newP = document.createElement('p');
            const hr = document.createElement('hr');


            divResults.appendChild(newP);
            newP.innerHTML = `Twój BMI: <b>${calcResult.toFixed(2)}</b> wskazuje na <b> NIEDOWAGĘ </b>. <br>Zaleca się abyś skontaktował się z lekarzem lub
            dietetykiem w celu podjęcia odpowiedniej terapii zwiększenia Twojej masy ciała !
            <br><b><p style="font-size: 15px; color: darkred">${pelnaData}</p></b>`;
            newP.style.fontSize = '25px';
            newP.style.fontFamily = 'sans-serif';
            divResults.appendChild(hr);

            const saveState = () => {
                const state = JSON.stringify(divResults.innerHTML);
                localStorage.setItem('state', state)
            }

            saveState();


        } else if (result.innerHTML > 18.5 && result.innerHTML <= 24.9) {
            const data = new Date();
            const opcje = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric',
                minute: 'numeric', second: 'numeric', hour12: false };
            const pelnaData = data.toLocaleString('pl-PL', opcje);
            const newP = document.createElement('p');
            const hr = document.createElement('hr');

            divResults.appendChild(newP);
            newP.innerHTML = `<b>Gratulacje</b> ! Twój wynik BMI: <b>${calcResult.toFixed(2)}</b>, znajduję się w normie !
            <br><b><p style="font-size: 15px; color: darkred">${pelnaData}</p></b>`;
            newP.style.fontSize = '25px';
            newP.style.fontFamily = 'sans-serif';
            divResults.appendChild(hr);

            const saveState = () => {
                const state = JSON.stringify(divResults.innerHTML)
                localStorage.setItem('state', state)
            }

            saveState();

        } else if (result.innerHTML > 25 && result.innerHTML <= 29.9) {
            const data = new Date();
            const opcje = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric',
                minute: 'numeric', second: 'numeric', hour12: false };
            const pelnaData = data.toLocaleString('pl-PL', opcje);
            const newP = document.createElement('p');
            const hr = document.createElement('hr');
            divResults.appendChild(newP);
            newP.innerHTML = `Twój BMI: <b>${calcResult.toFixed(2)}</b>, wskazuje na <b> NADWAGĘ </b>. <br>Zaleca się abyś podjął odpowiednie kroki jak 
        aktywność fizyczna oraz odpowiednio stosowana dieta by zejść do normy BMI (uzyskać odpowiednią wagę masy ciała)!
        <br><b><p style="font-size: 15px; color: darkred">${pelnaData}</p></b>`;
            newP.style.fontSize = '25px';
            newP.style.fontFamily = 'sans-serif';
            divResults.appendChild(hr);

            const saveState = () => {
                const state = JSON.stringify(divResults.innerHTML)
                localStorage.setItem('state', state)
            }

            saveState();

        } else if (result.innerHTML > 30) {
            const data = new Date();
            const opcje = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric',
                minute: 'numeric', second: 'numeric', hour12: false };
            const pelnaData = data.toLocaleString('pl-PL', opcje);
            const newP = document.createElement('p');
            const hr = document.createElement('hr');

            divResults.appendChild(newP);
            newP.innerHTML = `Twój BMI: <b>${calcResult.toFixed(2)}</b>, wskazuje na <b> OTYŁOŚĆ </b> <br>Prosze skonsultuj się z lekarzem lub
            dietetykiem w celu ustalenia rozwiązania problemu !
            <br><b><p style="font-size: 15px; color: darkred">${pelnaData}</p></b>`;
            newP.style.fontSize = '25px';
            newP.style.fontFamily = 'sans-serif';
            divResults.appendChild(hr);

            const saveState = () => {
                const state = JSON.stringify(divResults.innerHTML)
                localStorage.setItem('state', state)
            }

            saveState();
        }

    }
}

function clearHistory () {
    localStorage.clear();
    divResults.innerHTML = '';
}

calcBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', clearHistory)
document.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        calculate();
    }
});