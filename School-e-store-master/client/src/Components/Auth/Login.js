import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import LockIcon from "@material-ui/icons/Lock";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Input from "./Input";
import * as customStyles from "./styles.js";
import Footer from "../../Footer";
function Login() {
  
  const intialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [isSignup, setSignUp] = useState(false);
  const [form, setForm] = useState(intialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      let response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      response = await response.json();
      console.log(response);
    } else {
      let response = await fetch("http://localhost:4000/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      response = await response.json();
      localStorage.setItem("access-token", response.accessToken);
    };
  };
  
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function switchMode() {
    setForm(intialState);
    setSignUp(!isSignup);
    setShowPassword(false);
  }
  return (
    <div class="row no-gutters">
      <div class="col-lg-7 col-sm-12 col-md-6 col-xs-12 bg-dark p-0">
        <div
          style={{
            fontFamily: "sans-serif",
            color: "white",
            textAlign: "center",
            marginTop: "40px",
            marginBottom: "35px",
            fontSize: "70px",
          }}
        >
          School-e-Store
        </div>
        <div
          style={
            isSignup === true
              ? { margin: "auto", textAlign: "center", marginTop: "70px" }
              : { margin: "auto", textAlign: "center" }
          }
        >
          <Carousel
            controls="false"
            nextLabel=""
            indicators="true"
            prevLabel=""
            style={{...customStyles.testing, ...customStyles.imageApply}}
          >
            <Carousel.Item>
              <img
                className="d-block"
                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="First slide"
                class="m-auto"
                style={customStyles.imageApply}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                alt="Second slide"
                style={customStyles.imageApply}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                alt="Third slide"
                style={customStyles.imageApply}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div
        class="col-lg-5 col-sm-12 col-md-6 col-xs-12 p-0"
        style={
          isSignup === true ? customStyles.signupComp : customStyles.signinComp
        }
      >
        <LockIcon fontSize="large" />
        <div
          style={{ marginTop: "5px", marginBottom: "20px", fontSize: "35px" }}
        >
          {isSignup === false ? <div>Sign in</div> : <div>Sign Up</div>}
        </div>
        <form onSubmit={handleSubmit}>
          <div
            class="container"
            style={{ textAlign: "center", paddingLeft: "55px" }}
          >
            <CSSTransition
              in={isSignup}
              timeout={1000}
              classNames="alert"
              unmountOnExit
              onEnter={() => setSignUp(true)}
              onExit={() => setSignUp(false)}
            >
              <div>
                {isSignup === true && (
                  <div>
                    <Grid style={{ display: "flex" }} sm={11}>
                      <Input
                        name="firstName"
                        label="First Name"
                        handleChange={handleChange}
                        autoFocus
                        half
                        custom={true}
                      />
                      <Input
                        name="lastName"
                        label="Last Name"
                        handleChange={handleChange}
                        half
                      />
                    </Grid>
                    <Input
                      name="email"
                      label="Email Address"
                      handleChange={handleChange}
                    />
                    <Input
                      name="password"
                      label="Password"
                      handleChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      handleShowPassword={handleShowPassword}
                    />
                    <Input
                      name="confirmPassword"
                      label="Confirm Password"
                      handleChange={handleChange}
                      type="password"
                    />
                  </div>
                )}
              </div>
            </CSSTransition>
            <CSSTransition
              in={!isSignup}
              timeout={300}
              classNames="alert"
              unmountOnExit
              onEnter={() => setSignUp(false)}
              onExit={() => setSignUp(true)}
            >
              <div>
                {isSignup === false && (
                  <div>
                    <Input
                      name="email"
                      label="Email Address"
                      autoFocus
                      handleChange={handleChange}
                    />
                    <Input
                      name="password"
                      label="Password"
                      handleChange={handleChange}
                      type={showPassword ? "text" : "password"}
                      handleShowPassword={handleShowPassword}
                    />
                  </div>
                )}
              </div>
            </CSSTransition>
          </div>
          <Button
            className="bg-dark"
            type="submit"
            variant="contained"
            style={{ marginTop: "20px", color: "white" }}
            size="large"
          >
            <div style={{ fontSize: "20px" }}>
              {isSignup === false ? <div>Sign in</div> : <div>Sign Up</div>}
            </div>
          </Button>
        </form>

        <div style={{ paddingTop: "20px", textAlign: "right" }}>
          <Button
            size="small"
            onClick={switchMode}
            style={{ color: "#343a40" }}
          >
            <strong>
              {isSignup === false ? (
                <div>Don't have an account? Sign Up</div>
              ) : (
                <div>Have an account? Sign in</div>
              )}
            </strong>
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Login;
