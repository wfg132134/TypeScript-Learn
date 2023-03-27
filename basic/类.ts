export { }

class Person {
  name: string;
  
  getName(): void {
    console.log(this.name);
  }
}

let p1 = new Person();
p1.name = 'lsaaa'
p1.getName() 
