let nullableValue = function(){
    let elements = [
        { name: null, price: 1},
        { name: undefined, price: 0},
        { name: null, price: 2},
    ];
    for (let i = 0; i < elements.length; i++) {
        let currentObject = elements[i];
        if (currentObject.name === null) {
            currentObject.name = 0;
        }
        if (currentObject.name === undefined) {
            currentObject.name = "";
        }
    }
    return elements;
}
console.log(nullableValue());
