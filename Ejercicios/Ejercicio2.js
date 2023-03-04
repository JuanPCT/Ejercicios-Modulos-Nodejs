
const sumaArreglos = (array) => {
    let total = 0;
    array.forEach(element => {
        total+=element;
    });
    return total;
}

module.exports = sumaArreglos;