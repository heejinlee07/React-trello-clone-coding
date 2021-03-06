import React, { useEffect } from "react";

function Login({ id, password, handleIdChange, handlePassChange, handleSubmit, onCreate }) {
  useEffect(() => {
    console.log("로그인 시도중");
    return () => {
      alert("로그인!");
    };
  }, []);
  return (
    <>
      <h1>로그인</h1>
      <form className="formStyle" onSubmit={handleSubmit}>
        <div>
          <h2>ID:</h2>
          <input value={id} placeholder="아이디" onChange={handleIdChange} className="inputStyle" />
        </div>
        <div>
          <h2>PASS:</h2>
          <input value={password} placeholder={"비밀번호"} className="inputStyle" onChange={handlePassChange} />
        </div>
        <br />
        <button onClick={onCreate}>로그인하기</button>
      </form>
    </>
  );
}

export default Login;
