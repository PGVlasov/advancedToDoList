import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

interface ToDoFormProps {
  addToDo(userInput: string, selectedTime: number): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const [userInput, setUserInput] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<number>(1);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const changeDayHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(Number(event.target.value));
  };

  const SubmitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.addToDo(userInput, selectedTime);
    setUserInput("");
  };

  return (
    <>
      <InputGroup className="mb-3 mt-3 w-85 ">
        <InputGroup.Text id="inputGroup-sizing-default">
          Add task
        </InputGroup.Text>
        <Form.Control
          aria-describedby="inputGroup-sizing-default"
          placeholder="Add task........"
          value={userInput}
          onChange={changeHandler}
        />
        <InputGroup.Text id="inputGroup-sizing-default">
          Сomplete in
        </InputGroup.Text>
        <Form.Select onChange={changeDayHandler}>
          <option defaultValue="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <Button className="primary" onClick={SubmitHandler}>
          Submit
        </Button>
      </InputGroup>
    </>
  );
};
