let btn = document.querySelector('button')
let id= 0;
btn.addEventListener("click", function (e)
{
    let todolist = document.querySelector('div.todos');
    let input = document.querySelector('input');
    let p = document.createElement("p");
    p.innerHTML = input.value;
    p.setAttribute("key", id);
    todolist.appendChild(p)
    input.value = ""
    id += 1;
    document.querySelector(`p[key="${id-1}"]`).addEventListener("click", function(e)
    {
        let todolist = document.querySelector('div.todos');
        todolist.removeChild(this);
    })
});