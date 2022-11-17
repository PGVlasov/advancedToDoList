import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavMenu } from "../components/Navbar/NavMenu";
import { AboutPage } from "../pages/AboutPage";
import { NotFound404 } from "../pages/NotFound404";
import { ToDoPage } from "../pages/ToDoPage";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div className="container">
        <Routes>
          <Route element={<ToDoPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<NotFound404 />} path="*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
