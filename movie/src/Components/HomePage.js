import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";

const movies = [
  {
    id: 1,
    title: "Kalki 2898 AD",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg", // Replace with actual movie poster URL
  },
  {
    id: 2,
    title: "Kill",
    poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kill-et00374797-1718179453.jpg",
  },
  // Add more movie objects here
];

const HomePage = () => {
    return (
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={1}>
          {movies.map((movie) => (
            <Grid item xs={6} sm={4} md={3} key={movie.id}>
              <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
                <Card sx={{ maxWidth: 200, margin: "auto", padding: "auto" }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={movie.poster}
                    alt={movie.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" sx={{ fontSize: "20px" }}>
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {movie.genre}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
export default HomePage;
