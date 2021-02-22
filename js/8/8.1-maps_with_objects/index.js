let john = {name: 'John Doe'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'};

let userRoles = new Map();

userRoles.set(john,203);
userRoles.set(lily,204);
userRoles.set(peter,205);

for (const [key, value] of userRoles) {
  console.log(key.name,value);
}

