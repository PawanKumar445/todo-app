import React, { useState } from "react";

export const MainComponent = () => {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      value: "Task1",
      checked: false,
    },
    {
      value: "Task2",
      checked: false,
    },
    {
      value: "Task3",
      checked: false,
    },
  ]);
  const initialTodo: Todo = { value: "", checked: false};
  const [todo, setTodo] = useState<Todo>(initialTodo);

  const handleTodoInput = (e) => {
    const todo: Todo = { ...initialTodo, value: e.target.value };
    setTodo(todo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const list: any[] = todoList;
    const found = list.find(
      (l) => todo?.value.toLowerCase() === l?.value.toLowerCase()
    );
    if (found) {
      alert("Todo Already exist!!!");
    } else {
      if (todo) {
        list.push(todo);
        setTodoList(list);
      }
    }
    setTodo(initialTodo);
  };

  const handleCheckBox = (clickedTodo: Todo) => {
    const updatedTotoList: any[] = todoList.map((t) => {
      if (t?.value === clickedTodo?.value) {
        return { ...t, checked: !clickedTodo.checked };
      } else return t;
    });
    setTodoList(updatedTotoList);
  };


  return (
    <div className="mt-10 ms-28 p-5">
      <div className="w-1/5">
        <p className="text-4xl font-bold font-serif">TODO LIST</p>
        <form className="w-full p-2 ">
          <input
            type="text"
            value={todo?.value}
            onInput={handleTodoInput}
            className=" w-8/12 outline-none border-b-2"
            placeholder="Enter todo here..."
          />
          <input
            className="ms-3 border border-cyan-500 px-2 rounded-lg cursor-pointer hover:bg-slate-400"
            type="submit"
            value="Add Todo"
            onClick={handleSubmit}
          />
        </form>
        <div className="mt-2">
          <ul>
            {todoList.map((todo: Todo, index: number) => (
              <li
                key={index}
                className="p-2 text-lg font-semibold font-serif bg-orange-300 my-2 hover:bg-slate-50 rounded-md"
              >
                <input
                  type="checkbox"
                  className="mx-3"
                  checked={todo?.checked}
                  onChange={(e) => handleCheckBox(todo)}
                />
                <span className="me-3 ">{index + 1}.</span>
                <span
                  contentEditable 
                  suppressContentEditableWarning
                  className={`${
                    todo?.checked ? "line-through" : ""
                  } outline-none`}
                >
                  {todo?.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

class Todo {
  value: string;
  checked: boolean;
}
