const people = ["Greg", "Mary", "Devon", "James"];

// 1. Printing the array with loop

function arrayPrint(arr){
  for(let i=0;i<arr.length;i++)
  console.log(arr[i]);
}

arrayPrint(people);

// 2. Remove "Greg" from the array
// splice 0,1 removes 1 element from index 0

let removed = people.splice(0,1);
console.log(people);

// 3. Remove "James" from array
// Define PROTOTYPE Funtion

Array.prototype.remove = function() {
    // what is a specific word from the arguments in each iteration
    let what;
    // index = the index of the matched word in the original string
    let index;
    // arg = an array with words to remove
    let arg = arguments;
    // len = number of words to remove
    let length = arg.length;

    // Loop untill  we have removed every match
    while (length && this.length) {
        what = arg[--length];
        while ((index = this.indexOf(what)) !== -1) {
            this.splice(index, 1);
        }
    }
    //  this = the given array
    return this;
};
people.remove("James");
console.log(people);

// 4. Adding "Matt" to the front of the array

people.unshift("Matt");
console.log(people);

// 5. Adding  "Netanel" to the end of the array

people.push("Netanel");
console.log(people);

// 6. Looping until  the first appearance of "Mary"

let marry_index = people.indexOf("Mary");
for(let i=0;i<marry_index;i++)
  console.log(people[i]);

// 7. Copy the array without Mary and Matt

let newPeople = people.slice();
newPeople.remove("Mary","Matt");
console.log(newPeople);

// 8. Index of Mary

marry_index = people.indexOf("Mary");
console.log(marry_index);

// 9. Index of "Foo"

let foo_index = people.indexOf("Foo");
console.log(foo_index);

// 10. Redefine 'people' to its original form

// Remove my name & Matt's name fron the array
people.remove("Netanel","Matt");
// Adding back "Greg" to the start
people.unshift("Greg");
// Adding back "James" to the end of the string
people.push("James");
// Splice "Elizabeth" in and "Devon" out
people.splice(2,1,"Elizabeth","Artie");
console.log(people);

// 11. withBob

let withBob = people.slice();
withBob.push("Bob");
console.log(withBob);