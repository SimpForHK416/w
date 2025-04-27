import React from "react";
import { Divider, List, ListItem, ListItemText, Paper, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserList() {
  const users = models.userListModel();

  return (
    <Box className="user-list-container">
      <Paper className="user-list-paper" elevation={3}>
        <Typography className="user-list-title" variant="h5" gutterBottom>
          User List
        </Typography>

        <List component="nav" className="user-list">
          {users.map((user) => (
            <div key={user._id} className="user-list-item-wrapper">
              <ListItem 
                button 
                component={Link} 
                to={`/users/${user._id}`} 
                className="user-list-item"
              >
                <ListItemText
                  primary={`${user.first_name} ${user.last_name}`}
                  secondary={
                    <Typography className="user-description">
                      {user.description || 'No description available'}
                    </Typography>
                  }
                  secondaryTypographyProps={{ component: 'div' }}
                />
              </ListItem>
              <Divider className="user-list-divider" />
            </div>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default UserList;