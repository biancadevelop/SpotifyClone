import React from "react";
import "./Player.css";
import SideBar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* sidebar */}
        <SideBar />

        {/* body */}
        <Body />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Player;
