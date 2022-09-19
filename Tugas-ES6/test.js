console.log("Hello");

const naikPangkat = (kpi, absen, kelakuan) => {
  if (kpi >= 80 && absen == "Bagus" && kelakuan == "Baik") {
    console.log("Layak naik pangkat");
  } else {
    console.log("Belum mencukupi");
  }
};

naikPangkat(85, "Bagus", "Baik");
