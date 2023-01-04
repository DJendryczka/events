const input = document.getElementById('input');
const button = document.getElementById('enterTask');
const ul = document.querySelector('ul');
const delBtn = document.getElementsByClassName('delbtn');

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
ul.addEventListener('click', taskDone);

// Removing list item
document.addEventListener('click', (e) => {
  if (e.target.matches('.delbtn')) {
    e.target.parentNode.remove();
  }
});

function createListElement() {
  const li = document.createElement('li');
  const delButton = document.createElement('button');
  delButton.className += 'delbtn';
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(delButton);
  delButton.innerHTML = 'Delete';
  input.value = '';
}

function taskDone(el) {
  if (el.target.tagName === 'LI') {
    el.target.classList.toggle('done');
  }
}

function inputLenght() {
  return input.value.length;
}

function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLenght() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
