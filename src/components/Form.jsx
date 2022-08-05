import React, { useState } from "react";

const Form = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    birthday: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    c_password: "",
    profession:""
  };
  const [userData, setUserData] = useState(initialState);
  
  const handleChange = (e) => {
    console.log("name --> value", e.target.name, e.target.value);
    setUserData({
        ...userData,
        [e.target.name]: e.target.value
    })
  };
  const handleSubmit = (e) => {
    const 
  };
  const {  first_name,
  last_name,
  birthday,
  gender,
  email,
  phone,
  password,
  c_password,profession} = userData;
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
                    />
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
                        type="text"
                        name="birthday"
                        onChange={handleChange}
                        value={birthday}
                      />
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
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Password</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="password"
                      onChange={handleChange}
                      value={password}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Confirm Password</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="c_password"
                      onChange={handleChange}
                      value={c_password}
                    />
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label className="label">Select Profession</label>
                <div className="rs-select2 ">
                  <select name="profession" value={profession}  onChange={handleChange}>
                    <option value="" disabled selected>
                      Choose option
                    </option>
                    <option value="web developer">Web developer</option>
                    <option value="software developer">
                      Software developer
                    </option>
                    <option value="ui designer">UI designer</option>
                  </select>
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
