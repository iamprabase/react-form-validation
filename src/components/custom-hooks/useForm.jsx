import { useState } from "react";

const emailRegex = RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

const formValid = (fields) => {
  let valid = true;
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    formErrors,
  } = fields;
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  )
    valid = false;
  alert("Please Fill out the fields.");

  return valid;
};

const useForm = () => {
  const [fields, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(fields)) {
      console.log("True");
    } else {
      console.log("Form Error Occured.");
    }
    console.log(e);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    fields[name] = value;

    switch (name) {
      case "email":
        fields.formErrors[name] = emailRegex.test(value)
          ? ""
          : "Please enter a valid e-mail address.";
        break;
      case "confirmPassword":
        fields.formErrors[name] =
          fields["password"] === value
            ? ""
            : "Please enter same password as above.";
        break;
      default:
        fields.formErrors[name] = value.length > 0 ? "" : "Field is Mandatory.";
        break;
    }
    setField({ ...fields, fields });
  };

  return {
    handleFieldChange,
    handleSubmit,
    fields,
  };
};

export default useForm;
