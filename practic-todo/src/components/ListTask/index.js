import React from "react";
import useTodo from "../../hook";
import Forma from "../Form";

const ListTask = () => {
  const { tasks, deleteTask } = useTodo([
    {
      id: Date.now(),
      body: "test task",
      isDone: false,
    },
  ]);
  return (
    <>
      <div>
        {tasks.map((task) => (
          <p key={task.id}>New task:{task.body}
            <span onClick={() => {deleteTask(task.id);}}>X
            </span>
          </p>
        ))}
      </div>
    </>
  );
};

export default ListTask;
