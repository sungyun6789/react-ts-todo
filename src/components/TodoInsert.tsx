import React, { ChangeEvent, FormEvent, useState } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
      <button>등록</button>
    </form>
  );
};

export default TodoInsert;