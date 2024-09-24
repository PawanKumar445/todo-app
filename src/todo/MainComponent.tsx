import React, { useState } from "react";
import IconDelete from "../Icons/delete.tsx";

export const MainComponent = () => {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      value: "eat healty food",
      checked: false,
      isCompleted: false,
    },
    {
      value: "Daily got gym to buiild a fit body",
      checked: false,
      isCompleted: false,
    },
    {
      value: "Task3",
      checked: false,
      isCompleted: false,
    },
  ]);
  const initialTodo: Todo = { value: "", checked: false, isCompleted: false };
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
        return {
          ...t,
          checked: !clickedTodo.checked,
          isCompleted: !clickedTodo.isCompleted,
        };
      } else return t;
    });
    setTodoList(updatedTotoList);
  };

  const handleDelete=(todoClicked: Todo )=>{
    
    
    const updateTodoList= todoList.filter((t: Todo)=>
    (todoClicked.value !== t.value)
    );
    console.log('Updated todo list is:', updateTodoList);
    
    setTodoList(updateTodoList);
  }

  return (
    <div className="mt-10 ms-28 p-5">
      <div className="">
        <p className="text-4xl font-bold font-serif">TODO LIST</p>
        <form className="w-full p-2 ">
          <input
            type="text"
            value={todo?.value}
            onInput={handleTodoInput}
            className=" outline-none border-b-2 "
            placeholder="Enter todo here..."
          />
          <input
            className="ms-3 border border-red-800 px-2 py-1 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white text-sm font-semibold"
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
                className="group p-2 text-lg font-semibold font-serif bg-slate-100 my-3 hover:bg-gray-300 rounded-md"
              >
                <input
                  type="checkbox"
                  className="mx-3"
                  checked={todo?.checked}
                  onChange={(e) => handleCheckBox(todo)}
                />
                <span className="me-3 ">{index + 1}.</span>
                {/* <div className="inline-block text-wrap w-1/3"> */}
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className={`${
                      todo?.checked ? "line-through" : ""
                    } outline-none text-balance`}
                  >
                    {todo?.value}
                  </span>
                {/* </div> */}
                <span
                  className={`text-sm font-normal mx-5 ${
                    todo?.isCompleted ? "text-lime-600" : "text-red-600"
                  } my-auto`}
                >
                  {todo?.isCompleted ? "completed" : "pending"}
                </span>
                <div className="w-7 inline-block  opacity-0 group-hover:opacity-100 cursor-pointer  ">
                  <span onClick={() => handleDelete(todo)}>
                    <IconDelete />
                  </span>
                </div>
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
  isCompleted: boolean;
}
