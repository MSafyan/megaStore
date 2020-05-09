import React, { useState, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "" || email === "") {
      M.toast({ html: "Please enter fill all fields" });
    } else {
      console.log(firstName);
      //clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <Fragment>
      <div className="col s12 m8 l6">
        <div className="card teal lighten-5">
          <div className="card-content">
            <h4>Register Now</h4>
            <div className="row">
              <div className="input-field">
                <i className="material-icons prefix">person</i>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="firstName" className="active">
                  First Name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field">
                <i className="material-icons prefix">person</i>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="lastName" className="active">
                  Last Name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="lastName" className="active">
                  Email
                </label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <a
              href="#!"
              onClick={onSubmit}
              className="modal-close deep-purple darken-4 waves-effect waves-green btn-flat"
            >
              Enter
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
