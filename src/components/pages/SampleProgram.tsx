import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const SampleProgram: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <div>
        <p>Test Format Pages</p>
        <button onClick={onClickHome}>to Home</button>
      </div>
    </>
  );
});
