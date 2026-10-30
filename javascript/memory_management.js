// Memory Management in JS

// Stack - Js used stack to store primitive data structures and fixed size data structures. Stack is a linear data structure which follows the LIFO(Last In First Out) principle. It is used for static memory allocation. The stack is used for function calls, local variables, and control flow. Variables such as objects, arrays, and functions are stored in the heap memory.

// Heap - The heap is a region of memory that is used for dynamic memory allocation. It is used to store objects, arrays, and other data structures that have a variable size. The heap is managed by the JavaScript engine and is used for storing data that cannot be stored on the stack.

// Javascript allocates memory for objects within the heap but we must have a reference to that memory location to acces the value. The reference to the memory location is stored inside thr stack

// Stack Overflow - When the stack memory is full and we try to add more data to it, it will cause a stack overflow. This can happen when a function calls itself recursively without a base case or when there are too many nested function calls.

// Garbage Collection - Js automatically cleans out the memeory allocated to the objects that are no longer in use. This process is called garbage collection. The garbage collector identifies and removes objects that are no longer reachable from the root of the application. This helps to free up memory and prevent memory leaks.

// Memory Leak - It occurs when data is overloaded, it breaks the browser and the application becomes slow. It happens when the memory that is no longer needed is not released. This can happen when we have circular references, global variables, or closures that hold onto memory that is no longer needed. Memory leaks can cause performance issues and can lead to crashes in the application.

// Call Stack - Its a part of javascript engine and it simply a stack in which u can add an item and item added first is proceded last.

// Event Loop - Checks if the call stack is empty and if it is empty then it will check the message queue for any pending messages and if there are any pending messages then it will push them to the call stack for execution. The event loop is responsible for handling asynchronous operations in JavaScript. It allows JavaScript to be non-blocking and handle multiple tasks concurrently. The event loop continuously checks the call stack and the message queue, and it ensures that the code runs smoothly without blocking the main thread.
