import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";
import { useAuth } from "../../context";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { authState, authDispatch } = useAuth();
  const { token } = authState;

  return (
    <header className="header">
      <div className="notes-logo ">FootNotes</div>
      <nav className="navigation">
        <ul className="nav-list">
          {token ? (
            <li className="login">Logout</li>
          ) : (
            <Link to="/login">
              <li className="login">Login</li>
            </Link>
          )}

          <li>
            <FaMoon className="icon-style" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
