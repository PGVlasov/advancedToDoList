import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NotFound404 = () => {
  const history = useNavigate();
  return (
    <div>
      <h1>Page not found</h1>
      <Button className="primary" onClick={() => history("/")}>
        to the main Page
      </Button>
    </div>
  );
};
