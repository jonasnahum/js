// var arrays = [[1, 2, 3], [4, 5], [6]];

// console.log(arrays.reduce(function(flat, current) {//reduce needs array, conbining function andd a start value.
//   return flat.concat(current);
// }, []));

// → [1, 2, 3, 4, 5, 6]

function reduce (array, combine, start){
    var current = start;
    for (var i = 0; i < array.length; i++)
     current = combine(current, array[i]);
     return current;
}


console.log (reduce ([[1, 2, 3], [4, 5], [6]], function (flat, current)  {
    return flat.concat(current);
}, [] ));

