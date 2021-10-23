function addTodo() {
    if (input.value !== '') {
        let todo = document.createElement('p');
        todo.classList = 'todo__item shadow';
        todo.innerText = input.value;
        todo.animate([
                {
                    opacity: '0'
                },
                {
                    opacity: '100'
                }],
            {duration: 1000});
        todo.onclick = completeTodo.bind('todo', todo);
        todo_list.insertBefore(todo, todo_list.firstChild);
        let is_empty = document.getElementsByClassName('empty')[0];
        if(is_empty) {
            is_empty.remove();
        }
        input.value = '';
    }
}

function empty() {
    let empty = document.createElement('p');
    empty.classList = 'todo__item shadow empty';
    empty.innerText = 'Todos not found'
    todo_list.append(empty);
}

function completeTodo(todo) {
    if (todo.classList.contains('todo__item-completed')) {
        todo.animate([
                {
                    opacity: '100'
                },
                {
                    opacity: '0'
                }],
            {duration: 1000});
        setTimeout(() => {
            todo.remove();
            if (todo_list.children.length === 0)
                empty();
        }, 1000)
        return;
    }
    todo.classList.add('todo__item-completed');
}

let form = document.querySelector('form')
let input = document.querySelector('input');
let button = document.querySelector('button');
let todo_list = document.getElementsByClassName('todo__list')[0];
let todos = document.getElementsByClassName('todo__item');

button.onclick = function () {
    addTodo()
}

form.onkeydown = function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTodo()
    }
}

for (let todo of todos) {
    todo.onclick = completeTodo.bind('todo', todo);
}
