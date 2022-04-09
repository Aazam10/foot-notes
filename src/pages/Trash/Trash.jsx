import { useNotes } from "../../context";
import {
  Navbar,
  Sidebar,
  NoteList,
  NoteForm,
  NoteCard,
} from "../../components";

const Trash = () => {
  const {
    noteState: { trash },
  } = useNotes();
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <Sidebar />
        <div className="notes-main-container">
          <div className="notes-card-container">
            {trash.map((trashedNote) => {
              return <NoteCard note={trashedNote} key={trashedNote._id} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export { Trash };
