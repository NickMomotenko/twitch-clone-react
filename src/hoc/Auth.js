import React, { useState } from "react";

import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [data, setData] = useState({
    login: "test@mail.ru",
    password: 123,
  });

  const history = useHistory();

  const onChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const logIn = () => {
    setIsLoggedIn(true);

    history.push("/app");
  };

  const registration = () => {
    history.push("/registration");
  };

  return (
    <AuthContext.Provider
      value={{ data, isLoggedIn, setIsLoggedIn, onChange, logIn, registration }}
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
