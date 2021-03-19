import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module';
import { removeTodo, toggleTodo } from '../module/todos';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
