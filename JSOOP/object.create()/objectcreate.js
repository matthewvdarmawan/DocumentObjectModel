const methodSiswa = {
  turuninNilai: function (nilaiPenurunan) {
    this.nilai -= nilaiPenurunan;
    console.log(`Nilai ${this.nama} turun bos jadi ${this.nilai}`);
  },
  naikinNilai: function (nilaiKenaikan) {
    this.nilai += nilaiKenaikan;
    console.log(`Nilai ${this.nama} naik bos jadi ${this.nilai}`);
  },
};

function Siswa(nama, kelas, nilai) {
  let siswa = Object.create(methodSiswa);
  siswa.nama = nama;
  siswa.kelas = kelas;
  siswa.nilai = nilai;

  return siswa;
}

let budi = Siswa('Budi', '9B', 85);
let matthew = Siswa('Matthew', '9C', 95);
let toni = Siswa('Toni', '9D', 92);
