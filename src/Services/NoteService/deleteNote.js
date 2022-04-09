import axios from "axios";
const deleteNote = (id, token) => {
  return axios.delete(`/api/trash/delete/${id}`, {
    headers: { authorization: token },
  });
};

export { deleteNote };
