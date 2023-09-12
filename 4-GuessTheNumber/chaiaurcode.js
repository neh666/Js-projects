let randomNumber=console.log(Math.random()*100+1)

const submit=document.querySelector(`#subt`)
const userInput=document.querySelector(`#guessField`)
const guessSlot=document.querySelector(`.guesses`)
const lastResult=document.querySelector(`.lastResult`)
const lowOrHi=document.querySelector(`.lowOrHi`)
const startOver=document.querySelector(`.resultParas`)

const p=document.createElement(`p`)

let prevGuess=[]
let numGuess=1
let playGame= true //allows to play game

if(playGame){
  submit.addEventListener(`click`,function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`enter a vaild number`)
  }else if(guess < 1){
    alert(`enter a vaild number greater than 1`)
  }else if(guess > 100){
    alert(`enter a number less than 100`)
  }else{
    prevGuess.push(guess)
    if(numGuess===11){
      cleanupGuess(guess)
      displayMessage(`game over, random num is ${random}`)
      endGame()
    }else{
      cleanupGuess(guess)
      checkGuess(guess)
    }
  }
} 
function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`Right asf YOU WON MF`)
    endGame()
  }else if(guess< randomNumber){
    displayMessage(`Guess is too low`)
  }else{
    displayMessage(`Number is larger than ykwim`)
  }
}
function cleanupGuess(guess){//cleanup method
  userInput.value=``
  guessSlot.innerHTML+=`${guess} ,`
  numGuess++;
  lastResult.innerHTML=`${10-numGuess}`
}
function displayMessage(message){
  lowOrHi.innerHTML=`<h1>${message}</h1>`
}
function endGame(){
  userInput.value=``
  userInput.setAttribute(`disabled`,``)
  p.classList.add(`button`)
  p.innerHTML=`<h2 "id=newGame">Start a New Game</h2>`
  startOver.appendChild(p)
  playGame=false;
  newGame();
}
function newGame(){
  const newGameButton=document.querySelector(`#newGame`)
  newGameButton.addEventListener(`click`,function(e){
    randomNumber=console.log(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=""
    lastResult.innerHTML=`${10-numGuess}`
    userInput.removeAttribute(`disabled`)
    startOver.removeChild(p)
    
    playGame=true;
  })
}

