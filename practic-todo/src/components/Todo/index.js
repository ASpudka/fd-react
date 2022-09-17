import React from 'react';
import useTodo from '../../hook';
import Forma from '../Form';
import ListTask from '../ListTask';

const Todo = () => {
 
  return (
    <div>
      <Forma/>
      <ListTask/>
     </div>
  );
}

export default Todo;