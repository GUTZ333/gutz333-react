import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import OffCanvas from "./components/OffCanvas";
import "./app.css"
import { v4 } from "uuid";
function App() {
    // Carregar tarefas do Local Storage
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    // Atualizar o Local Storage sempre que as tarefas mudarem
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else {
            localStorage.removeItem("tasks"); // Remover a chave quando não há tarefas
        }
    }, [tasks]);
    // Função para alternar entre completo/não completo
    function OnTaskClick(TaskId) {
        const newTask = tasks.map(task =>
            task.id === TaskId ? { ...task, isCompleted: !task.isCompleted } : task
        );
        setTasks(newTask);
    }
    // Função para deletar uma tarefa
    function OnDeleteTaskClick(TaskId) {
        const newTask = tasks.filter(task => task.id !== TaskId);
        setTasks(newTask);
    }

    // Função de adicionar uma nova tarefa
    function OnAddTaskSubmit(title, description) {
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="w-full h-full flex flex-row justify-start items-start space-x-[425px] p-6">
            <OffCanvas tasks={tasks}/>
            <div className="w-[500px] space-y-8">
                <div className="flex w-[500px] justify-center items-center">
                    <img src="./public/gutz333.ico" alt="gutz333" className="w-[70px]"/>
                    <h1 className="text-white text-3xl font-bold mt-2 text-center">Lpsking</h1>
                </div>
                <AddTasks OnAddTaskSubmit={OnAddTaskSubmit}/>
                <Tasks 
                    tasks={tasks} 
                    OnTaskClick={OnTaskClick} 
                    OnDeleteTaskClick={OnDeleteTaskClick}
                />
            </div>
        </div>
    );
}

export default App;