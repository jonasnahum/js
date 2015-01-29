//The && operator represents logical and. It is a binary operator, and its
//result is true only if both the values given to it are true.
console.log(true && false)
//false
console.log(true && true)
//true

//The || operator denotes logical or. It produces true if either of the
//values given to it is true.
console.log(false || true)
//true
console.log(false || false)
//false

//This one is called the conditional operator (or sometimes just ternary op-
//erator since it is the only such operator in the language). The value on the
//left of the question mark “picks” which of the other two values will come out.
//When it is true, the middle value is chosen, and when it is false, the value on
//the right comes out.
console.log(true ? 1 : 2);
//1
console.log(false ? 1 : 2);
//2

//(equal to ==)//comparacion
//( == , != , === , !== , < , > , <= , >= )
//The rules for converting strings and numbers to Boolean values
//state that 0 , NaN , and the empty string ( "" ) count as false , while all the other
//values count as true . Because of this, expressions like 0 == false and "" ==
//false are also true. For cases like this, where you do not want any automatic
//type conversions to happen, there are two extra operators: === and !== . The
//first tests whether a value is precisely equal to the other, and the second tests
//whether it is not precisely equal. So "" === false is false as expected.
