function getAngkaTerbesarKedua(personName) {
  personName.sort(function (a, b) {
    return b - a;
  });

  return personName[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
