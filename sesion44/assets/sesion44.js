/*
class Stack{
  //Se define contructor
  constructor() {
    this.stack = [];
  }
  //Se define metodo para agregar elementos a la pila
  push(element) {
    this.stack.push(element);
    return this.stack;
  }
  //Se define metodo para quitar elementos a la pila
  pop() {
    return this.stack.pop();
  }
  //Retorna el ultimo valor ingresado a la pila, sin sacarlo de ésta.
  peek() {
    return this.stack[this.stack.length - 1];
  }
  //Retorna el numero de elemtos que contiene la pila.
  size() {
    return this.stack.length;
  }
  //Muestra el contenido de la pila.
  print() {
    console.log(this.stack);
  }
}

const  stack = new Stack();
console.log(stack.size());//0
console.log(stack.push('John Cena'));//['John Cena']
console.log(stack.push('The Rock'));//'John Cena','The Rock']
console.log(stack.size());//2
stack.print();//['John Cena','The Rock']
console.log(stack.peek());//'The Rock'
console.log(stack.pop());//'The Rock'
console.log(stack.peek());//John Cena
*/

/*class Queue {
    //Se define contructor
    constructor() {
        this.queue = [];
}
//Se define metodo para agregar elementos a la cola
enqueue(element) {
    return this.queue;
}
//Se define metodod para quitar elementos a la cola
dequeue() {
     return this.shift();
}
//Se define metodod para vet el primer elemnto de la cola
peek() {
    return this.queue[0];
}
//Se define metodod para ver la cantidad de elemtos de la ciola
size() {
    return this.queue.length;
}
//Se define metodod para ver si la cola esta vacia
isEmpty() {
    return this.queue.length === 0;
}
//Se define metodo para ver los elemtos de la cola
print() {
    return this.queue;
}
}
  

const queue = new Queue();
console.log(queue.enqueue('The Rock'));
console.log(queue.enqueue('John Cena'));
console.log(queue.enqueue('Stone Cold Steve Austin'));
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.print());
*/



let exampleArray = [20,"okay",1,2,""];
console.log(exampleArray[1]);//okay
console.log(exampleArray.length);//5

exampleArray.push("otro elemnto");
console.log(exampleArray);//[20,"okay",1,2,"","otrp elemento"]

exampleArraympleArray.pop();
console.log(exampleArray);//[20,"okay",1,2,""]

