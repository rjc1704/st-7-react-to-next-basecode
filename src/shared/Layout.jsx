// Layout.jsx
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home(SSG)
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/news" className="nav-link">
              News(ISR)
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">
              Blogs(SSR)
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/todolist" className="nav-link">
              TodoList(CSR)
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
