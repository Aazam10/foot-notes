import { restoreFromArchive } from "../../Services";

const restoreArchiveFn = async (id, token, note, noteDispatch) => {
  try {
    const response = await restoreFromArchive(id, token, note);
    if (response.status === 200) {
      noteDispatch({ type: "RESTORE_ARCHIVE", payload: response.data });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { restoreArchiveFn };
