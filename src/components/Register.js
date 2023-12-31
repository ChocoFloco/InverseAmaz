import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export const Register = () => {
  const { register, authErrorMessages } = useContext(AuthContext);

  const [displayName, setDisplayName] = useState(''); // input field value cannot be null
  const [email, setEmail] = useState(''); // input field value cannot be null
  const [eyecolor, setEyecolor] = useState(''); // input field value cannot be null
  const [password, setPassword] = useState(''); // input field value cannot be null

  const [registrationRunning, setRegistrationRunning] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleButtonClick = async () => {
    setRegistrationRunning(true);

    let theDisplayName = displayName;
    if (theDisplayName?.length <= 0) {
      theDisplayName = 'NO DISPLAY NAME PROVIDED 😟';
    }

    let success = await register(email, password, eyecolor, theDisplayName);
    setRegistrationRunning(false);
    if (!success) {
      setErrorMessage('Registration failed!');
    }
  };

  return (
    <div>
      <h2>Register New Account</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Display Name:</label>
            </td>
            <td>
              <input
                type='text'
                name='displayName'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Email:</label>
            </td>
            <td>
              <input
                type='text'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Age:</label>
            </td>
            <td>
              <input
                type='text'
                name='eyecolor'
                value={eyecolor}
                onChange={(e) => setEyecolor(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Password:</label>
            </td>
            <td>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            {!registrationRunning ? (
              <td colSpan={2} style={{ textAlign: 'center' }}>
                <button style={{ width: '75%' }} onClick={handleButtonClick}>
                  Create User
                </button>
                {errorMessage && (
                  <>
                    <br />
                    <h3 style={{ color: 'red' }}>{errorMessage}</h3>
                    {authErrorMessages?.map((errorLine, idx) => (
                      <h4 key={`errmsg-${idx}`} style={{ color: 'red' }}>
                        {errorLine}
                      </h4>
                    ))}
                  </>
                )}
              </td>
            ) : (
              <td>
                <h6 style={{ color: 'green' }}>
                  <em>registering...</em>
                </h6>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
