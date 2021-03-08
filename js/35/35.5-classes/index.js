class Room {
  constructor(_id,_floor,_capacity){
    this.id = _id;
    this.floor = _floor;
    this.capacity = _capacity;
    this.free = true;
  }
  fits(amount){
    if(amount <= this.capacity){
      this.free = false;
      return true;
    }else
      return false;
  }
  print(){
    console.log(`Room ID: ${this.id}.`);
    console.log(`Floor: ${this.floor}.`);
    console.log(`Max capacity: ${this.capacity}.`);
    this.free ? console.log(`Availablilty: free`) : console.log(`Availablilty: taken`);
  }
}

class Hotel {
  constructor(){
    this.list = [];
  }
  include(id){
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].id === id)
        return true;
    }
    return false;
  }
  indexOf(id){
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].id === id)
        return i;
    }
    return -1;
  }
  addRoom(id,floor,cap){
    if(this.include(id))
      console.log(`Room ${id} already exist in the hotel.`);
    else{
      let room = new Room(id,floor,cap);
      this.list.push(room);
    }
  }
  removeRoom(id){
    let index = this.indexOf(id);
    if(index === -1)
      console.log(`Room ${id} does not exist in the hotel.`);
    else
      this.list.splice(index,1);
  }
  print(){
    console.log(this.list);
  }
  checkFreeRooms(amount){
    return this.list.filter((e) => e.capacity>=amount && e.free);
  }
  checkIn(id,amount){
    let index = this.indexOf(id);
    if(this.include(id)){
      if(this.list[index].free && this.list[index].capacity>=amount)
        this.list[index].free = false;
      else
        console.log(`Sorry,cannot check in to room ${id}. Already taken.`);
    }else
      console.log(`The room: ${id} does not exist in the hotel`);
  }
  hightRoomFree(){
    this.list.sort((a,b) => a.floor-b.floor);
    highestFloor = this.list[this.list.length-1].floor;
    return this.list.filter((e) => {e.floor === highestFloor}).sort((a,b) => a.capacity-b.capacity);
  }
  getAllFreeRooms(){
    return this.list.filter(e => e.free).sort((a,b) => a.id-b.id);
  }
}

let leonardo = new Hotel();
leonardo.addRoom(205,2,4);
leonardo.addRoom(322,3,10);
leonardo.addRoom(155,1,4);
leonardo.addRoom(222,2,3);

leonardo.print();
leonardo.removeRoom(322);
leonardo.print();

