import { Link, Outlet } from "react-router-dom";

export const Company = () => {
  return (
    <>
      <div>
        <h1>会社概要</h1>
        <Link to="location">会社所在地</Link>
        <br />
        <Link to="recruit">採用情報</Link>
      </div>
      <Outlet />
    </>
  );
};
