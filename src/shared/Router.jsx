import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import TodoDetail from "../pages/TodoDetail";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todoDetail/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;