import React, { useState } from "react";

import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [data, setData] = useState({
    login: {
      email: "test@mail.ru",
      password: 123,
    },
    registration: {
      name: "Test Name",
      email: "test@mail.ru",
      password: 123,
    },
  });

  const history = useHistory();

  const onChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const logIn = () => {
    setIsLoggedIn(true);

    setTimeout(() => history.push("/app"), 0);
  };

  const logOut = () => {
    setIsLoggedIn(false);

    setTimeout(() => history.push("/"), 0);
  };

  const registration = () => {
    history.push("/registration");
  };

  return (
    <AuthContext.Provider
      value={{
        data,
        isLoggedIn,
        setIsLoggedIn,
        onChange,
        logIn,
        logOut,
        registration,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </AuthContext.Consumer>
      );
    }
  };
};
