import styled from "styled-components";

export const NewsCard = (props) => {
  const { news } = props;

  return (
    <SDiv>
      <img height={200} width={200} src={news.image} alt={news.title} />
      <dl>
        <dt>{news.title}</dt>
        <dd>{news.contents}</dd>
      </dl>
    </SDiv>
  );
};

const SDiv = styled.div`
  background-color: #e4f9f5;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  img {
    border-radius: 50%;
  }
  dl {
    margin-bottom: 0px;
    dt {
      float: left;
      font-weight: bold;
      margin: 0;
      color: #40514e;
    }
    dd {
      padding-left: 32px;
      padding-bottom: 4px;
      /* 折り返して表示 */
      overflow-wrap: break-word;
    }
  }
`;
