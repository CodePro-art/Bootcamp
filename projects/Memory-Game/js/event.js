// =========================================================================== //
// ============================ EVENT LISTENERS: ============================= //
// =========================================================================== //


// Event Listener if a card <li> is clicked call flipCard()
deck.addEventListener("click", function(evt) {
	if (evt.target.nodeName === "LI") {

		if (timeStart === false) {
			timeStart = true; 
			timer();
		}
		// Call flipCard() function
		flipCard();
	}

//Flip the card and display cards img
function flipCard() {
	evt.target.classList.add("flip");
	addToOpened();
}
	 
//Add the fliped cards to the empty array of opened
function addToOpened() {
	if (opened.length === 0 || opened.length === 1) 
		opened.push(evt.target.firstElementChild);
	compareTwo();
	}
}); 

// Restart Buttons
reset.addEventListener('click', resetEverything);

// play again button 
playAgain.addEventListener('click',function() {
	modal.style.display = "none";
	resetEverything();
});