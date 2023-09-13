import React from 'react'
import {Link} from 'react-router-dom'

// Shows the homepage with a login and signup button
function Homepage() {
  return (
    <div className='Homepage'>
      <h1>Jobly</h1>
      <h2>All the jobs in one, convenient place!</h2>
      <p>
        <button>
          <Link to="/login" className='btn-login-signup'>
          Login
          </Link>
        </button>
        <button>
          <Link to="/auth/signup" className='btn-login-signup'>
            Signup
          </Link>
        </button>
      </p>
    </div>
  )
}

export default Homepage