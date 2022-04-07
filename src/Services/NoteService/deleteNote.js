import axios from "axios";
const deleteNote = (id, token) => {
  return axios.delete(`/api/notes/${id}`, {
    headers: { authorization: token },
  });
};

export { deleteNote };
