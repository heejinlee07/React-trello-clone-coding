import React, { useState, useRef } from "react";
import Board from "./Board";

function NewBoard() {
  //엔터치면 들어갈 리스트.

  //input창에 대한 usestate
  const [newBoardName, setNewBoardName] = useState("");

  const [boards, setBoards] = useState([]);

  const nextId = useRef(2);
  //추가되는 함수 onCreate
  const onCreate = () => {
    console.log(newBoardName);
    const board = {
      id: nextId.current,
      newBoardName,
    };
    setBoards([...boards, board]);
    setNewBoardName("");
    nextId.current += 1;
  };

  //input창 변화 onChange
  const onChange = (e) => {
    console.log(e.target.value);
    setNewBoardName(e.target.value);
  };

  const addBoard = (e) => {
    if (e.key === "Enter") onCreate();
  };
  // 지우기 누르면 삭제onRemove
  const onRemove = (id) => {
    console.log(id);
    setBoards(boards.filter((board) => board.id !== id));
  };

  return (
    <>
      <div className="addTitle">
        <h3>New Board</h3>
        <input
          className="titleInput"
          value={newBoardName}
          type="text"
          placeholder="보드 제목을 입력하세요"
          onChange={onChange}
          onKeyPress={addBoard}
        ></input>
      </div>
      <div className="boardList">
        {boards.map(({ newBoardName, id }) => {
          console.log(newBoardName);
          return (
            <div className="newBoard" key={newBoardName}>
              <div className="boardHeader">
                <div>{newBoardName}</div>
                <button className="deleteBtn" onClick={() => onRemove(id)}>
                  X
                </button>
              </div>
              <Board />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NewBoard;
