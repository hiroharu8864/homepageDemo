import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

type ListItem = {
  id: string;
  content: string;
};

export const SampleProgram: FC = memo(() => {
  const [input, setInput] = useState("");
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [filtering, setFiltering] = useState(0);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onClickRegister = () => {
    const item = { id: Math.random(), content: input };
    setListItems((prev) => [...prev, item]);
    setInput("");
  };

  const onChangeFiltering = (event: ChangeEvent<HTMLSelectElement>) => {
    const num = Number(event.target.value);
    setFiltering(num);
  };

  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <div>
        <p>Test Format Pages</p>
        <ul>
          {listItems
            .filter((item) => item.content.length > filtering)
            .map((item) => {
              return <li key={item.id}>{item.content}</li>;
            })}
          {listItems.filter((item) => item.content.length > filtering) <= 0 && (
            <h2>No Contents</h2>
          )}
        </ul>
        <input value={input} onChange={onChangeInput}></input>
        <br />
        <button onClick={onClickRegister}>REGIST</button>
        <br />
        <select onChange={onChangeFiltering}>
          <option value="0">all</option>
          <option value="3">over 3</option>
          <option value="6">over 6</option>
          <option value="9">over 9</option>
        </select>
        <br />
        <button onClick={onClickHome}>to Home</button>
      </div>
    </>
  );
});
