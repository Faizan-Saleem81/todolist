const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector(".add-btn");
const deleteSelectedBtn = document.querySelector(".delete-selected-btn");
const todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("select-todo");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => li.remove());


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);


    todoInput.value = "";
});


deleteSelectedBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".select-todo");
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkbox.parentElement.remove();
        }
    });
});
