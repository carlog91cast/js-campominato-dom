const playBtn = document.getElementById('btn-genera');
const gridContainer = document.getElementById('mine-camp');

// creo i songoli quadrati
playBtn.addEventListener('click', function () {
    gridContainer.innerHTML = "";
    for (let i = 0; i < 100; i++) {

        // inserisco la funzione che crea i quadrati
        inSquare = createSquares();
        // inserisco la funzione nel button

        // inserisco i quadrati nell'html con append
        inSquare.innerHTML = i;
        gridContainer.append(inSquare);


    }

});


// in una fuzione creo i singoli quadrati

function createSquares() {

    const square = document.createElement('div')
    square.classList.add('square-grid');
    square.addEventListener('click', function () {
        square.classList.toggle('active');
    });


    return square;

};

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe

// creo un array vuoto che deve contenere le bombe

const arrayBomb = [getRandomBombNumber(1, 100)];

// genero un numero randomico da 1 a 16 da inserire in una funzione che richiamero poi nell'addevenlistener di cui sopra

function getRandomBombNumber(blacklist, minNum, maxNum) {
    index = 0;
    isBombNum = false
    while (index < 16 && isBombNum === false) {
        let randomNumber;
        randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
        console.log(randomNumber);
        i++;
        if (blacklist.includes(randomNumber) === false) {
            isBombNum = true;
        }
    }




}