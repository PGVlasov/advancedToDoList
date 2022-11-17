import React, { ReactNode, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalProps {
  initialValue: string;
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
  changeTodoText(userInput: string): void;
  setShowModal?: () => boolean;
}

export const TodoChangeModal = (props: ModalProps) => {
  const [valueToChange, setValueToChange] = useState<string>(
    props.initialValue
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueToChange(event.target.value);
  };

  const handleSave = () => {
    props.changeTodoText(valueToChange);
    setValueToChange("");
  };

  return (
    <>
      <Modal show={true} onHide={handleSave} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Change Task</Modal.Title>
        </Modal.Header>
        <InputGroup className="mb-3 mt-3 w-85">
          <InputGroup.Text id="inputGroup-sizing-default">
            Change Task
          </InputGroup.Text>
          <Form.Control
            aria-describedby="inputGroup-sizing-default"
            placeholder="Change Task........"
            value={valueToChange}
            onChange={handleChange}
          />
        </InputGroup>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
