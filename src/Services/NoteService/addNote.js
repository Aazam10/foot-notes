import axios from "axios";

const addNote = (note, token) => {
  return axios.post(
    "/api/notes",
    { note },
    { headers: { authorization: token } }
  );
};

export { addNote };
