import React from "react";
import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FlexIcon from "../images/flex-logo.png";

const logoOptions = {
  height: "40px",
  marginRight: "16px",
  backgroundColor: "#fff",
};

export default function Header() {
  /**
   * State management for window width and dynamic title shown
   */
  const [showText, setShowText] = useState(1);
  function handleShowText(windowWidth) {
    setShowText(windowWidth > 768);
  }
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      handleShowText(width);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={FlexIcon} alt="Flex logo" style={logoOptions} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {showText ? "Digital Catalog" : ""}
          </Typography>
          <Button variant="contained" color="warning">
            Upload
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
