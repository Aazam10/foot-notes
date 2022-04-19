import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useAuth, useNotes } from "../../context";
import { Link } from "react-router-dom";
import { FilterModal } from "../FilterModal/FilterModal";
import { MdFilterList } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const { setToggle } = useNotes();

  const [showFilter, setShowFilter] = useState(false);

  const location = useLocation();

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
        {location.pathname === "/" ? (
          <div>
            <MdFilterList
              className="icon-style icon-lg"
              onClick={() => setShowFilter((prev) => !prev)}
            />
            {showFilter && <FilterModal />}
          </div>
        ) : null}

        <FaMoon className="icon-style" />
      </nav>
    </header>
  );
};

export { Navbar };
