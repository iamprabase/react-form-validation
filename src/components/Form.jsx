import React from "react";
import useForm from "./custom-hooks/useForm";

const Form = () => {
  const { handleFieldChange, handleSubmit, fields } = useForm();

  return (
    <div className="form-wrapper">
      <h1>Register Account</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="firstName">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            id="firstName"
            className={
              fields.formErrors.firstName.length > 0 ? "error" : "success"
            }
            onChange={handleFieldChange}
            value={fields.firstName}
            noValidate
          />
          {fields.formErrors.firstName.length > 0 && (
            <span className="errorMessage">{fields.formErrors.firstName}</span>
          )}
        </div>
        <div className="lastName">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            id="lastName"
            className={
              fields.formErrors.lastName.length > 0 ? "error" : "success"
            }
            onChange={handleFieldChange}
            noValidate
          />
          {fields.formErrors.lastName.length > 0 && (
            <span className="errorMessage">{fields.formErrors.lastName}</span>
          )}
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            id="email"
            className={fields.formErrors.email.length > 0 ? "error" : "success"}
            onChange={handleFieldChange}
            noValidate
          />
          {fields.formErrors.email.length > 0 && (
            <span className="errorMessage">{fields.formErrors.email}</span>
          )}
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            id="password"
            className={
              fields.formErrors.password.length > 0 ? "error" : "success"
            }
            onChange={handleFieldChange}
            noValidate
          />
          {fields.formErrors.password.length > 0 && (
            <span className="errorMessage">{fields.formErrors.password}</span>
          )}
        </div>
        <div className="confirmPassword">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Your Password"
            id="confirmPassword"
            className={
              fields.formErrors.confirmPassword.length > 0 ? "error" : "success"
            }
            onChange={handleFieldChange}
            noValidate
          />
          {fields.formErrors.confirmPassword.length > 0 && (
            <span className="errorMessage">
              {fields.formErrors.confirmPassword}
            </span>
          )}
        </div>
        <div className="createAccount">
          <button type="submit">Create Account</button>
          <small>Have an Account?</small>
        </div>
      </form>
    </div>
  );
};

export default Form;
