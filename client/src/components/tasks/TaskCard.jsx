import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <Card>
         {/* Contenedor para la imagen */}
         <div className="border-b border-gray-200 pb-4">
        <img
          src={task.image} // Asegúrate de tener la propiedad 'image' en tu objeto 'task' con la URL de la imagen
          alt="Task Image"
          className="w-full h-auto"
        />
      </div>

      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteTask(task._id)}>Delete</Button>
          <ButtonLink to={`/tasks/${task._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      {/* format date */}
      <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}
