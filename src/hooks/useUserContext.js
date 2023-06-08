import { createContext, useContext, useState, useCallback } from 'react';

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = useCallback(
    (username, password) => {
      //
      if (isLoggedIn) {
        console.log('User alredy logged in');
      } else {
        if (username === 'Ukraine' && password === '123456') {
          setIsLoggedIn(true);
          setUsername(username);
        } else {
          console.log('Invalid username or password');
        }
      }
    },
    [isLoggedIn]
  );

  const logOut = useCallback(() => {
    setIsLoggedIn(false);
    setUsername(null);
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>{children}</UserContext.Provider>
  );
};
