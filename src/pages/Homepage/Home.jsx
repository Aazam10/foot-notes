import "./Home.css";
import { NoteList, NoteForm } from "../../components";
import { useAuth, useNotes } from "../../context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { showNoteForm, setShowNoteForm, setIsEditing, toggle } = useNotes();
  const {
    authState: { token },
  } = useAuth();
  const navigate = useNavigate();

  const addNotebtnHandler = () => {
    if (token) {
      setShowNoteForm(true);
      setIsEditing(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className={`notes-main-container ${
        toggle ? "notes-container-toggle-open" : null
      }`}
    >
      <div className="btn-container">
        <button className="btn add-note-btn" onClick={addNotebtnHandler}>
          + Add Note
        </button>
      </div>

      {showNoteForm && <NoteForm />}
      <NoteList />
    </div>
  );
};

export { Home };
