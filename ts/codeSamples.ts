




// let Dog = {
//     name: 'Buster',
//     age: 6
// }



// interface Dog {
//     name: string,
//     age: number
// }

// let dog1: Dog = {
//     name: "Scooby",
//     age: 4 //Error: (property) Dog.age: number 
// } 


interface Dog {
    name: string;
    age: number;
}
  
class Puppy {
    name: string;
    age: number;

    constructor(name: string, age: number, breed?: string) {
        this.name = name;
        this.age = age;
      }
}
//Dog: Puppy  
let Dog = new Puppy("Buddy", 1);
Dog = new Puppy("Buddy", 1, "Lab"); 