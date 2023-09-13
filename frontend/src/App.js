import {ThemeWrapper} from './components';
import React, {useState, useEffect} from 'react';
import Router from './router';
import UserContext from "./helpers/userContext";
import JoblyApi from './api';



export const TOKEN_STORAGE_ID = "user-token"


function App() {

  const [currentUser, setCurrentUser] = useState(null);
  
  const token = localStorage.getItem(TOKEN_STORAGE_ID);

  console.log("Current User: ", currentUser);
  
  useEffect(function loadUserInfo() {
    async function getCurUsr() {
      if (token) {
        try {
          let {username} = 
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (error) {
          console.error("Error Loading user info", error);
          setCurrentUser(null);
        }
      }
    }
    getCurUsr();
  },[token]);



  return (
    
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <ThemeWrapper>
      <Router/>
      </ThemeWrapper>
      </UserContext.Provider>
      
    </div>
    
  );
}

export default App;
