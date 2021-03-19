import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <TodoInsert />
      <TodoList />
    </React.Fragment>
  );
};

export default App;
