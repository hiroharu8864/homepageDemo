import { useCallback, useState } from "react";
import axios from "axios";

import { Comment } from "../types/api/comment";

export const useAllComments = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<Array<Comment>>();

  const getComments = useCallback(() => {
    axios
      .get<Array<Comment>>("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments(res.data))
      .catch(() => {});
  }, []);

  return { getComments, loading, comments };
};
