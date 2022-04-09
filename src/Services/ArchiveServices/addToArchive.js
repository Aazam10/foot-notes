import axios from "axios";
const addToArchive = (id, token, note) => {
  return axios.post(
    `/api/notes/archives/${id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { addToArchive };
