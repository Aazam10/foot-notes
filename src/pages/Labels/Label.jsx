import { useNotes } from "../../context";
import { NoteForm, NoteCard } from "../../components";
import "./Label.css";
const Label = () => {
  const {
    noteState: { notes, archives },
    showNoteForm,
    toggle,
  } = useNotes();

  const allNotes = [...notes, ...archives];

  const filteredLabelNotes = (label) =>
    allNotes.filter((note) => note.tags.includes(label));

  const noteslabels = notes.reduce((label, note) => {
    return [...label, ...note.tags];
  }, []);

  const archiveLabels = archives.reduce((archiveLabel, archive) => {
    return [...archiveLabel, ...archive.tags];
  }, []);

  const allLabels = [...noteslabels, ...archiveLabels];

  const uniqueLabels = [...new Set(allLabels)];

  return (
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
  );
};

export { Label };
