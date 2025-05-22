const LinkedList = require('./linkedList');

// Create a new linked list
const list = new LinkedList();

// Populate the list with nodes
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Test the toString method
console.log(list.toString());
// Expected: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// Test prepend
list.prepend("bird");
console.log(list.toString());
// Expected: ( bird ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// Test size
console.log("Size:", list.size()); // Expected: 7

// Test head
console.log("Head:", list.head().value); // Expected: bird

// Test tail
console.log("Tail:", list.tail().value); // Expected: turtle

// Test at
console.log("At index 2:", list.at(2).value); // Expected: cat

// Test contains
console.log("Contains 'cat':", list.contains("cat")); // Expected: true
console.log("Contains 'lion':", list.contains("lion")); // Expected: false

// Test find
console.log("Find 'hamster':", list.find("hamster")); // Expected: 4
console.log("Find 'elephant':", list.find("elephant")); // Expected: null

// Test pop
console.log("Popped:", list.pop()); // Expected: turtle
console.log(list.toString());
// Expected: ( bird ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

// Test insertAt
list.insertAt("fish", 3);
console.log(list.toString());
// Expected: ( bird ) -> ( dog ) -> ( cat ) -> ( fish ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

// Test removeAt
console.log("Removed at index 2:", list.removeAt(2)); // Expected: cat
console.log(list.toString());
// Expected: ( bird ) -> ( dog ) -> ( fish ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null
