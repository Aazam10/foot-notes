import axios from "axios";

const addToTrash = (id, token, note) => {
  return axios.post(
    `/api/notes/trash/${id}`,
    { note },
    {
      headers: { authorization: token },
    }
  );
};

export { addToTrash };
