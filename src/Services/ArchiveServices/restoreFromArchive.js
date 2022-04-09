import axios from "axios";
const restoreFromArchive = (id, token, note) => {
  return axios.post(
    `/api/archives/restore/${id}`,
    { note },
    {
      headers: { authorization: token },
    }
  );
};

export { restoreFromArchive };
