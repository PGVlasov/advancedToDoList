import React from "react";
import { ToDo } from "../../interfaces/ToDo";
import Form from "react-bootstrap/Form";
import "bootstrap-icons/font/bootstrap-icons.css";

type ToDoListProps = {
  todos: ToDo[];
  completeHandler: (id: number) => void;
  removeToDo: (id: number) => void;
  changeHandler: (id: number) => void;
};

export const ToDoList: React.FC<ToDoListProps> = ({
  todos,
  completeHandler,
  removeToDo,
  changeHandler,
}) => {
  if (todos.length === 0) {
    return <p className="center">Пока что нет заданий</p>;
  }
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();

    removeToDo(id);
  };

  const setTodoIdToChange = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    changeHandler(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.complete) {
          classes.push("complete");
        }
        return (
          <div className={classes.join(" ")} key={todo.id}>
            <Form
              className={
                "mb-3 mt-2 d-flex align-items-center justify-content-between border border-primary"
              }
            >
              <div
                className={
                  "d-flex align-items-center justify-content-between ms-2"
                }
              >
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  checked={todo.complete}
                  onChange={() => completeHandler(todo.id)}
                />
                {todo.complete ? (
                  <span className={"text-decoration-line-through"}>
                    {todo.text}
                  </span>
                ) : (
                  <span>{todo.text}</span>
                )}
              </div>
              <div
                className={
                  "mb-2 pt-2 mr-3 d-flex align-items-center justify-content-between"
                }
              >
                <div
                  className={
                    "me-3 mt-2 d-flex align-items-center justify-content-center"
                  }
                >
                  {todo.complete ? (
                    <p>completed</p>
                  ) : (
                    <p className={"fs-14"}>
                      complete in {todo.completeIn} day(s){" "}
                    </p>
                  )}
                </div>
                <div className={"text-primary me-5"}>
                  <i
                    className="bi bi-pencil-square"
                    role="button"
                    onClick={(event) => {
                      setTodoIdToChange(event, todo.id);
                    }}
                  ></i>
                </div>
                <div className={"text-danger me-2"}>
                  <i
                    className="bi bi-trash3"
                    role="button"
                    onClick={(event) => {
                      removeHandler(event, todo.id);
                    }}
                  ></i>
                </div>
              </div>
            </Form>
          </div>
        );
      })}
    </ul>
  );
};
