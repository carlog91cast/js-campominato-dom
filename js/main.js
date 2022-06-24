const playBtn = document.getElementById('btn-genera');
const gridContainer = document.getElementById('mine-camp');



// creo i songoli quadrati
playBtn.addEventListener('click', function () {
    gridContainer.innerHTML = "";
    for (let i = 0; i < 100; i++) {

        // inserisco la funzione che crea i quadrati
        inSquare = createSquares();

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
        // se c'è l'array di bombe
        if (arrayBomb) {
            // for (let index = 0; index < arrayBomb.length; index++) {
            //     // le caselle con il numero nell'array di bombe corrispondente di colora di rosso
                
            // };
            square.classList.toggle('bomb');
           
            // altrimenti si colora di azzurro
        } else {
            square.classList.toggle('active');
            alert('hai vinto');
        };

    });


    return square;

};

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe

// creo un array vuoto che deve contenere le bombe

const arrayBomb = getRandomBombNumber(1, 100);
console.log(arrayBomb);
// genero un numero randomico da 1 a 16 da inserire in una funzione che richiamero poi nell'addevenlistener di cui sopra

function getRandomBombNumber(minNum, maxNum) {
    // inizializzo l'array bombe
    const bombList = [];
    // inizializzo il numero randomico
    let randomNumber;
    // ciclo while: per 16 volte

    while (bombList.length < 16) {
    // mi generi un numero randomico
        randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);

        // se il numero randomico è incluso nell'array di bombe ed è diverso l'uno dall'altro
        if (bombList.includes(randomNumber) !== true) {
            // me lo inserisci nell'array di bombe(cortesemente)
            bombList.push(randomNumber);
        };
    };
    // cosi mi creo l'array di bombe da inserire nel grid
    return bombList;
}