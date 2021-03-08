const isPrime = (num) => {
  for(let i = 2; i < num/2; i++)
    if(num % i === 0) return false;
  return num > 1;
}

class sortNumber {
  constructor(){
    this.numList = [];
  }
 
  add(num){
    if(isPrime(num)){
      this.numList.push(num);
      this.numList.sort((a,b) => a-b);
      return true;
    }else
     return false
  }
  remove(num){
    const index = this.numList.indexOf(num);
    if (index > -1) {
      array.splice(index, 1);
      return true;
    }else
      return false;  
  }
  gatAll(){
    return this.numList;
  }
  print(){
    console.log(this.numList);
  }
  share(obj){
    let counter = 0;
    for(const num of this.numList){
      if(obj.numList.indexOf(num) > -1)
        counter++;}
    return counter;
  }
  union(obj){
    let arr = this.numList.concat(obj.numList);
    return arr.filter((c, i) => arr.indexOf(c) === i);
  }
}

let list1 = new sortNumber();
let list2 = new sortNumber();
let list3 = new sortNumber();

list1.add(5);
list1.add(3);
list1.add(4);
list1.add(6);
list1.add(2);
list1.add(11);
list2.add(5);
list2.add(3);
list2.add(4);
list2.add(6);
list2.add(11);
list3.add(11);

list1.print();
list2.print();
list3.print();

console.log(list1.share(list2));
console.log(list2.union(list3));
