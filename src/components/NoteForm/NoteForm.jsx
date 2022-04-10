import "./NoteForm.css";
import { FaTags } from "react-icons/fa";
import { MdColorLens, MdCancel, MdBarChart } from "react-icons/md";

import { useAuth, useNotes } from "../../context";

import { addNote } from "../../Services";
import { editArchiveNoteFn, editNoteFn } from "../../utils";
import { useState } from "react";
import { ColorPallete } from "../ColoPallete/ColorPallete";
import { Priority } from "../Priority/Priority";

const NoteForm = () => {
  const { authState } = useAuth();
  const {
    noteState: { notes, archives },
    noteDispatch,
    setShowNoteForm,
    noteDetails,
    setNoteDetails,
    inputInitialState,
    setIsEditing,
  } = useNotes();

  const { token } = authState;

  // const [noteDetails, setNoteDetails] = useState({ title: "", content: "" });
  const [showColorPallete, setShowColorPallete] = useState(false);
  const [showPriority, setShowPriority] = useState(false);

  const noteExists = notes.find((note) => note._id === noteDetails._id);
  const archiveExists = archives.find(
    (archivedNote) => archivedNote._id === noteDetails._id
  );

  const createdDate = new Date().toLocaleString();

  const noteDetailsChangeHandler = (event) => {
    const { name, value } = event.target;
    setNoteDetails({ ...noteDetails, [name]: value });
  };

  const closeNoteForm = () => {
    setShowNoteForm(false);
    setIsEditing(false);
    setNoteDetails(inputInitialState);
  };

  const submitNotebtnHandler = async (event) => {
    event.preventDefault();

    if (noteExists) {
      editNoteFn(
        {
          ...noteExists,
          title: noteDetails.title.trim(),
          content: noteDetails.content.trim(),
          bgcolor: noteDetails.bgcolor,
          priority: noteDetails.priority,
        },
        token,
        noteDispatch
      );
      closeNoteForm();
    } else if (archiveExists) {
      editArchiveNoteFn(
        {
          ...archiveExists,
          title: noteDetails.title.trim(),
          content: noteDetails.content.trim(),
          bgcolor: noteDetails.bgcolor,
          priority: noteDetails.priority,
        },
        token,
        noteDispatch
      );
      closeNoteForm();
    } else {
      if (noteDetails.title.trim() === "") {
        alert("title  should be added");
      } else {
        try {
          const response = await addNote(
            { ...noteDetails, createdDate: createdDate },
            token
          );
          if (response.status === 201) {
            noteDispatch({ type: "ADD_NOTE", payload: response.data.notes });
          } else {
            throw new Error();
          }
        } catch (error) {
          alert(error);
        }
        closeNoteForm();
      }
    }
    // closeNoteForm();
  };
  const priorityIconClickHandler = () => {
    setShowColorPallete(false);
    setShowPriority((prev) => !prev);
  };
  const colorPalleteIconClickHandler = () => {
    setShowColorPallete((prev) => !prev);
    setShowPriority(false);
  };

  return (
    <div className="form-open">
      <section
        className="note-form-container"
        style={{ backgroundColor: noteDetails.bgcolor }}
      >
        <MdCancel className="cancel-icon" onClick={closeNoteForm} />
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
              <MdColorLens
                className="icon"
                onClick={colorPalleteIconClickHandler}
              />
              <MdBarChart className="icon" onClick={priorityIconClickHandler} />
              <FaTags className="icon" />
            </div>

            <button
              className="btn btn-note"
              type="submit"
              onClick={submitNotebtnHandler}
            >
              {noteExists || archiveExists ? "Save" : "Add"}
            </button>
          </div>
        </form>
        {showColorPallete && (
          <ColorPallete setShowColorPallete={setShowColorPallete} />
        )}
        {showPriority && <Priority setShowPriority={setShowPriority} />}
      </section>
    </div>
  );
};

export { NoteForm };
