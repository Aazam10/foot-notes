import "./Priority.css";
import { useNotes } from "../../context";

const Priority = ({ note, updateNoteHandler, setShowPriority }) => {
  const { isEditing, noteDetails, setNoteDetails } = useNotes();

  const setPriorityClickHandler = (priority) => {
    if (isEditing) {
      setNoteDetails({ ...noteDetails, priority: priority });
      setShowPriority(false);
    } else {
      updateNoteHandler({ ...note, priority: priority });
      setShowPriority(false);
    }
  };
  return (
    <div className="priority-container">
      <div className="radio">
        <label htmlFor="low">
          <input
            id="low"
            name="priority"
            type="radio"
            checked={
              note ? note.priority === "Low" : noteDetails.priority === "Low"
            }
            value="Low"
            onChange={() => setPriorityClickHandler("Low")}
          />
          Low
        </label>
      </div>
      <div className="radio">
        <label htmlFor="medium">
          <input
            id="medium"
            name="priority"
            type="radio"
            checked={
              note
                ? note.priority === "Medium"
                : noteDetails.priority === "Medium"
            }
            value="Medium"
            onChange={() => setPriorityClickHandler("Medium")}
          />
          Medium
        </label>
      </div>
      <div className="radio">
        <label htmlFor="high">
          <input
            id="high"
            name="radio"
            type="radio"
            checked={
              note ? note.priority === "High" : noteDetails.priority === "High"
            }
            value="High"
            onChange={() => setPriorityClickHandler("High")}
          />
          High
        </label>
      </div>
    </div>
  );
};

export { Priority };
