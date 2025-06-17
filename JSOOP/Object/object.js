// 1. Object Literal
let mahasiswa = {
  nama: 'daniel',
  energi: 100,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  },
};

let mahasiswa2 = {
  nama: 'herman',
  energi: 100,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  },
};

// 2. Function Declaration
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  return mahasiswa;
}

function DataSiswa(nama, kelas, nilai) {
  let siswa = {};
  siswa.nama = nama;
  siswa.kelas = kelas;
  siswa.nilai = nilai;

  siswa.turuninNilai = function (nilaiPenurunan) {
    this.nilai -= nilaiPenurunan;
    console.log(`Nilai ${this.nama} turun bos jadi ${this.nilai}`);
  };

  return siswa;
}

//3. Constructor Function
function Hypermarket(namaProduk, stokProduk) {
  this.namaProduk = namaProduk;
  this.stokProduk = stokProduk;
  this.pembeliProduk = (jumlahProdukYangDibeli) => {
    this.stokProduk -= jumlahProdukYangDibeli;
    console.log(
      `Barang ${this.namaProduk} berkurang menjadi ${this.stokProduk}`
    );
  };
}

let apel = new Hypermarket('Apel', 20);

//4. Object.create()
const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"
