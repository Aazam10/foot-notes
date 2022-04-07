import "./Home.css";
import { Navbar, Sidebar, NoteList, NoteForm } from "../../components";
import { useNotes } from "../../context";

const Home = () => {
  const { showNoteForm, setShowNoteForm } = useNotes();
  const addNotebtnHandler = () => {
    setShowNoteForm(true);
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
