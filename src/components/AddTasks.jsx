import { useState } from "react";

function AddTasks({OnAddTaskSubmit}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    console.log({title, description})
    return (
        <div className="bg-green-100 rounded-md p-5 flex flex-col">
            {/* input do nome da tarefa  */}
            <h1 className="text-center text-3xl mb-3 font-bold capitalize">task manager</h1>
            <span className="text-center error-task text-red-500">
                
            </span>
            <label htmlFor="add-task-input" className="mb-3 float-left font-normal text-lg uppercase">
                Title
            </label>
            <input type="text"
            name="add-task"
            maxLength={150}
            minLength={20}
            id="add-task-input"
            className="form-control font-medium outline-none mb-4 shadow-md rounded-md indent-[45px] pt-2 pb-2"
            value={title}
            onChange={
                (event) =>
                    setTitle(event.target.value)
            }
            placeholder="enter a task..." />

            {/* input de descrição da tarefa  */}
            <label htmlFor="add-description-input" className="mb-3 float-left font-normal text-lg uppercase">
                description
            </label>
            <input type="text"
            name="add-description"
            maxLength={150}
            minLength={20}
            id="add-description-input"
            className="form-control font-medium outline-none shadow-md rounded-md indent-[45px] pt-2 pb-2"
            value={description}
            onChange={
                (event) =>
                    setDescription(event.target.value)
            }
            placeholder="enter a description..." />

            {/* botão para criar tarefa */}
            <button
            onClick={
                () => {
                    if (!title.trim() || !description.trim()) {
                        return document.querySelector(".error-task").innerHTML = "Empty title or description."
                    }
                    else {
                        OnAddTaskSubmit(title, description),
                        setTitle("")
                        setDescription("")
                        return document.querySelector(".error-task").innerHTML = null
                    }
                }
            }
            className="bg-green-500 rounded-md mt-4 shadow-md text-white font-bold p-2">
                Add Task
            </button>
        </div>
    )
}
export default AddTasks;