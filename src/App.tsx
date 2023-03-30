import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [errorMessage, setErrorMessage] =useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "password1"
    },
    {
      username: "user2",
      password: "password2"
    },
  ];

  const errors = {
    username: "invalid username",
    password: "invalid password"
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let { username, password } = document.forms[0];

    const userData = database.find((user) => user.username === username.value)

    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessage({ name: "password", message: errors.password });
    } else {
      setIsSubmitted(true);
    }
  } else {
    setErrorMessage({ name: "username", message: errors.username });
  }
};

  const renderErrorMessage =(name: any) => 
    name === errorMessage.name  && (
      <div className="error">{errorMessage.message}</div>
    );

      

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="username" required />
          {renderErrorMessage("username")}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" name="password" required />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  )
}

export default App;
