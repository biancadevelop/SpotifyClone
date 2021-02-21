import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      {/* spotify logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotifyLogo"
      />

      {/* login with spotify button */}
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login;
