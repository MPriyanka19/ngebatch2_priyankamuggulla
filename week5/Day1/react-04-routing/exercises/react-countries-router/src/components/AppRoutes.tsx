import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Products from "./Products";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Categories />}></Route>
      <Route path="/:category" element={<Products />}></Route>
    </Routes>
  );
}
