const p3 = document.querySelector('.p3');

function ubahWarna() {
  p3.style.backgroundColor = 'lightgreen';
}

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', () => {
  const ul = document.querySelector('section#b ul');
  const liBaru = document.createElement('li');

  const teksLiBaru = document.createTextNode('Halo Halo hai');
  liBaru.appendChild(teksLiBaru);

  ul.appendChild(liBaru);
  liBaru.style.backgroundColor = 'lightgreen';
});

//

const p2 = document.querySelector('.p2');
p2.addEventListener('mouseenter', () => {
  p2.style.backgroundColor = 'lightgreen';
});

p2.addEventListener('mouseleave', () => {
  p2.style.backgroundColor = 'white';
});
