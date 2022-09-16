var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];

var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];

function arrayToObject(arr) {
  var tanggal = new Date();
  var tahun = tanggal.getFullYear();

  for (var i = 0; i < arr.length; i++) {
    var object = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: tahun - arr[i][3],
    };

    if (arr[i][3] === undefined || arr[i][3] > tahun) {
      object.age = "Invalid Birth Year";
    }

    console.log(`${i + 1}. ${arr[i][0] + " " + arr[i][1]} : `, object);
  }
}

arrayToObject(people);

console.log("");

arrayToObject(people2);

console.log("");

arrayToObject([]);
