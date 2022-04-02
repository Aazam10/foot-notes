import "./NoteForm.css";
import { FaTags } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
const NoteForm = () => {
  return (
    <section className="note-form-container">
      <form>
        <input type="text" placeholder="Title" className="user-title-input" />
        <textarea
          placeholder="Take a Note..."
          className="user-description-input"
        ></textarea>
        <div className="tools-container">
          <div className="tools">
            <MdColorLens className="icon" />
            <FaTags className="icon" />
          </div>

          <button className="btn btn-note" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </section>
  );
};

export { NoteForm };
