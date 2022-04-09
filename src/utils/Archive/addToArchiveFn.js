import { addToArchive } from "../../Services";

const addToArchiveFn = async (id, token, note, noteDispatch) => {
  try {
    const response = await addToArchive(id, token, note);
    if (response.status === 201) {
      noteDispatch({ type: "ADD_TO_ARCHIVE", payload: response.data });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { addToArchiveFn };
