/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */


// escono numeri random
let input = document.querySelector('.enter');
let out = document.querySelector('.output');

// function random
function randomNum(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// function generare 5numeri 
function genera5Numeri() {
    let arrayRandom = []
    while (arrayRandom.length < 5) {
        let random = randomNum(1, 100)
        if (!arrayRandom.includes(random)) {
            arrayRandom.push(random);
        }
    }


    return arrayRandom;
}
let genNumeri=genera5Numeri()
input.innerHTML += `${genNumeri}`;


let timeout = setTimeout(function () {
    input.innerHTML = '';
}, 3000)


// step genera promp per 5 volte per inserire i dati che si salvano dento un contenitore


 setTimeout(function () {
 
    let arrayPrompt = []
    while (arrayPrompt.length < 5) {
        let promptValue = parseInt(prompt(`inserire il numero`));
        arrayPrompt.push(promptValue);
    }
    // out.innerHTML += `${arrayPrompt}`;
   



// function confronta due array e stampa numeri corretti
let arrayResult = []
for (let i = 0; i < arrayPrompt.length; i++) {
    if (genNumeri.includes(arrayPrompt [i])) {
        arrayResult.push(arrayPrompt[i])
        console.log(arrayResult)
    }
}
out.innerHTML += `${arrayResult}`;


}, 3500)



