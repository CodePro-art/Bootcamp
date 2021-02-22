
function logSubmit () {
  let number = parseInt(str.value);
  let current = document.querySelectorAll('img').length;
  number >= current ? createLoop(number - current) : removeLoop(current - number,current);

}

function createLoop (counter) {
  while(counter--)
    web.newImage("https://google.com/favicon.ico");
}

function removeLoop (counter,length) {
  let imageList = document.querySelectorAll('img');
  for (let i=0;i<counter;i++)
    document.body.removeChild(imageList[i]);
}

class Webpage {
  constructor(title) { document.title = title; }
  set(markup) { document.body.innerHTML = markup; }
  append(markup) { document.body.innerHTML += markup; }
  markup = (tag, content, ending = true) => ending ? "<" + tag + ">" + content + "</" + tag + ">" : "<" + tag + "/>";
  initialize(element,code) { this.append(this.markup(element, code)); }
  addContent(id,index,content){ document.querySelectorAll(id)[index].innerHTML += content; }
  newImage(url) {
    let img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  }
  image(url) { this.append("<img src=\"" + url + "\" />"); }
  font(name) { document.body.style.fontFamily = name; }
  header(level, content) { this.append(this.markup("h" + level, content)); }
  setAttribute(id,index,attribute,value){ document.querySelectorAll(id)[index].setAttribute(attribute,value); }
  stylesheet(url) { this.append("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + url + "\"/>"); }
  script(url) { this.append("<script src=\"" + url + "\"/>"); }
}

var web = new Webpage("New Page");
web.font("Helvetica, Arial, sans-serif");
web.set("<h1>Assignment 18.1 only JS!</h1>");
web.append(web.markup("hr", null, 0));
web.append(web.markup("form", ""));
web.setAttribute("form",0,"action","#");
web.setAttribute("form",0,"class","container");
web.addContent("form",0,"<div>How many smilies do you want to see?</div><br>");
web.addContent("form",0,'<div class="message"></div>');
web.addContent("form",0,'<input class="input" type="number" min="0"></input><br><br>');
web.addContent("form",0,'<input type="submit" value="Click here" class="submit"><br><br>');
let element = document.createElement("span");
web.image("https://google.com/favicon.ico");

const str = document.querySelector('.input');
const submit = document.querySelector('.submit');
submit.addEventListener('click',logSubmit);
