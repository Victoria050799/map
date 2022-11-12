/*function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr)
    }
  }
  
  let arr = [1, 2, 3, 4];
  
  forEach(arr, (currentValue) => console.log(currentValue));*/


  /*const arr = [1, 2, 3, 4];
  
  function Map(arr,callback) {
    let x = [];
    for(let i = 0; i < arr.length; i++) {
    x.push(callback( arr[i], i, arr))
    }
   return x;
  };

 console.log(Map(arr, (currentValue) => currentValue*2));*/
 
 /*const arr = [1, 2, 3, 4];

 function filter(arr,callback) {
    let x = [];
    for(let i = 0; i < arr.length; i++) {if(callback( arr[i], i, arr))
        {x.push( arr[i]);
        }
    
    }
    return x;
};
console.log(filter(arr, (currentValue) => currentValue>2));*/

/*function IndexOf(searchElement,fromIndex ) {
  fromIndex=0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {  
    return i; 
    }
  }
  return -1; 
};

const arr = [1, 2, 3, 4];
console.log(IndexOf(2))*/


/*function Includes(searchElement,fromIndex ) {
  fromIndex=0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {  
    return true; 
    }
  }
  return false; 
};

const arr = [1, 2, 3, 4];
console.log(Includes(2))*/
/*
function Concat(valueN,Array){
  for (let i = 0; i < arr.length; i++){
  return [ valueN.push(Array)];}
}
const arr = [1, 2, 3, 4];
const arr2=[5,6,7,8];

console.log(Concat(arr,arr2))*/

Вопрос 1.

const call = {
  caller: "mom", 
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says();

Что приведенный выше код будет выводить на консоль?

(A) Hey, undefined just called.
(B) Hey, mom just called.// ответ B 
(C) Hey, caller just called.

Вопрос 2.

const call = {
  caller: "mom", 
  says: () => {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says();

Что приведенный выше код будет выводить на консоль?

(A) Hey, undefined just called.//a
(B) Hey, mom just called.
(C) Hey, caller just called.

Вопрос 3.

const call = {
  caller: "mom", 
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

let newCall = call.says;

newCall();

Что приведенный выше код будет выводить на консоль?

(A) Hey, undefined just called.//a
(B) Hey, mom just called.


Вопрос 4.

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: "mom", 
  anotherCaller: anotherCaller,
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

let newCall = call.anotherCaller;

newCall();



Что приведенный выше код будет выводить на консоль?

(A) mom called, too!
(B) Hey, mom just called.
(C) undefined called, too!//c