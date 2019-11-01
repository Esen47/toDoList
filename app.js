const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="delete far fa-trash-alt"></i>
    </li>
    `;
    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    } else {
         (() => {
            const el = document.createElement('div');
            el.classList.add('warning');
            el.innerHTML = 'Please enter a desired action';
            document.body.appendChild(el);
            setTimeout(() => {
                document.body.removeChild(el);
            },2500)
        })();
    }
});