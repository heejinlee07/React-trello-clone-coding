import React, { useState, useRef } from "react";
import "./App.css";

function Board() {
  const [inputs, setInputs] = useState({
    listName: "",
  });

  const { listName } = inputs;

  const [lists, setLists] = useState([]);

  const nextId = useRef(2);

  //oncREATE
  const onCreate = () => {
    const list = {
      id: nextId.current,
      listName,
    };
    setLists([...lists, list]);
    setInputs({ listName: "" });
    nextId.current += 1;
  };

  const onChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputs({ [name]: value });
  };

  const addList = (e) => {
    if (e.key === "Enter") onCreate();
  };
  return (
    <div>
      <div>
        {lists.map(({ listName }) => (
          <div key={listName}>{listName}</div>
        ))}
      </div>
      <input
        className="boardInput"
        type="text"
        name="listName"
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        onKeyPress={addList}
      ></input>
    </div>
  );
}

export default Board;
