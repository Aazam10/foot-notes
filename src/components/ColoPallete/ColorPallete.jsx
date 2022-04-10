import { useNotes } from "../../context";
import "./ColorPallete.css";
const ColorPallete = ({ note, updateNoteHandler, setShowColorPallete }) => {
  const { isEditing, noteDetails, setNoteDetails } = useNotes();
  console.log(isEditing);
  console.log(updateNoteHandler);
  //   console.log(note);
  const colors = [
    { id: 1, color: "green" },
    { id: 2, color: "blue" },
    { id: 3, color: "red" },
    { id: 4, color: "yellow" },
  ];
  console.log(setShowColorPallete);
  const colorButtonClickHandler = (color) => {
    if (isEditing) {
      setNoteDetails({ ...noteDetails, bgcolor: color });
    } else {
      updateNoteHandler({ ...note, bgcolor: color });
      setShowColorPallete(false);
    }
  };
  return (
    <div className="color-pallete">
      {colors.map((color) => {
        return (
          <button
            key={color._id}
            className="btn-color"
            style={{ backgroundColor: color.color }}
            onClick={() => colorButtonClickHandler(color.color)}
          ></button>
        );
      })}
    </div>
  );
};

export { ColorPallete };
