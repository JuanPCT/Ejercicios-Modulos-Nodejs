
const cadenaMasLarga = (array) => {
    let mayor = array[0];
    
    for (let i = 1; i < array.length; i++) {
      if (array[i].length > mayor.length) {
        mayor = array[i];
      }
    }
    
    return mayor;
  }
  
  module.exports = cadenaMasLarga;
  