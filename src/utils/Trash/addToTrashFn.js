import { addToTrash } from "../../Services";

const addToTrashFn = async (id, token, note, noteDispatch) => {
  // console.log(note);
  try {
    const response = await addToTrash(id, token, note);
    // console.log(response);
    if (response.status === 201) {
      noteDispatch({ type: "ADD_TO_TRASH", payload: response.data });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { addToTrashFn };
