const addBtn = document.querySelector("#add")

addBtn.addEventListener("click",() => {
    addNewNote()
})


function addNewNote(){
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    
    <div class="notes">
    <div class="tools">
        
                <button class="edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-all"></i>
                </button>
            </div>
            <div class="main hidden">
                
            </div>
            <textarea></textarea>
    </div> 


    `


const editBtn = note.querySelector(".edit")
const deleteBtn = note.querySelector(".delete")

const main = notes.querySelector(".main")
const textArea = note.querySelector("textarea")


deleteBtn.addEventListener("click",() => {
    note.remove()
})

editBtn.addEventListener("click",() => {
    main.classList.toggle("hidden")
    textArea.classList.toggle("hidden")
})

textArea.addEventListener("input",(e) => {
    const { value } = e.target
    main.innerHTML = marked(value)
})

document.body.appendChild(note)

}

