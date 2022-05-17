import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">トップページ</SLink>
      <SLink to="/company">会社概要</SLink>
      <SLink to="/about">About</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #b0e0e6;
  color: #fff;
  text-align: center;
  padding: 5px 0;
`;

/** 既存コンポーネント拡張 */
const SLink = styled(Link)`
  margin: 0 4px;
`;
