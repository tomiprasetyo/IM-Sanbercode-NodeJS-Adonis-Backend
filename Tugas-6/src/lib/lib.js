// Soal 1

export const Sapa = (stringNama) => {
  let nama = stringNama[0];

  console.log(`Halo selamat pagi, ${nama}`);
};

// Soal 2

export const Convert = (nama, domisili, umur) => {
  let obj = {
    nama,
    domisili,
    umur,
  };

  console.log(obj);
};

// Soal 3

export const CheckScore = (string) => {
  let arr = string[0].split(",");

  const result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].split(":")[0]] = arr[i].split(":")[1];
  }

  console.log(result);
};

// Soal 4

export const FilterData = (params) => {
  const [namaKelas] = params;

  const data = [
    { name: "Ahmad", kelas: "adonis" },
    { name: "Regi", kelas: "laravel" },
    { name: "Bondra", kelas: "adonis" },
    { name: "Iqbal", kelas: "vuejs" },
    { name: "Putri", kelas: "Laravel" },
  ];

  const result = data.filter((value) =>
    value.kelas.toLowerCase().includes(namaKelas.toLowerCase())
  );

  console.log(result);
};
