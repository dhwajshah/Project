import React from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const movies = [
  {
    id: 1,
    title: "Kalki 2898 AD",
    genre: "Action, Science fiction, Adventure, Thriller, Drama",
    cast: "Prabhas, Deepika Padukone, Kamal Hassan, Amitabh Bachchan",
    trailer: [
      "https://www.youtube.com/embed/kQDd1AhGIHk?si=sfI0pyPjt2I3IJ6E"
    ],
    description: "Kalki 2898 AD is a 2024 Indian science fiction film set in a dystopian future that follows a group of people on a mission to save the unborn child of lab subject SUM-80, also known as Sumathi (Deepika Padukone). The child, Kalki, is the tenth avatar of the Hindu god Vishnu, who is believed to come to Earth to protect the world from evil. The film stars Prabhas as bounty hunter Bhairava, who is tasked with capturing Sumathi along with his AI droid sidekick Bujji (Keerthy Suresh). Amitabh Bachchan plays Ashwatthama, a warrior who was cursed by Krishna to wander the Earth for eternity after trying to kill an unborn holy child. Ashwatthama must protect and rescue Sumathi at all costs. The film also stars SUM-80 (Deepika Padukone) and Bhairava (Prabhas).",
    downloadLink: "#", // Replace with actual download link
  },
  {
    id: 2,
    title: "Kill",
    genre: "Action, Thriller, Adventure, Drama, Crime Fiction",
    cast: "Lakshya , Raghav Juyal, Tanya Maniktala , Ashish Vidyarthi, Harsh Chaya, Abhishek Chauhan, Adrija Sinha.",
    trailer: [
      "https://www.youtube.com/embed/da7lKeeS67c?si=Ls89y9qxRKjtRoMJ"
    ],
    description: "Kill is a 2023 Indian action, crime, and drama film about an army commando who tries to stop an arranged marriage. The movie is about Amrit Rathod (Lakshya), an NSG commando, who learns that his girlfriend Tulika (Tanya Maniktala) is engaged against her will by her wealthy father (Harsh Chhaya). Amrit boards a train to New Delhi with his best friend and fellow soldier Viresh (Abhishek Chauhan) to stop the marriage. However, during the trip, a gang of knife-wielding bandits led by Fani (Raghav Juyal) terrorize the passengers, and Amrit and Viresh must fight them to save the others.",
    downloadLink: "#",
  },
  // Add more movie objects here
];

const MovieDetailPage = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom>
        {movie.title}
      </Typography>
      <Carousel>
        {movie.trailer.map((url, index) => (
          <div key={index}>
            <iframe
              width="100%"
              height="500px"
              src={url}
              title={`Trailer ${index + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Carousel>
      <Box mt={4}>
        <Typography variant="h5">Genre: {movie.genre}</Typography>
        <Typography variant="h5">Cast: {movie.cast}</Typography>
        <Typography variant="body1" paragraph>
          {movie.description}
        </Typography>
        <Button variant="contained" color="primary" href={movie.downloadLink}>
          Download Movie
        </Button>
      </Box>
    </div>
  );
};

export default MovieDetailPage;
