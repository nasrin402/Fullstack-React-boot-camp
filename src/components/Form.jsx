import React, { useState, useRef } from "react";
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/ionicons/eye";
import { eyeDisabled } from "react-icons-kit/ionicons/eyeDisabled";
const Form = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    birthday: "",
    gender: "male",
    email: "",
    phone: "",
    password: "",
    c_password: "",
    profession: "",
  };
  const [userData, setUserData] = useState(initialState);
  const [error, setError] = useState(null);
  const nameRef = useRef(null);
  const [type, setType] = useState("password");
  const [iconType, setIconType] = useState(eyeDisabled);
  const [type2, setType2] = useState("password");
  const [iconType2, setIconType2] = useState(eyeDisabled);

  const handleShow = () => {
    if (type === "password") {
      setType("text");
      setIconType(eye);
    } else {
      setType("password");
      setIconType(eyeDisabled);
    }
  };
  const handleShow2 = () => {
    if (type2 === "password") {
      setType2("text");
      setIconType2(eye);
    } else {
      setType2("password");
      setIconType2(eyeDisabled);
    }
  };
  const handleChange = (e) => {
    // console.log("name --> value", e.target.name, e.target.value);
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Name reference--->", nameRef.current.value)
    nameRef.current.focus();
    const {
      first_name,
      last_name,
      birthday,
      email,
      phone,
      password,
      c_password,
      profession,
    } = userData;

    let isError = false;
    const initialError = {
      first_name: "",
      last_name: "",
      birthday: "",
      email: "",
      phone: "",
      password: "",
      c_password: "",
      profession: "",
    };

    if (first_name === "") {
      initialError.first_name = "First name must be required";
      isError = true;
    }
    if (last_name === "") {
      initialError.last_name = "Last name must be required";
      isError = true;
    }
    if (birthday === "") {
      initialError.birthday = "Date must be selected";
      isError = true;
    }
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "" || !validEmail.test(email)) {
      initialError.email = "Email must be required and valid";
      isError = true;
    }
    const validPhn = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    if (phone === "" || !validPhn.test(phone)) {
      initialError.phone = "Phone number must be valid";
      isError = true;
    }
    const strongPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (password === "" || !strongPass.test(password)) {
      initialError.password =
        "Password  must be 8 characters or longer,at least 1 lowercase, 1 Uppercase, 1 numeric number, without $,^,*";
      isError = true;
    }
    if (c_password === "" || c_password !== password) {
      initialError.c_password = "Must be same with the password";
      isError = true;
    }
    if (profession === "") {
      initialError.profession = "Must be selected";
      isError = true;
    }
    setError(initialError);
    if (isError) return;

    alert("your form is submitted.");
    setUserData(initialState);
  };

  const {
    first_name,
    last_name,
    birthday,
    gender,
    email,
    phone,
    password,
    c_password,
    profession,
  } = userData;

  return (
    <div
      className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins"
      style={{ width: "100vw" }}
    >
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Registration Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">first name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="first_name"
                      onChange={handleChange}
                      value={first_name}
                      ref={nameRef}
                    />
                    <p style={{ color: "red" }}>{error && error.first_name}</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">last name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="last_name"
                      onChange={handleChange}
                      value={last_name}
                    />
                    <p style={{ color: "red" }}>{error && error.last_name}</p>
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Birthday</label>
                    <div className="input-group-icon">
                      <input
                        className="input--style-4 "
                        type="date"
                        name="birthday"
                        onChange={handleChange}
                        value={birthday}
                      />
                      <p style={{ color: "red" }}>{error && error.birthday}</p>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Gender</label>
                    <div className="p-t-10">
                      <label className="radio-container m-r-45">
                        Male
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          onChange={handleChange}
                          checked
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="radio-container">
                        Female
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Email</label>
                    <input
                      className="input--style-4"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={email}
                    />
                    <p style={{ color: "red" }}>{error && error.email}</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Phone Number</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      value={phone}
                    />
                    <p style={{ color: "red" }}>{error && error.phone}</p>
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group showPass">
                    <label className="label">Password</label>
                    <div class="input-group-icon">
                      <input
                        className="input--style-4"
                        type={type}
                        name="password"
                        onChange={handleChange}
                        value={password}
                      />
                      <span className="input-icon" style={{ color: "grey" }}>
                        <Icon icon={iconType} size={24} onClick={handleShow} />{" "}
                      </span>
                    </div>

                    <p style={{ color: "red" }}>{error && error.password}</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Confirm Password</label>
                    <div class="input-group-icon">
                      <input
                        className="input--style-4"
                        type={type2}
                        name="c_password"
                        onChange={handleChange}
                        value={c_password}
                      />
                      <span className="input-icon" style={{ color: "grey" }}>
                        <Icon icon={iconType2} size={24} onClick={handleShow2} />{" "}
                      </span>
                    </div>
                    <p style={{ color: "red" }}>{error && error.c_password}</p>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label className="label">Select Profession</label>
                <div className="rs-select2 ">
                  <select
                    name="profession"
                    value={profession}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Choose option
                    </option>
                    <option value="web developer">Web developer</option>
                    <option value="software developer">
                      Software developer
                    </option>
                    <option value="ui designer">UI designer</option>
                  </select>
                  <p style={{ color: "red" }}>{error && error.profession}</p>
                </div>
              </div>

              <div className="p-t-15">
                <button className="btn btn--radius-2 btn--blue" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
