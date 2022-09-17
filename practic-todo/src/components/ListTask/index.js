import React from "react";
import useTodo from "../../hook";

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
      <section>
        {tasks.map((task) => (
          <p key={task.id}>{task.body}
            <span onClick={() => {deleteTask(task.id);}}>X
            </span>
          </p>
        ))}
      </section>
    </>
  );
};

export default ListTask;
