"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sapa = exports.Convert = exports.CheckScore = void 0;

// Soal 1
var Sapa = function Sapa(stringNama) {
  var nama = stringNama[0];
  console.log("Halo selamat pagi, ".concat(nama));
}; // Soal 2


exports.Sapa = Sapa;

var Convert = function Convert(nama, domisili, umur) {
  var obj = {
    nama: nama,
    domisili: domisili,
    umur: umur
  };
  console.log(obj);
}; // Soal 3


exports.Convert = Convert;

var CheckScore = function CheckScore(string) {
  var arr = string[0].split(",");
  var result = {};

  for (var i = 0; i < arr.length; i++) {
    result[arr[i].split(":")[0]] = arr[i].split(":")[1];
  }

  console.log(result);
};

exports.CheckScore = CheckScore;