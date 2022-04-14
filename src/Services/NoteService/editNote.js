import axios from "axios";

const editNote = (note, token) => {
  return axios.post(
    `/api/notes/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { editNote };
