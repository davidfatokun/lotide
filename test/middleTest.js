const assertEqual = require("../assertEqual");
const  eqArrays = require("../eqArrays")
const assertEqualArrays = require("../assertEqualArrays")
const middle = require("../middle")

assertEqualArrays(middle([1]), [])
assertEqualArrays(middle([1,2]), [])
assertEqualArrays(middle([1,2,3]), [2])
assertEqualArrays(middle([1,2,3,4,5]), [3])
assertEqualArrays(middle([1, 2, 3, 4]), [2, 3])
assertEqualArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])

assertEqual(eqArrays(middle([1]), []), true)
assertEqual(eqArrays(middle([1,2]), []), true)
assertEqual(eqArrays(middle([1,2,3]), [2]), true)
assertEqual(eqArrays(middle([1,2,3,4,5]), [3]), true)
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true)
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true)
