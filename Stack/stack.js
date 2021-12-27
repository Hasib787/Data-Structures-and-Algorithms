class Stack {
    constructor() {
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const friends = new Stack();
friends.add("Rolf");
friends.add("Charlie");
friends.add("Anna");
friends.add("Jen");
console.log(friends.stack);
console.log(friends.remove());
console.log(friends.stack);
