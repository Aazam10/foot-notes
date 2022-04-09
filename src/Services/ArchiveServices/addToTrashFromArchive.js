import axios from "axios";

const addToTrashFromArchive = (id, token, note) => {
  return axios.post(
    `/api/archives/trash/${id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { addToTrashFromArchive };
