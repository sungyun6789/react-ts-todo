import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../module/index';
import { toggleTodo, removeTodo, addTodo } from '../module/todos';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

const TodoApp = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <React.Fragment>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </React.Fragment>
  );
};

export default TodoApp;
