import "./Sidebar.css";
import {
  FaTags,
  FaHome,
  FaArchive,
  FaTrashAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNotes } from "../../context";
const Sidebar = () => {
  const {
    noteState: { notes, archives, trash },
  } = useNotes();
  // console.log("notes", notes, "archives", archives, "trash", trash);
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
          <Link className="note-list" to="/archive">
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
