import "./NoteForm.css";
import { FaTags } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import { useState } from "react";
import { useAuth } from "../../context";

import { addNote } from "../../Services";

const NoteForm = () => {
  const { authState } = useAuth();
  const { token } = authState;
  console.log(token);

  const [noteDetails, setNoteDetails] = useState({ title: "", content: "" });

  const noteDetailsChangeHandler = (event) => {
    const { name, value } = event.target;
    setNoteDetails({ ...noteDetails, [name]: value });
  };

  const submitNotebtnHandler = async (event) => {
    event.preventDefault();

    const response = await addNote(noteDetails, token);
    console.log(response);
  };
  console.log(noteDetails);
  return (
    <div className="form-open">
      <section className="note-form-container">
        <form>
          <input
            type="text"
            placeholder="Title"
            className="user-title-input"
            name="title"
            value={noteDetails.title}
            onChange={noteDetailsChangeHandler}
          />
          <textarea
            placeholder="Take a Note..."
            className="user-description-input"
            name="content"
            value={noteDetails.content}
            onChange={noteDetailsChangeHandler}
          ></textarea>
          <div className="tools-container">
            <div className="tools">
              <MdColorLens className="icon" />
              <FaTags className="icon" />
            </div>

            <button
              className="btn btn-note"
              type="submit"
              onClick={submitNotebtnHandler}
            >
              Add Note
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export { NoteForm };
