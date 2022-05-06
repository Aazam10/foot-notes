import { useNotes } from "../../context";
import "./ColorPallete.css";
const ColorPallete = ({ note, updateNoteHandler, setShowColorPallete }) => {
  const { isEditing, noteDetails, setNoteDetails } = useNotes();
  const colors = [
    { id: 1, color: "#fcecc9" },
    { id: 2, color: "#becee4" },
    { id: 3, color: "#72ddf7" },
    { id: 4, color: "#dfb8ff" },
  ];
  // console.log(setShowColorPallete);
  const colorButtonClickHandler = (color) => {
    if (isEditing) {
      setNoteDetails({ ...noteDetails, bgcolor: color });
      setShowColorPallete(false);
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
