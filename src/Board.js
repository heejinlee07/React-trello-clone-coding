import React, { useState, useRef, useMemo } from "react";
import "./App.css";

function Board() {
  const [inputs, setInputs] = useState("");
  const [lists, setLists] = useState([]);

  const nextId = useRef(2);

  //oncREATE
  const onCreate = () => {
    const list = {
      id: nextId.current,
      inputs,
    };
    setLists([...lists, list]);
    setInputs("");
    nextId.current += 1;
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setInputs(e.target.value);
  };

  const addList = (e) => {
    if (e.key === "Enter") onCreate();
  };

  const countList = (lists) => {
    return lists.filter((list) => list.id).length;
  };

  const count = useMemo(() => countList(lists), [lists]);

  return (
    <div>
      <div>
        {lists.map(({ inputs }) => (
          <div key={inputs}>{inputs}</div>
        ))}
      </div>
      <input
        className="boardInput"
        type="text"
        value={inputs}
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        onKeyPress={addList}
      ></input>
      <div>할 일 갯수: {count}</div>
    </div>
  );
}

export default Board;
