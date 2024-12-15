import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Detail from "../pages/DetailPage";
import Layout from "./Layout";
import TodoListPage from "../pages/TodoListPage";
import NewsPage from "../pages/NewsPage";
import BlogPage from "../pages/BlogPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/todolist" element={<TodoListPage />} />
          <Route path="/todolist/:id/" element={<Detail />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
