const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//html template used to add the item to the list once user submits
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="delete far fa-trash-alt"></i>
    </li>
    `;
    list.innerHTML += html;
}

//getting user input
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    //popup window to request input to be added
    } else {
         (() => {
            const el = document.createElement('div');
            el.classList.add('warning');
            el.innerHTML = '<p>Please enter a desired action</p>';
            document.body.appendChild(el);
            setTimeout(() => {
                document.body.removeChild(el);
            },2500)
        })();
    }
});

//deleting items
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});
//filtering the matching and non matching items in the search
const filterItems = (item) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(item))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(item))
    .forEach((todo) => todo.classList.remove('filtered'));
};
//searching items in the list
search.addEventListener('keyup', () => {
    const item = search.value.trim().toLowerCase();
    filterItems(item);
});