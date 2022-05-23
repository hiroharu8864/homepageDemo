import { useEffect } from "react";
import { useAllComments } from "../../hooks/useAllComments";

/**
 * postId: number;
 * id: number;
 * name: string;
 * email: string;
 * body: string;
 * TODO: カード成形
 */
export const CompanyComment = () => {
  const { getComments, comments } = useAllComments();
  useEffect(() => getComments(), [getComments]);

  return (
    <>
      <div>
        <h1>一覧表示テスト</h1>
        {comments.map((comment) => (
          <p key={comment.id}>
            {comment.id}
            <br />
            {comment.name}
            <br />
            <br />
            {comment.body}
          </p>
        ))}
      </div>
    </>
  );
};
