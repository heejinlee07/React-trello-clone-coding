import React, { useState, useRef } from "react";
import Login from "./Login";
import NewBoard from "./NewBoard";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const [isLoggedIn, setLoggedIn] = useState(false);

  const onCreate = () => {
    const newUser = {
      id: "hello",
      password: "bye",
    };
    console.log(user);
    if (user.id === newUser.id && user.password === newUser.password) {
      console.log("gg");
      setLoggedIn(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도");
  };
  const handleIdChange = (e) => {
    setUser({
      id: e.target.value,
      password: user.password,
    });
    console.log("사용자 아이디 입력중", "id: " + e.target.value);
  };
  const handlePassChange = (e) => {
    setUser({
      id: user.id,
      password: e.target.value,
    });
    console.log("사용자 비밀번호 입력중", "pw: " + e.target.value);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="wrap">
      <div>
        {isLoggedIn ? (
          <>
            <header className="headerStyle">
              <button className="logoutBtn" onClick={logout} key={user.id}>
                {user.id} 로그아웃
              </button>
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
