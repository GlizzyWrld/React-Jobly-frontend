import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "reactstrap";
import UserContext from '../../helpers/userContext';

//Navbar for the app. Shows a navigation bar for a user logged in and a user not logged in
function NavBar() {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const history = useHistory();

  function logout() {
    localStorage.removeItem("jobly-token-storage");
    setCurrentUser(null);
    history.push("/");
  }
  
  // Navbar for when the user is logged in
  function loggedIn() {
    return (
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav>
          <NavLink to="/companies" className={"nav-link-companies"}>Companies</NavLink>
          <NavLink to="/jobs" className={"nav-link-jobs"}>Jobs</NavLink>
          <NavLink to="/profile" className={"nav-link-profile"}>Profile</NavLink>
          <NavLink to="/" className={"nav-link-logout"} onClick={logout}>
            Logout {currentUser.first_name}
          </NavLink>
        </Nav>
      </Navbar>
    );
  }

  // Navbar for when the user is logged out
  function loggedOut() {
    return (
      <Navbar>
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav>
          <NavLink to="/login" className="nav-link-login">
            Login
          </NavLink>
          <NavLink to="/auth/signup" className="nav-link-signup">
            Signup
          </NavLink>
        </Nav>
      </Navbar>
    );
  }

  return <div>{currentUser ? loggedIn() : loggedOut()}</div>;
}

export default NavBar;
