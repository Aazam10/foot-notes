import "./Home.css";
import { Navbar, Sidebar, NoteCard, NoteForm } from "../../components";
import { useState } from "react";

const Home = () => {
  const [showNoteForm, setShowNoteForm] = useState(false);
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
          <div className="notes-card-container">
            <NoteCard />
            <NoteCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export { Home };
