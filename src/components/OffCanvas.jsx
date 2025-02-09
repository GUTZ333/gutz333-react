import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Offcanvas } from "bootstrap";
import { Menu } from "lucide-react";

function OffCanvas ({tasks}) {
  const offcanvasRef = useRef(null);

  const abrirOffcanvas = () => {
    const offcanvas = new Offcanvas(offcanvasRef.current);
    offcanvas.show();
  };

  return (
    <div>
      {/* Botão que abre o Offcanvas */}
      <button className="btn btn-success" onClick={abrirOffcanvas}>
        <Menu />
      </button>

      {/* Estrutura do Offcanvas */}
      <div ref={offcanvasRef} className="offcanvas offcanvas-start" id="offcanvasReact">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title font-bold text-2xl">job history</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
            {tasks.length > 0 ? (
              <ul>
                {tasks.map((task) => (
                  <li key={task.id} className="mb-3 p-2 bg-light rounded">
                    <strong>ID:</strong> {task.id} <br />
                    <strong>Title:</strong> {task.title} <br />
                    <strong>Description:</strong> {task.description || "Undefined"} <br />
                    <strong>Completed:</strong> {task.isCompleted ? "✅ Yes" : "❌ No"}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No tasks available</p>
            )}
        </div>

      </div>
    </div>
  );
};

export default OffCanvas;