import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "../../api";
import useLocalStorage from "../../helpers/useLocalStorage";
import UserContext from "../../helpers/userContext";

export const TOKEN_STORAGE_ID = "jobly-token-storage"

// Form to signup and go to the companies page
function SignupForm() {
  const [, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  const history = useHistory();
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const {setCurrentUser} = useContext(UserContext);

  async function signupUser(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return {success: true};
    } catch (error) {
      console.error("failure signing up", error);
      return {success: false, error};
    }
  }

  async function handleSubmit(evt) {
    console.log("Submitting form", signupData);
    evt.preventDefault();
    let res = await signupUser(signupData);
    if (res.success) {    
      setCurrentUser(signupData) 
      history.push("/companies");
    } 
   
  }

  // Updates form signupData
  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignupData((signupData) => ({ ...signupData, [name]: value }));
  }

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={signupData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            value={signupData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            value={signupData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={signupData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
