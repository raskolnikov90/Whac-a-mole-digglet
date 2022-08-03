const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let hitPosition
let result = 0
let timerId = null
let currentTime = 60
function randomSquare() {
	squares.forEach(square => {
		square.classList.remove('mole')
	})

	let randomSquare = squares[Math.floor(Math.random() * 9)]
	randomSquare.classList.add('mole')

	hitPosition = randomSquare.id
}

squares.forEach(square => {
	square.addEventListener('click', ()=> {
		if(square.id == hitPosition) {
			result++
			score.textContent = result
			hitPosition = null
		}
	})
})

function moveMole() {
	timerId = setInterval(randomSquare, 800) //800 miliseconds
}

moveMole()


function countDown(){
 	currentTime--
 	timeLeft.textContent = currentTime

 	if (currentTime == 0) {
 		clearInterval(countDownTimerId)
 		clearInterval(timerId)
 		alert('Game over, your scoure is: ' + result)
 	}
}

let countDownTimerId = setInterval(countDown, 1000)










