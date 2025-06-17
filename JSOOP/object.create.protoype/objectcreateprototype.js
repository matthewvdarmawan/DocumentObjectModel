// function Siswa(nama, kelas, nilai) {
//   this.nama = nama;
//   this.kelas = kelas;
//   this.nilai = nilai;
// }

// Siswa.prototype.turuninNilai = function (nilaiPenurunan) {
//   this.nilai -= nilaiPenurunan;
//   return `Nilai ${this.nama} turun bos jadi ${this.nilai}`;
// };

// Siswa.prototype.naikinNilai = function (nilaiKenaikan) {
//   this.nilai += nilaiKenaikan;
//   return `Nilai ${this.nama} naik bos jadi ${this.nilai}`;
// };

// let budi = new Siswa('Budi', '9B', 85);
// let matthew = new Siswa('Matthew', '9C', 95);
// let toni = new Siswa('Toni', '9D', 92);

// versi class

class Siswa {
  constructor(nama, siswa, nilai) {
    this.nama = nama;
    this.siswa = siswa;
    this.nilai = nilai;
  }

  turuninNilai(nilaiPenurunan) {
    this.nilai -= nilaiPenurunan;
    return `Nilai ${this.nama} turun bos jadi ${this.nilai}`;
  }

  naikinNilai(nilaiKenaikan) {
    this.nilai += nilaiKenaikan;
    return `Nilai ${this.nama} naik bos jadi ${this.nilai}`;
  }
}

let budi = new Siswa('Budi', '9B', 85);
