import { restoreFromTrash } from "../../Services";

const restoreFromTrashFn = async (id, token, note, noteDispatch) => {
  try {
    const response = await restoreFromTrash(id, token, note, noteDispatch);
    if (response.status === 200) {
      noteDispatch({ type: "RESTORE_FROM_TRASH", payload: response.data });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { restoreFromTrashFn };
