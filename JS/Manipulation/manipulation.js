/*
document.createElement
document.createTextNode
element.appendChild
element.replaceChild
element.removeChild
element.insertBefore

element.setAttribute()
element.classList
element.style.<property>
element.innerHTML
*/

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraph Baru');
pBaru.appendChild(teksPBaru); // simpan tulisan ke dalam paragraf

// simpan P baru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru');
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
