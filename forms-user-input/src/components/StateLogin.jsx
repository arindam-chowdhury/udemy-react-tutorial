import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: ""
  });

  const emailIsInvalid = !enteredValues.email.includes('@');

  function handleFormSubmit(event) {
    event.preventDefault();

    console.table(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevEnteredValues) => ({
      ...prevEnteredValues,
      [identifier]: value
    }))
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={enteredValues.email} onChange={(event) => handleInputChange('email', event.target.value)} />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={enteredValues.password} onChange={(event) => handleInputChange('password', event.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
