function nilaiTertinggi(listMahasiswa) {
  listMahasiswa.sort((valueOne, valueTwo) => {
    return valueOne.class.localeCompare(valueTwo.class);
  });

  listMahasiswa.forEach((dataMhs, index) => {
    let data = {
      name: dataMhs.name,
      score: dataMhs.score,
    };
    if (index >= 1) {
      if (listMahasiswa[index].class != listMahasiswa[index - 1].class) {
        process.stdout.write(dataMhs.class + ": ");
        console.log(data);
      }
    } else {
      process.stdout.write(dataMhs.class + ": ");
      console.log(data);
    }
  });
}

console.log(
  nilaiTertinggi([
    {
      name: "Asep",
      score: 90,
      class: "adonis",
    },
    {
      name: "Ahmad",
      score: 85,
      class: "vuejs",
    },
    {
      name: "Regi",
      score: 74,
      class: "adonis",
    },
    {
      name: "Afrida",
      score: 78,
      class: "reactjs",
    },
  ])
);
