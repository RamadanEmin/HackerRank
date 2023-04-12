//DAY 18: Queues and Stacks

/*
To solve this challenge, we must first take each character in s, enqueue it in a queue, and also push that same character onto a stack. Once that's done, we must dequeue the first character from the queue and pop the top character off the stack, then compare the two characters to see if they are the same; as long as the characters match, we continue dequeueing, popping, and comparing each character until our containers are empty (a non-match means s isn't a palindrome).
Write the following declarations and implementations:
1. Two instance variables: one stack for your queue, and one for your .
2. A void pushCharacter(char ch) method that pushes a character onto a stack.
3. A void enqueueCharacter(char ch) method that enqueues a character in the queue instance variable.
4. A char popCharacter() method that pops and returns the character at the top of the stack instance variable.
5. A char dequeueCharacter() method that dequeues and returns the first character in the queue instance variable.
*/

function Solution() {
    let stack = [];
    let queue = [];

    this.pushCharacter = (ch) => stack.push(ch);
    this.enqueueCharacter = (ch) => queue.push(ch);
    this.popCharacter = () => stack.pop();
    this.dequeueCharacter = () => queue.shift();
}