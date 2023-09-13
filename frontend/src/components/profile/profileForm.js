import React, {useState, useContext} from 'react';
import UserContext from "../../helpers/userContext";
import JoblyApi from "../../api";

// Form to update the current user profile
function ProfileForm() {
  const {currentUser, setCurrentUser} = useContext(UserContext);

  const [profileData, setProfileData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email
  })

  function handleChange(evt) {
    const {name, value} = evt.target;
    setProfileData(data => ({
      ...data,
      [name]: value
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let updatedUser = await JoblyApi.saveProfile(currentUser.username, {
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        email: profileData.email
      });

      console.log("Updated User from API:", updatedUser)

      setCurrentUser(oldUser => ({
        ...oldUser,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email
      }));
    } catch (error) {
      console.error("Error updating profile", error)
    }
  }


  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username</label>
          <input
            type="text"
            name='username'
            value={currentUser.username}
            readOnly={true}
          />
        </div>
        <div className='form-group'>
          <label>First Name</label>
          <input
            type="text"
            name='firstName'
            value={profileData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input
            type="text"
            name='lastName'
            value={profileData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            type="email"
            name='email'
            value={profileData.email}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default ProfileForm