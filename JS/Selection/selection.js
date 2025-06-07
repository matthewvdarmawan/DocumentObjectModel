// Selection

const elemenJudul = document.getElementById('judul');
elemenJudul.style.color = 'white';
elemenJudul.style.backgroundColor = '#a29d';
elemenJudul.innerHTML = 'Matthew Vallerio';
console.log(elemenJudul);

const paragraf = document.getElementsByClassName('teks');
paragraf[0].style.color = 'white';
paragraf[0].style.backgroundColor = 'green';
paragraf[1].style.color = 'white';
paragraf[1].style.backgroundColor = 'blue';
console.log(paragraf);

const satuKotak = document.querySelector('.kotak');
const semuaKotak = document.querySelectorAll('.kotak'); // semua kotak

// Tugas 1
const judulDOM = document.getElementById('judulLatihan');
const paragrafList = document.querySelectorAll('.deskripsiLatihan');
const tombolDOM = document.getElementById('tombolLatihan');
tombolDOM.innerHTML = 'Berhasil diberi nama "Tombol" ';

// HTML Collection - Looping
const classTeks = document.getElementsByClassName('classTeks');
for (let i = 0; i < classTeks.length; i++) {
  classTeks[i].style.color = 'blue';
  classTeks[i].textContent = `Ini paragraf ke-${i + 1}`;
}
//Node List
const paragraphNodelist = document.querySelectorAll('.paragraph');

paragraphNodelist.forEach((paragraph, index) => {
  paragraph.style.color = 'green';
  paragraph.textContent = `Ini index ke-${index + 1}`;
});


// const satuKotak = document.querySelector('.kotak');
// const semuaKotak = document.querySelectorAll('.kotak'); // semua kotak

// // Tugas 1
// const judulDOM = document.getElementById('judulLatihan');
// const paragrafList = document.querySelectorAll('.deskripsiLatihan');
// const tombolDOM = document.getElementById('tombolLatihan');
// tombolDOM.innerHTML = 'Berhasil diberi nama "Tombol" ';


// const satuKotak = document.querySelector('.kotak');
// const semuaKotak = document.querySelectorAll('.kotak'); // semua kotak

// // Tugas 1
// const judulDOM = document.getElementById('judulLatihan');
// const paragrafList = document.querySelectorAll('.deskripsiLatihan');
// const tombolDOM = document.getElementById('tombolLatihan');
// tombolDOM.innerHTML = 'Berhasil diberi nama "Tombol" ';


// const satuKotak = document.querySelector('.kotak');
// const semuaKotak = document.querySelectorAll('.kotak'); // semua kotak

// // Tugas 1
// const judulDOM = document.getElementById('judulLatihan');
// const paragrafList = document.querySelectorAll('.deskripsiLatihan');
// const tombolDOM = document.getElementById('tombolLatihan');
// tombolDOM.innerHTML = 'Berhasil diberi nama "Tombol" ';
