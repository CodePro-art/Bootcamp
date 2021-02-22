let book = {name:"How to code", author:"Netanel Mazuz", publishYear:"1991",genre:"comedy"};

function details (book){
  console.log(`The book ${book.name} was written by ${book.author} in the year ${book.publishYear}`);
}

details(book);