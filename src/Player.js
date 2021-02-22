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
        <Body spotify={spotify} />
      </div>
      {/* footer */}
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
