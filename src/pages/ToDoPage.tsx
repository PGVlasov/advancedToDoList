import React from "react";
import { useEffect, useState } from "react";
import { TodoChangeModal } from "../components/UI/Modal/TodoChangeModal";
import { ToDoForm } from "../components/ToDoForm/ToDoForm";
import { ToDoList } from "../components/ToDoList/ToDoList";
import useIsFirstRender from "../hooks/useIsFirstRender";
import { ToDo } from "../interfaces/ToDo";
import { Button } from "react-bootstrap";
var _ = require("lodash");

declare var confirm: (question: string) => boolean;

export const ToDoPage: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>(
    JSON.parse(sessionStorage.getItem("todosList") || "[]")
  );
  const [idToChange, setIdToChange] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showComplited, setShowComplited] = useState(false);

  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      sessionStorage.setItem("todosList", JSON.stringify(todos));
    }
  }, [todos, isFirst]);

  const addToDo = (userInput: string, selectedTime: number) => {
    if (userInput) {
      const newItem: ToDo = {
        id: Math.random(),
        text: userInput,
        complete: false,
        completeIn: selectedTime,
      };
      setTodos((prev) => [newItem, ...prev]);
    }
  };

  const completeHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, complete: !todo.complete, completeIn: Infinity }
          : { ...todo }
      )
    );
  };

  const changeHandler = (id: number) => {
    setIdToChange(id);
    setShowModal(true);
  };

  const changeTodoText = (valueToChange: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === idToChange ? { ...todo, text: valueToChange } : { ...todo }
      )
    );
    setIdToChange(0);
    setShowModal(false);
  };

  const removeToDo = (id: number) => {
    const shouldRemove = confirm("Вы уверены что хотите удалить задание?");
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const filterHandler = () => {
    setTodos(_.sortBy(todos, ["completeIn"]));
  };

  if (showModal) {
    const todo = todos.find((todo) => todo.id === idToChange);
    return (
      <TodoChangeModal
        changeTodoText={changeTodoText}
        initialValue={todo?.text || ""}
      />
    );
  }

  if (showComplited) {
    const tds = todos.filter((todo) => todo.complete === false);
    return (
      <>
        <ToDoForm addToDo={addToDo} />
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <Button className="primary" onClick={() => setShowComplited(false)}>
            Show All
          </Button>
          <Button className="primary" onClick={filterHandler}>
            Filter from earlest
          </Button>
        </div>
        <hr />
        <ToDoList
          todos={tds}
          removeToDo={removeToDo}
          completeHandler={completeHandler}
          changeHandler={changeHandler}
        />
      </>
    );
  }

  return (
    <>
      <ToDoForm addToDo={addToDo} />
      <hr />
      <div className="d-flex align-items-center justify-content-between">
        <Button className="primary" onClick={() => setShowComplited(true)}>
          Show unfinished
        </Button>
        <Button className="primary" onClick={filterHandler}>
          Filter from earlest
        </Button>
      </div>
      <hr />
      <ToDoList
        todos={todos}
        removeToDo={removeToDo}
        completeHandler={completeHandler}
        changeHandler={changeHandler}
      />
    </>
  );
};
