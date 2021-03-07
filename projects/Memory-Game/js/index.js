// =========================================================================== //
// ============================ SELECTORS: =================================== //
// =========================================================================== //

const modal = document.getElementById("modal");
const reset = document.querySelector(".reset-btn");
const playAgain = document.querySelector(".play-again-btn"); 
const movesCount = document.querySelector(".moves-counter");
const star = document.getElementById("star-rating").querySelectorAll(".star");
const timeCounter = document.querySelector(".timer");

// =========================================================================== //
// ============================ VARIABLES: =================================== //
// =========================================================================== //

const deckCards = [
	"one", "one", 
	"two", "two", 
	"three", "three", 
	"four", "four", 
	"five", "five", 
	"six", "six", 
	"ten", "ten", 
	"eight", "eight"
];
const deck = document.querySelector(".deck");
let opened = [];
let matched = [];
let starCount = 3;
let moves = 0;

// time variables:
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;

// =========================================================================== //
// ============================ FUNCTIONS: =================================== //
// =========================================================================== //

// Shuffle function
function shuffle(arr) {
  let curr = arr.length, rand;

  while (curr--) {
    rand = Math.floor(Math.random() * curr + 1);
		[arr[curr],arr[rand]] = [arr[rand],arr[curr]];
  }
  return arr;
}


// start game function
function startGame() {
	const shuffledDeck = shuffle(deckCards);

	for (let i = 0; i < shuffledDeck.length; i++) {
		const liTag = document.createElement('LI');
		const addImage = document.createElement("IMG");

		liTag.classList.add('card');
		liTag.appendChild(addImage);

		addImage.setAttribute("src", "./img/" + shuffledDeck[i] + ".jpg");
		addImage.setAttribute("alt", "tailed beast card");
		deck.appendChild(liTag);
	}
}

// Remove all cards from board: <li> tags and <img> tags
function removeCard() {
	while (deck.hasChildNodes()) {
		deck.removeChild(deck.firstChild);
	}
}

// Timer update
function timer() {
	time = setInterval(function() {
		seconds++;
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: " + minutes + " Mins " + seconds + " Secs" ;
	}, 1000);// Update every second
}

// function to stop the timer once the user has matched all 16 cards
function stopTime() {
	clearInterval(time);
}

// Reset all global variables and the content of HTML elements
function resetEverything() {

	// Time handle
	stopTime();
	timeStart = false;
	seconds = 0;
	minutes = 0;
	timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: 00:00";

	// Reset star count 
	star[1].firstElementChild.classList.add("fa-star");
	star[2].firstElementChild.classList.add("fa-star");
	starCount = 3;

	// Reset moves count
	moves = 0;
	movesCount.innerHTML = 0;

	// Clear both arrays
	matched = [];
	opened = [];

	// Clear the deck + Start over
	removeCard();
	startGame();
}

// Update the html for the moves counter + keep track
function movesCounter() {
	movesCount.innerHTML ++;
	moves ++;
}

// Update the star rating. more moves -> less stars
function starRating() {
	if (moves === 14) {
		star[2].firstElementChild.classList.remove("fa-star");
		starCount--;
	}
	if (moves === 18) {
		star[1].firstElementChild.classList.remove("fa-star");
		starCount--;
	}
}

// Compare two cards to see if they match or not
function compareTwo() {
	if (opened.length === 2){
		document.body.style.pointerEvents = "none";
		movesCounter();
		opened[0].src === opened[1].src ? match(): noMatch();
		starRating();
	}
}

// If the two cards match, keep the cards open and apply class of match
function match() {
	setTimeout(function() {
		opened[0].parentElement.classList.add("match");
		opened[1].parentElement.classList.add("match");
		matched.push(...opened);
		// Allow for  mouse clicks on cards
		document.body.style.pointerEvents = "auto";
		// Check to see if the game has been won with all 8 pairs
		winGame();
		// Clear the opened array
		opened = [];
	}, 600);
}

// Cards do not match, remove the cards from the opened array and flip the cards back 
function noMatch() {
	setTimeout(function() {
		opened[0].parentElement.classList.remove("flip");
		opened[1].parentElement.classList.remove("flip");
		document.body.style.pointerEvents = "auto";
		opened = [];
	}, 700);
}

// Get stats on the time, moves, and star rating
function AddStats() {
	const stats = document.querySelector(".modal-content");

	for (let i = 1; i <= 3; i++) {
		const statsElement = document.createElement("p");
		statsElement.classList.add("stats");
		stats.appendChild(statsElement);
	}
	let p = stats.querySelectorAll("p.stats");
		p[0].innerHTML = "Time to complete: " + minutes + " Minutes and " + seconds + " Seconds";
		p[1].innerHTML = "Moves Taken: " + moves;
		p[2].innerHTML = "Your Star Rating is: " + starCount + " out of 3";
}

// Display the modal on winning the game
function displayModal() {
const modalClose = document.getElementsByClassName("close")[0];
	modal.style.display= "block";
	modalClose.onclick = function() {
		modal.style.display = "none";
	};
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
}

// Check winning condition: Stop the timer update the modal with stats and show the modal
function winGame() {
	if (matched.length === 16) {
		stopTime();
		AddStats();
		displayModal();
	}
}
