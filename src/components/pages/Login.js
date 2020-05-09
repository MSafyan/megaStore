import React, { useState, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (email === "" || password === "") {
      M.toast({ html: "Please enter fill all fields" });
    } else {
      console.log(email);
      //clear fields
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Fragment>
      <div className="col s12 m8 l6">
        <div className="card teal lighten-5">
          <div className="card-content">
            <h4>Login Now</h4>
            <div className="row">
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="active">
                  Email
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field">
                <i className="material-icons prefix">lock</i>
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password" className="active">
                  Password
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

export default Login;
