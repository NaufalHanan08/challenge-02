function checkTypeNumber(givenNumber) {
  if (givenNumber === undefined) {
    return 'Error: where is the parameter';
  } else if (typeof givenNumber !== 'number') {
    return 'Error: invalid data type';
  }

  if (givenNumber % 2 === 0) {
    return 'GENAP';
  } else {
    return 'GANJIL';
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber('3'));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
