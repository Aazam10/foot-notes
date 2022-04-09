import "./Sidebar.css";
import {
  FaTags,
  FaHome,
  FaArchive,
  FaTrashAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="notes-sidebar">
      <ul className="list">
        <li>
          <Link className="note-list" to="/">
            <FaHome />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link className="note-list" to="/">
            <FaTags />
            Label
          </Link>
        </li>
        <li>
          <Link className="note-list" to="/">
            <FaArchive />
            Archives
          </Link>
        </li>
        <li>
          <Link className="note-list" to="/trash">
            <FaTrashAlt />
            Deletes
          </Link>
        </li>
      </ul>
      <div className="user">
        <p className="avatar">AH</p>
        <h2>Aazam</h2>
        <FaSignOutAlt className="signout" />
      </div>
    </aside>
  );
};

export { Sidebar };
