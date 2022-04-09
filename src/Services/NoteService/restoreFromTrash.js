import axios from "axios";

const restoreFromTrash = (id, token, note) => {
  return axios.post(
    `/api/trash/restore/${id}`,
    { note },
    {
      headers: { authorization: token },
    }
  );
};

export { restoreFromTrash };
