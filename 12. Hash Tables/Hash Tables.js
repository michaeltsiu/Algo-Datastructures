/*
Objectives
  - Explain what a hash table is
  - Define what a hashing algorithm is
  - Discuss what makes a good hashing algorithm
  - Understand how collisions occur in a hash table
  - Handling collision using separate chaining or linear probing

What is a hash table?
  - Hash tables are used to store key-value pairs
  - They are like arrays, but the keys are not ordered
  - Unlike arrays, hash tables are fast for all the following operations
    - Finding values
    - Adding new values
    - Removing values

Hashing
  - To implement a hash table we'll be using an array
  - In order to look up values by key, we need a way to convert keys into valid array indices
  - A function that performs this task is called a hash function

*/

// Simple hash example
  // problems with current hash
    // Only hashes strings
    // Not constant time - linear in key length
    // Could be a little more random
function hash(key, arrLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrLen;
  }
  return total;
}

// Refining hash example
function hash(key, arrLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrLen;
  }
  return total;
}

/*
Separate Chaining
  - at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)
  - This allows us to store multiple key-value pairs at the same index
Linear Probing
  - when we find a collision, we search through the array to find the next empty slot
  - Unlike with separate chaining, this allows us to store a single key-value at each index

Set & Get
  Set
    1. Accepts a key and a value
    2. Hashes the key
    3. Stores the key-value pair in the hash table array via separate chaining
  Get
    1. Accepts a key
    2. Hashes the key
    3. Retrieves the key-value pair in the hash table
    4. If the key isn't found, returns undefined

Keys/Values
  Keys
    1. Loops through the hash table array and returns an array of keys in the table

  Values
    1. Loops through the hash table array and returns an array of values in the table
*/



// Hash table Class
class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i]
        }
      }
    }
    return undefined;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!!")

ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")
ht.set("purple", "#DDA0DD") // duplicate
ht.set("violet", "#DDA0DD") // duplicate

ht.keys().forEach((key) => console.log(ht.get(key)));

/*
Big O of Hash Tables
  Insert: O(1)
  Deletion: O(1)
  Access: O(1)

Recap
  - are collections of key-value pairs
  - can find values quickly given a key
  - can add new key-values quickly
  - store data in a large array, and work by hashing the keys
  - a good hash should be fast, distribute keys uniformly, and be deterministic
  - separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
*/