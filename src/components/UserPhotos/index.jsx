import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia, Divider, Link } from "@mui/material";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  return (
    <div className="user-photos-container">
      <Typography variant="h5" gutterBottom className="photos-title">
        Photos of {models.userModel(userId).first_name}
      </Typography>
      <Grid container spacing={3} className="photos-grid">
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo._id} className="photo-item">
            <Card className="photo-card">
              <CardMedia
                component="img"
                className="photo-image"
                image={`/images/${photo.file_name}`}
                alt="User photo"
              />
              <CardContent className="photo-content">
                <Typography variant="body2" color="textSecondary" className="upload-date">
                  Uploaded on {new Date(photo.date_time).toLocaleString()}
                </Typography>
                {photo.comments && photo.comments.length > 0 && (
                  <div className="comments-section">
                    <Typography variant="subtitle1" className="comments-title">Comments:</Typography>
                    {photo.comments.map((comment) => (
                      <div key={comment._id} className="comment-item">
                        <Typography variant="body2" color="textSecondary" className="comment-date">
                          {new Date(comment.date_time).toLocaleString()}
                        </Typography>
                        <Typography variant="body1" className="comment-text">
                          <Link href={`/users/${comment.user._id}`} className="comment-user-link">
                            {comment.user.first_name} {comment.user.last_name}
                          </Link>
                          : {comment.comment}
                        </Typography>
                        <Divider className="comment-divider" />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UserPhotos;