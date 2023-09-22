import { useState } from "react";
import "./FormValidator.css";

const FormValidator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const errors = [];
    if (!email || !password || !confirmPassword)
      errors.push("All fields must be filled in");

    if ([...email].filter((i) => i === "@").length !== 1)
      errors.push("An email must have exactly one @ sign");

    if (password.trim().length < 8)
      errors.push("Passwords must be 8 characters or longer");

    if (password !== confirmPassword) errors.push("Passwords must match");

    setMessage(errors.length ? errors.join(", ") : "User Created!");
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <h2>Sign Up!</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={passwordChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          id="confirm_password"
          value={confirmPassword}
          onChange={confirmPasswordChangeHandler}
        />
      </div>
      {message}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidator;
