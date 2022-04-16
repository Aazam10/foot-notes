import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useAuth, useNotes } from "../../context";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const { toggle, setToggle } = useNotes();
  console.log(setToggle);
  return (
    <header className="header">
      <div className="notes-logo ">
        <FaBars
          className="menu-icon"
          onClick={() => setToggle((prev) => !prev)}
        />
        FootNotes
      </div>
      <nav className="navigation">
        <FaMoon className="icon-style" />
      </nav>
    </header>
  );
};

export { Navbar };
