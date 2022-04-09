import { addToTrashFromArchive } from "../../Services";
const addToTrashFromArchiveFn = async (id, token, note, noteDispatch) => {
  try {
    const response = await addToTrashFromArchive(id, token, note);
    if (response.status === 200) {
      noteDispatch({ type: "DELETE_FROM_ARCHIVE", payload: response.data });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { addToTrashFromArchiveFn };
