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

function indexOf(searchElement, fromIndex) {
  fromIndex=0;
  let x = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {  
    x.push(arr(i)); 
    }
  }
  return -1; 
};

const arr = [1, 2, 3, 4];
console.log(arr.indexOf(4,0))