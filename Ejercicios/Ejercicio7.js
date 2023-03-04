
const isEven = (number) => {
    if(number % 2 === 0){
      return `El numero ${number} es par`;
    }else{
      return `El numero ${number} es impar`;
    }
  }
  
  module.exports = isEven;
  