import { ChevronRightIcon, DeleteIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, OnTaskClick, OnDeleteTaskClick }) {
    const navigate = useNavigate();
    function OnSeaDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/tasks?${query.toString()}`);
    }
    return (
        <div className="space-y-3 p-6 bg-slate-200 rounded-md shadow">
            {/* Se não houver tarefas, exibir mensagem */}
            {tasks.length === 0 ? (
                <p className="text-gray-500 text-center font-medium bg-white p-4 rounded-md shadow">
                    No task available. Add a new task!
                </p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} className="flex">
                            <button
                                onClick={() => OnTaskClick(task.id)}
                                className={`bg-green-400 w-full text-white p-2 rounded-md mr-2 mb-3 ${
                                    task.isCompleted && "line-through"
                                }`}
                            >
                                {task.title}
                            </button>
                            <button
                                onClick={() => OnSeaDetailsClick(task)}
                                className="bg-green-400 p-3 rounded-md text-center text-white mr-2 mb-3"
                            >
                                <ChevronRightIcon />
                            </button>
                            <button
                                onClick={() => OnDeleteTaskClick(task.id)}
                                className="bg-green-400 p-3 rounded-md text-center text-white mb-3"
                            >
                                <DeleteIcon />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Tasks;
