import React from 'react';
import useTodo from '../../hook';
import Forma from '../Form';
import ListTask from '../ListTask';

const Todo = () => {
  const { tasks, deleteTask, addTask } = useTodo([
    {
      id: Date.now(),
      body: "test task",
      isDone: false,
    },
  ]);
  return (
    <div>
      <Forma addTask={addTask}/>
      <ListTask tasks={tasks} deleteTask= {deleteTask} />
     </div>
  );
}

export default Todo;