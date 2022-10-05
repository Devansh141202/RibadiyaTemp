import React, { Fragment, useRef, useState, useEffect } from "react";
import Link, { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../../actions/userAction";
import { useAlert } from "react-alert";

import "./SignUp.css";
import Loader from "../../layout/Loader/Loader";

const SignUp = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();

  const { error, loading } = useSelector((state) => state.user);

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  //   const [user, setUser] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   const { name, email, password, confirmPassword } = user;
  //   console.log(user.email);
  console.log(name, email, password, confirmPassword);

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    // myForm.set("avatar", avatar);
    dispatch(register(myForm));
    console.log("signUp submited!");
  };
  console.log(email);

//   const registerDataChange = (e) => {
//     if (e.target.name === "avatar") {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setAvatarPreview(reader.result);
//           setAvatar(reader.result);
//         }
//       };

//       reader.readAsDataURL(e.target.files[0]);
//     } else {
//       setUser({ ...user, [e.target.name]: e.target.value });
//     }
//   };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (password === confirmPassword) {
      //   history.push("/");
      console.log("success");
    }
  }, [dispatch, error, alert, history]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="win">
            <div className="form">
              <h2>SignUp</h2>
              <form className="signUpForm" onSubmit={registerSubmit}>
                <div className="signUpName">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="signUpEmail">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="signUpPassword">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="signUpPassword">
                  <input
                    type="password"
                    placeholder="Confirm-Password"
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Register"
                  className="signUpBtn"
                  disabled={loading ? true : false}
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SignUp;
