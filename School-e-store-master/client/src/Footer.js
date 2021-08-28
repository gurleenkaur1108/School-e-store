import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  GitHub,
  Twitter,
  Facebook,
  Google,
  Instagram,
} from "@material-ui/icons";
function Footer() {

  return (
    <div class="bg-dark text-center text-white" style={{ marginTop: "20px" }}>
      <div class=" p-4 pb-0">
        <section class="mb-4">
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Facebook fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Twitter fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <GitHub fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            {/* <Google fontSize="medium" /> */}
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Instagram fontSize="medium" />
          </a>
        </section>
        <div style={{ marginTop: "-10px", marginBottom: "9px" }}>
          <b>Contact us</b>:{" "}
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            SchooleStore@gmail.com{" "}
          </a>
        </div>
      </div>
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a class="text-white" href="index" style={{ textDecoration: "none" }}>
          {" "}
          School-e-Store
        </a>
      </div>
    </div>
  );
}

export default Footer;
