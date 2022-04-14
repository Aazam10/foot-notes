import axios from "axios";
const editArchiveNote = (note, token) => {
  return axios.post(
    `/api/archives/${note._id}`,
    { note },
    { headers: { authorization: token } }
  );
};

export { editArchiveNote };
