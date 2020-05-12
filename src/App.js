import React, { useState, useRef } from "react";
import Login from "./Login";
import NewBoard from "./NewBoard";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    id: "hello",
    password: "bye",
  });

  const [isLoggedIn, setLoggedIn] = useState(false);

  const nextId = useRef(2);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      password,
    };
    setLoggedIn(true);
  };
  const { id, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도");
  };
  const handleIdChange = (e) => {
    console.log("사용자 아이디 입력중");
    const { value, name } = e.target;
    console.log(value, name);
  };
  const handlePassChange = (e) => {
    console.log("사용자 비밀번호 입력중");
    const { value, name } = e.target;
    console.log(value, name);
  };

  return (
    <div className="wrap">
      <div>
        {isLoggedIn ? (
          <>
            <header className="headerStyle">
              <span>{id} 로그아웃</span>
            </header>
            <NewBoard />
          </>
        ) : (
          <div>
            <header className="headerStyle">로그인 요망</header>
            <Login
              id={id}
              password={password}
              handleIdChange={handleIdChange}
              handlePassChange={handlePassChange}
              onCreate={onCreate}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
