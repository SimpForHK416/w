// TopBar.js
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Container, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();
  const [contextText, setContextText] = useState("Photo App");

  useEffect(() => {
    const updateContext = () => {
      const path = location.pathname;
      const userId = path.split("/")[2]; // Extract userId from the path

      if (path.includes("/photos/") && userId) {
        try {
          const user = models.userModel(userId);
          setContextText(`Photos of ${user.first_name} ${user.last_name}`);
        } catch (error) {
          setContextText("Photos");
        }
      } else if (path.includes("/users/") && userId) {
        try {
          const user = models.userModel(userId);
          setContextText(`${user.first_name} ${user.last_name}`);
        } catch (error) {
          setContextText("User Details");
        }
      } else if (path === "/users") {
        setContextText("User List");
      } else {
        setContextText("Photo App");
      }
    };

    updateContext();
  }, [location]);

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit" underline="none">
              Nhật Hưng
            </Link>
          </Typography>
          <Typography variant="h6" component="div">
            {contextText}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;
