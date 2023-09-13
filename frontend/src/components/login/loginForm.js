import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "../../api";
import UserContext from "../../helpers/userContext";
import { TOKEN_STORAGE_ID } from "../signup/signupForm";

// login form for user
function LoginForm() {
  const { setCurrentUser } = useContext(UserContext);
  const history = useHistory();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  async function loginUser(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      localStorage.setItem(TOKEN_STORAGE_ID, token);

      return { success: true };
    } catch (error) {
      console.error("Login failed", error);
      return { success: false, error };
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    let res = await loginUser(loginData);
    if (res.success) {
      let user = await JoblyApi.getCurrentUser(loginData.username);
      setCurrentUser(user);
      history.push("/companies");
    } else {
      console.error("Invalid Username/Password");
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginData((inputData) => ({ ...inputData, [name]: value }));
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
