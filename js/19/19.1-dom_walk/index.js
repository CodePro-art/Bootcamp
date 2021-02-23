const start = document.querySelector('.start-here');
// 1. Change the text from “title 2” to “main title”
start.textContent="main title";
console.log(start.childNodes[0]);
// 2. Add another sub title with the text “sub title 4”
start.nextElementSibling.lastElementChild.innerHTML += `<li>sub title 4</li>`;
// 3. Delete the last <li> element from the list.
start.nextElementSibling.nextElementSibling.remove();
// 4. Change the <title> element text to “Master Of The Dom”.
start.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML = `Master of the Dom.`;
// 5. Change the text of the <p> element ot something else of your
start.parentElement.nextElementSibling.firstElementChild.innerHTML = `Replaced string!`;
