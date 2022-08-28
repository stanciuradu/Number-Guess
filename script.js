// logica implementarii jocului. Acesta este la baza un joc in care tu trebuie sa ghicesti un numar cuprins intre 1 si 10 si sa l introduci in acest input. Ai la dispozitie 3 incercari, iar numaruk generat de fiecare data va fi unul random curpins intre 1 si 10

// selectori
const game = document.querySelector("#game");
const minNumber = document.querySelector(".min-num");
const maxNumber = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

// variabilele din joc
let min = 1,
  max = 10,
  // numarul castigator salvat intr-o variabila, acesta este 2 pentru inceput
  // ulterior voi crea o functie care va genera un nr random intre 1 si 10
  winningNumber = 2,
  // user-ul are trei incercari de a ghici
  guessesLeft = 3;

// Assing min and max
// am specificat ca cele doua elemente din HTML sa aiba valorile min si max. Daca incerc sa modific in HTML valoarea lui 10 cu 20, nu se va putea realiza modificarea
minNumber.textContent = min;
maxNumber.textContent = max;

// crearea evenimentului la click pe buton
guessBtn.addEventListener("click", guessNumber);
function guessNumber() {
  // salvez valorea inputului intr-o variabila, deoarece continutul este inital un string si il prelucrez cu parseInt()
  let guess = parseInt(guessInput.value);
  // vreau sa validez acest input
  if (isNaN(guess) || guess < min || guess > max) {
    // daca oricare dintre aceste trei conditii este true, vreau sa afisez un mesaj
    setMessage(`Please enter a number between ${min} and ${max}`, "green");
  } else {
  }
  // verificarea daca este numarul ghicit. El este pus in sistem ca valoare by default 2, INITIAL

  // daca valoarea din input este acceasi cu cea setata by default, atunci afiseaza acest mesaj
  if (winningNumber === guess) {
    // disable input-practic bloch inputul
    guessInput.disable = true;
    // styling border
    guessInput.style.borderColor = "green";
    setMessageWinning(
      `Correct! The value of number is ${winningNumber}`,
      "green"
    );
  } else {
    // numar gresit
    setErrorMessage(`You have ${(guessesLeft -= 1)} more changes`, "red");
  }
}

// setMessage function
function setMessage(msg, color) {
  // outputul functiei va fi in acel paragraf din HTML
  message.textContent = msg;
  //am asociat mesajulul o anumita culoare
  message.style.color = color;
}

// setMessageWinning function
function setMessageWinning(msgInfo, color) {
  message.textContent = msgInfo;
  message.style.color = color;
}

// setErrorMessage function
function setErrorMessage(errorInfo, color) {
  message.textContent = errorInfo;
  message.style.color = color;
}
