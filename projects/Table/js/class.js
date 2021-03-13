// ======================================================================= //
// ============================ CLASSES ================================== //
// ======================================================================= //

class Member {
  constructor(main,secondary){
    this.id = main.id;
    this.firstName = main.firstName;
    this.lastName = main.lastName;
    this.capsule = main.capsule;
    this.age = secondary.age;
    this.city = secondary.city;
    this.gender = secondary.gender;
    this.hobby = secondary.hobby;
  }
}

class Appleseed {
  constructor(){
    this.list = [];
  }

  async addMember(main,secondary){
    let member = new Member(main,secondary);
    this.list.push(member);
  }

  indexOf(id){
    for(let i = 0; i<this.list.length ;i++)
      if (this.list[i].id === id)
        return i;
    
    return -1;
  }
}