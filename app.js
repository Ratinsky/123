// Форма
// Список задач

const tasks = [
    {
        _id: '52e45345jfge34kre',
        completed: true,
        body: 'rejgkowaijfwoeafwefkweafowepofkpowekfpowkaefpokwpfokwefkpwkefpowfe \r\n',
        title: 'qwdlqwdkqo'
    },
    {
        _id: '52e45345jfge34rek',
        completed: true,
        body: 'rejgkowaijfwoeafwefkweafowepofkpowekfpowkaefpokwpfokwefkpwkefpowfe \r\n',
        title: 'qwdlqwdkqo'
    },
    {
        _id: '52e45345jfge34bee',
        completed: false,
        body: 'rejgkowaijfwoeafwefkweafowepofkpowekfpowkaefpokwpfokwefkpwkefpowfe \r\n',
        title: 'qwdlqwdkqo'
    },
    {
        _id: '52e45345jfge34kne',
        completed: false,
        body: 'rejgkowaijfwoeafwefkweafowepofkpowekfpowkaefpokwpfokwefkpwkefpowfe \r\n',
        title: 'qwdlqwdkqo'
    },
];
(function(arrOfTasks) {
const objOfTasks = arrOfTasks.reduce((acc,task) => {
    acc[task._id] = task;
    return acc;
}, {});

const listContainer = document.querySelector('.tasks-list-section .list-group',);

const form = document.forms['addTask'];
const inputTitle = form.elements['title'];
const inputBody = form.elements['body'];

renderAllTasks(objOfTasks);
form.addEventListener('submit', onFormSubmitHandler);
function renderAllTasks(tasksList) {
if (!tasksList) {
    console.error('Передайте список задач');
    return;
}
const fragment = document.createDocumentFragment();
Object.values(tasksList).forEach(task=> {
    const li = listItemTemplate(task);
    fragment.appendChild(li);
});
listContainer.appendChild(fragment);

}
function listItemTemplate({_id, title, body} = {}) {
     const li = document.createElement("li");
     li.classList.add("list-group-item", 
     "d-flex", 
     "align-items-center",
     "flex-wrap",
     "mt-2");
     const span = document.createElement('span');
     span.textContent = title;
     span.style.fontWeight = 'bold';
     const deleteBtn = document.createElement('button');
     deleteBtn.textContent = 'Delete task';
     deleteBtn.classList.add('btn','btn-danger','ml-auto','delete-btn');
     const article = document.createElement('p');
     article.textContent = body;
     article.classList.add('mt-2','w-100');
     li.appendChild(span);
     li.appendChild(deleteBtn);
     li.appendChild(article);
     return li;
}

function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputTitle.value; 
    if (!titleValue || !bodyValue) {
        alert('Пожалуйста введите текст');
        return;
    } const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement('afterbegin',listItem);
    form.reset();
}

function createNewTask(title,body){ 
 const newTask = {
     title,
     body,
     completed: false,
     _id: `task-${Math.random()}`,
 };
 objOfTasks[newTask._id] = newTask;
 return { ...newTask};
}
})(tasks);