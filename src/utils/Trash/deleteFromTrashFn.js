import { deleteNote } from "../../Services";

const deleteFromTrashFn = async (id, token, noteDispatch) => {
  try {
    const response = await deleteNote(id, token);
    if (response.status === 200) {
      noteDispatch({ type: "PERMANENT_DELETE", payload: response.data.trash });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { deleteFromTrashFn };
