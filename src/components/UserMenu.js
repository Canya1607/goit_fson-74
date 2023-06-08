import { useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';

export const UserMenu = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, username, logIn, logOut } = useUserContext();

  const onLogIn = () => {
    if (name && password) {
      logIn(name, password);
    }
  };

  return (
    <div>
      {isLoggedIn && <p>{username}</p>}
      {isLoggedIn ? (
        <>
          <button style={{ fontSize: '24px' }} onClick={logOut}>
            LogOut
          </button>
          <button style={{ fontSize: '24px' }} onClick={onLogIn}>
            LogIn
          </button>
        </>
      ) : (
        <div>
          <input
            style={{ fontSize: '24px' }}
            placeholder='UserName'
            onChange={e => setName(e.target.value)}
          />
          <input
            style={{ fontSize: '24px' }}
            placeholder='Passsword'
            onChange={e => setPassword(e.target.value)}
          />
          <button style={{ fontSize: '24px' }} onClick={onLogIn}>
            LogIn
          </button>
        </div>
      )}
    </div>
  );
};
