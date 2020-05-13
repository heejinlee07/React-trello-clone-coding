import React, { useState, useRef } from "react";
import Login from "./Login";
import NewBoard from "./NewBoard";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const { id, password } = user;

  const [isLoggedIn, setLoggedIn] = useState(false);

  const nextId = useRef(2);

  const onCreate = () => {
    const newUser = {
      id: nextId.current,
      password,
    };
    setLoggedIn(true);
    setUser([...user, newUser]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도");
  };
  const handleIdChange = (e) => {
    setUser(e.target.value);
    console.log("사용자 아이디 입력중", "id: " + e.target.value);
  };
  const handlePassChange = (e) => {
    setUser(e.target.value);
    console.log("사용자 비밀번호 입력중", "pw: " + e.target.value);
  };

  return (
    <div className="wrap">
      <div>
        {isLoggedIn ? (
          <>
            <header className="headerStyle">
              <div key={id}>{id} 로그아웃</div>
            </header>
            <NewBoard />
          </>
        ) : (
          <div>
            <header className="headerStyle">로그인 요망</header>
            <Login
              value={user}
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
