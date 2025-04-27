import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <Grid container className="user-detail-container">
      <Grid item xs={12} className="user-name">
        <Typography variant="h4">
          {user.first_name} {user.last_name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className="user-info">
        <Typography variant="body1" className="info-item">
          <strong>Location:</strong> {user.location}
        </Typography>
        <Typography variant="body1" className="info-item">
          <strong>Occupation:</strong> {user.occupation}
        </Typography>
        <Typography variant="body1" className="info-item">
          <strong>Description:</strong> {user.description}
        </Typography>
      </Grid>
      <Grid item xs={12} className="photos-link">
        <Typography variant="body1">
          <Link component={RouterLink} to={`/photos/${user._id}`} className="photos-link-text">
            View {`${user.first_name}'s`} photos
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UserDetail;