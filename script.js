window.addEventListener('load', ()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault(); //prevent the referesh of the page

        const task = input.value;

        if(!task){
            alert("please enter tasks")
            return;
        }
        
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        list_el.appendChild(task_el)

        const task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task ;
        task_input.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input)

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button")
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit"
        
        const task_delete_el = document.createElement("button")
        task_delete_el.classList.add("Delete");
        task_delete_el.innerHTML = "Delete"

        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)

        task_el.appendChild(task_actions_el)

        task_content_el.appendChild(task_input)
        input.value="";

        task_edit_el.addEventListener('click', ()=>{
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_input.removeAttribute("readonly");
                task_input.focus(); //will automatically focus the input we dont even have to click there
                task_edit_el.innerHTML = "SAVE"
                task_edit_el.style.color = "crimson"
            }
            else{
                task_input.setAttribute("readonly", "readonly")
                task_edit_el.innerText = "Edit"
                task_edit_el.style.color = "white"
            }
        });

        task_delete_el.addEventListener('click', () =>{
            list_el.removeChild(task_el);
        });

    })
})