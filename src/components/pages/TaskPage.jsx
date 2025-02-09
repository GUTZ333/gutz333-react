import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    return (
        // main da página 
        <div className="bg-green-500 h-screen w-screen flex justify-center items-center">
            {/* card da tarefa navegada  */}
            <div className=" bg-green-50 p-5 justify-start space-y-3">
                <div className="flex flex-row space-x-2 w-max h-max">
                    <a href="/" className="h-max bg-green-400 text-white bottom-2 p-1 mt-3">
                        <ChevronLeftIcon />
                    </a>
                    <h1 className="text-slate-500 p-1 font-bold text-4xl">{title}</h1>
                </div>
                <p className="w-[500px] flex flex-nowrap p-1 font-normal text-slate-500">{description}</p>
            </div>
        </div>
    )
};

export default TaskPage;