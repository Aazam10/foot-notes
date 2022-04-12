import { editArchiveNote } from "../../Services";

const editArchiveNoteFn = async (note, token, noteDispatch) => {
  // console.log(note);
  try {
    const response = await editArchiveNote(note, token);
    // console.log(response);
    if (response.status === 201) {
      noteDispatch({ type: "UPDATE_ARCHIVE", payload: response.data.archives });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { editArchiveNoteFn };
