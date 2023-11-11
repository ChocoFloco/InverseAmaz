import React, { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';
import { Login } from './Login';



const styleBottomCenter = {
  position: 'absolute',
  bottom: '10px',
  width: '90%',
  textAlign: 'center',
  color: 'black'
};

export const RestOfTheApp = () => {
  const { profile, logout } = useContext(AuthContext);

  if (!profile) {
    return <Login />;
  } else {
    return (
      <div>
        <h1>Hello, {profile.displayName}</h1>
        <h2>Is you Eye Color: {profile.eyecolor}</h2>
        <button onClick={logout}>Logout</button>        
        <br>
        </br>
        
        <br>
        </br>
<a href="edit">Edit Profile</a>
        <div style={styleBottomCenter}>your email: {profile.email}</div>
      </div>
    );
  }
};
