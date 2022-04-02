import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="header">
      <div className="notes-logo ">FootNotes</div>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="login">Login</li>

          <li>
            <FaMoon className="icon-style" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
