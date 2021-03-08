class Point {
  constructor(_x,_y){
    this.x = _x;
    this.y = _y;
  }
  get touple(){
    return [this.x,this.y];
  }
  addToX(num){
    this.x += num;
  }
  addToY(num){
    this.y += num;
  }
  getY(){
    return this.y;
  }
  getX(){
    return this.x;
  }
  setX(num){
    this.x = num;
  }
  setY(num){
    this.y = num;
  }
  addPoint(point){
    this.x += point.x;
    this.y += point.y;
  }
  isSame(point){
    return this.x === point.x && this.y === point.y;
  }
  print(){
    console.log(`(${this.x},${this.y})`);
  }
}

class PointWorld {
  constructor(){
    this.list = [];
  }
  add(x,y){
    let p = new Point(x,y);
    this.list.push(p);
  }
  sort(){
    return this.list.sort((a,b) => a.y-b.y);
  }
  removeDuplicates(){
    let arr = this.list.filter((c, i) => this.findFirst(c) === i );
    console.log(arr);
    return arr;
  }
  findFirst(point){
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].isSame(point))
        return i;
    }
    return -1;
  }
  sumAllX(){
    return this.list.reduce((sum,current) => {
      return sum + current.x;
    },0);
  }
  exist(point){
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].isSame(point))
        return true;
    }
    return false;
  }
}



