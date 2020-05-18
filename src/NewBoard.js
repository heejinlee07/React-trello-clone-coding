import React, { useState, useRef, useMemo } from "react";
import Board from "./Board";

function NewBoard() {
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

  function countBoard(boards) {
    console.log("보드 갯수를 세는 중");
    return boards.filter((board) => board.id).length;
  }

  const count = useMemo(() => countBoard(boards), [boards]);

  return (
    <>
      <div className="count">보드 갯수: {count}</div>
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
