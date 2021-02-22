// 1. Create book object #1 & ook object #2 
let book1 = {
  name:"How to code",
  author:"Netanel Mazuz",
  year:"1991",
};
// 2. 
let book2 = {
  name:"Master of Inflouence",
  author:"J.K Rolling",
  year:"2001",
};

let bookUtils ={
  // 3
  getFirstPublished : function(book1,book2){
    return ((book1.year<book2.year)?book1:book2);
  },
  // 4
  setNewEdition : function(book,edition){
    book.latestEdition = edition;
  },
  // 5
  setLanguage : function(book,language){
    book.language = language;
  },
  // 6
  setTranslation : function(book,language,translator){
    book.translator = {language: language, translation:translator};
  },

  // 7
  setPublisher : function(book,name,location){
    book.publisher = {name: name, location: location};
  },
  // 8
  isSamePublisher : function(book1,book2){
    return ((book1.publisher.name === book2.publisher.name) && (book2.publisher.location === book1.publisher.location)?true:false);
  }
};

bookUtils.setPublisher(book1,'steave','USA');
bookUtils.setPublisher(book2,'steave','US');
console.log(book1);
console.log(book2);
console.log(bookUtils.isSamePublisher(book1,book2));