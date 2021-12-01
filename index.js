import random from 'random';

let numbers = new Map();

for (let index = 0; index < 10000; index++) {

    let randomNum = random.int(1, 20);
  
  if(numbers.has(randomNum)){
    numbers.set(randomNum, numbers.get(randomNum)+1);
  }else{
    numbers.set(randomNum, 1);
  }
}

console.log(numbers);




