import { editNote } from "../../Services";
const editNoteFn = async (note, token, noteDispatch) => {
  try {
    const response = await editNote(note, token);
    // console.log(response);
    if (response.status === 201) {
      noteDispatch({ type: "ADD_NOTE", payload: response.data.notes });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { editNoteFn };
