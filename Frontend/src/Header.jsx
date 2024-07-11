import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";
import tinderLogo from "./assets/pngwing.com.png";

function Header() {
  return (
    <div className="header">
      <IconButton className="header-icon">
        <PersonIcon fontSize="large" />
      </IconButton>
      <img src={tinderLogo} alt="" className="tinder_logo" />
      <IconButton className="header-icon">
        <ForumIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
