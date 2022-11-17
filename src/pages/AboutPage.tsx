import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useNavigate();
  return (
    <>
      <h1>Info Page</h1>
      <p>Some information about Project</p>
      <Button className="primary" onClick={() => history("/")}>
        to the main Page
      </Button>
    </>
  );
};
