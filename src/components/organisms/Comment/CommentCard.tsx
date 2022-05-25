import styled from "styled-components";

export const CommentCard = () => {
  const SDiv = styled.div`
    background-color: #e4f9f5;
    box-shadow: #ddd 0px 0px 4px 2px;
    border-radius: 8px;
    padding: 1px;
    img {
      border-radius: 50%;
    }
    dl {
      margin-bottom: 0px;
      dt {
        text-align: left;
        padding-left: 10px;
        font-weight: bold;
        margin: 0;
        color: #40514e;
      }
      dd {
        padding-left: 10px;
        margin: 0;
        padding-bottom: 4px;
        /* 折り返して表示 */
        overflow-wrap: break-word;
      }
    }
  `;

  return (
    <SDiv>
      <dl>
        <dt>TESTaaaaa</dt>
        <dd>TEST</dd>
      </dl>
    </SDiv>
  );
};
