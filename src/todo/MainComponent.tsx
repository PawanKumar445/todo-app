import React, { useState } from 'react';

export const MainComponent=()=>{
  const [todoList, setTodoList] = useState<any[]>(['Task1', 'Task2', 'Task3']);
  const [todo, setTodo] = useState<string>('');

  const handleTodoInput=(e)=>{
    setTodo(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const list: any[] = todoList;
    console.log('LIST: ',list);
    console.log('todo:', todo);
    list.push(todo);
    setTodoList(list)
    setTodo('');
  }


  return (
    <div className="mt-10 ms-28 p-5">
      <div className='w-1/5'>
        <p className="text-4xl font-bold font-serif">TODO LIST</p>
        <form className='w-full p-2 '>
          <input
          type='text'
          value={todo}
          onInput={handleTodoInput}
          className=' w-8/12'
          />
          <input
          className='ms-3 border border-cyan-500 px-2 rounded-lg cursor-pointer hover:bg-slate-400'
          type='submit'
          value ='Add Todo'
          onClick = {handleSubmit}
          />
        </form>
        <div className="mt-2">
          <ul>
            {todoList.map((todo: string, index: number) => (
              <li key={index} className="p-2 text-lg font-semibold font-serif bg-slate-300 my-2 hover:bg-slate-50 rounded-md">
                <span className='me-3 '>{index+1}.</span>
                <span>{todo}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}