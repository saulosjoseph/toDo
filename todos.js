const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

const toDos = JSON.parse(localStorage.getItem('list_toDos')) || [
  'Fazer café',
  'Estudar js',
  'Acessar comunidade'
];

function addToDo() {
  const toDoText = inputElement.value;

  toDos.push(toDoText);
  inputElement.value = '';
  renderToDos();
  saveToStorage();
}

function renderToDos() {
  listElement.innerHTML = '';

  toDos.forEach((toDo, index) => {
    const toDoElement = document.createElement('li');
    const toDoText = document.createTextNode(toDo);

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', `deleteToDo(${index})`);
    const linkText = document.createTextNode('Exluir');
    linkElement.appendChild(linkText);

    toDoElement.appendChild(toDoText);
    toDoElement.appendChild(linkElement);
    listElement.appendChild(toDoElement);
  })
};

function deleteToDo(index) {
  toDos.splice(index, 1);
  renderToDos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem( 'list_toDos', JSON.stringify(toDos) );
}

buttonElement.onclick = addToDo;
renderToDos();
