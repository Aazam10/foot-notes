import "./Home.css";
import { Navbar, Sidebar, NoteList, NoteForm } from "../../components";
import { useAuth, useNotes } from "../../context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { showNoteForm, setShowNoteForm, setIsEditing } = useNotes();
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
    <div>
      <Navbar />
      <main className="main-container">
        <Sidebar />
        <div className="notes-main-container">
          <div className="btn-container">
            <button className="btn add-note-btn" onClick={addNotebtnHandler}>
              + Add Note
            </button>
          </div>

          {showNoteForm && <NoteForm />}
          <NoteList />
        </div>
      </main>
    </div>
  );
};

export { Home };
