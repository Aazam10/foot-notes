import { useNotes } from "../../context";
import { Navbar, Sidebar, NoteForm, NoteCard } from "../../components";
import "./Label.css";
const Label = () => {
  const {
    noteState: { notes },
    showNoteForm,
    toggle,
  } = useNotes();
  console.log(notes);

  const filteredLabelNotes = (label) =>
    notes.filter((note) => note.tags.includes(label));

  const labels = notes.reduce((label, note) => {
    if (label.includes(note.tags)) {
      return;
    } else {
      return [...label, ...note.tags];
    }
  }, []);
  const uniqueLabels = [...new Set(labels)];

  return (
    // <div>
    //   <Navbar />
    //   <main className="main-container">
    //     <Sidebar />
    <div
      className={`notes-main-container ${
        toggle ? "notes-container-toggle-open" : null
      }`}
    >
      {uniqueLabels.map((label) => (
        <div>
          <h2 className="label-heading">{label}</h2>
          <div className="notes-card-container">
            {filteredLabelNotes(label).map((note) => (
              <NoteCard note={note} key={note._id} />
            ))}
          </div>
        </div>
      ))}
      {showNoteForm && <NoteForm />}
    </div>
    //   </main>
    // </div>
  );
};

export { Label };
