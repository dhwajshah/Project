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
    downloadLink: "https://drive.google.com/file/d/10mUdlhW80JTpgNrapQH54Ko0pApWzRgL/view?usp=sharing", // Replace with actual download link
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
    downloadLink: "https://drive.google.com/file/d/1wwuOuJxVGT0X69H1tJn47MvOSCTBvWR_/view?usp=sharing",
  },
  {
    id: 3,
    title: "Stree 2",
    genre: "Comedy, Horror",
    cast: "Shradhha Kapoor, Rajkumar Rao, Pankaj Tripathi, Tamannah Bhatia.",
    trailer: [
      "https://www.youtube.com/embed/KVnheXywIbY?si=N4uGX_6v0qKiR7LE"
    ],
    description: "Stree 2: Sarkate Ka Aatank (transl. Woman 2: Terror of the Headless) is a 2024 Indian Hindi-language comedy horror film directed by Amar Kaushik, written by Niren Bhatt, and produced jointly by Maddock Films and Jio Studios. It is the fifth installment in the Maddock Supernatural Universe and serves as the sequel to Stree (2018). The film stars Shraddha Kapoor, Rajkummar Rao, Pankaj Tripathi, Abhishek Banerjee and Aparshakti Khurana.[7] The narrative follows a group of friends who must defeat a malevolent entity abducting the women of Chanderi Kaushik first expressed interest in developing a sequel to Stree in October 2018. By February 2022, Rao confirmed that the project was in development; however, original writers and producers Raj & DK were no longer involved, having parted ways with producer Dinesh Vijan over disputes regarding the rights to the franchise. As a result, Bhatt took over as the writer. The sequel was officially announced by Vijan and Jyoti Deshpande in April 2023. Principal photography began in July of the same year, primarily taking place in Chanderi and Bihar, and concluded by mid-2024. Sachin–Jigar returned to compose the soundtrack, with Justin Varghese composing the background score. Cinematography was conducted by Jishnu Bhattacharjee, and the editing was handled by Hemanti Sarkar.",
    downloadLink: "https://drive.google.com/file/d/1uU2unb8F_60QQfkhYytgVT1YWx_6LONE/view?usp=drive_link", 
  },
  {
    id: 4,
    title: "Fakt Purush Mate  ",
    genre: "Comedy, Drama, Fantasy",
    cast: "Yash Soni, Mitra Gadhvi, Esha Kansara, Darshan Jariwala, Amitabh Bachchan",
    trailer: [
      "https://www.youtube.com/embed/RTl6d5QMy7s?si=3QhGPBlAOvcNwqYr"
    ],
    description: "The film is about a patriarch named Purshottam who returns from the afterlife to stop his grandson's marriage to his childhood sweetheart. Purshottam uses magic to create a comedic clash between his outdated principles and his grandson's modern values. ",
    downloadLink: "#",
  },
  {
    id: 5,
    title: "Khel Khel Mein  ",
    genre: "Comedy, Drama",
    cast: "Akshay Kumar, Vaani Kapoor, Ammy Virk, Taapsee Pannu, Aditya Seal, Pragya Jaiswal ",
    trailer: [
      "https://www.youtube.com/embed/RKZJtoFoaQg?si=WQ0cSTsD5t_FeSNv"
    ],
    description: "The film is about a patriarch named Purshottam who returns from the afterlife to stop his grandson's marriage to his childhood sweetheart. Purshottam uses magic to create a comedic clash between his outdated principles and his grandson's modern values. ",
    downloadLink: "https://drive.google.com/file/d/1ZRedQQ0FFKDPAuejC-XE5dGYWzAehXhq/view?usp=sharing",
  },
  {
    id: 6,
    title: "Vedaa",
    genre: "Action, Drama",
    cast: "John Abraham, Sharvari Singh, Abhishek Banerjee, Tamnna Bhatia",
    trailer:[
      "https://www.youtube.com/embed/RcKR-1XvxMc?si=w3l6j4FI4AH3MXh3"
    ],
    description: "Vedaa is an action-packed drama that follows the story of a resilient protagonist who embarks on a journey of self-discovery while confronting challenges from his past. Set against a backdrop of intense conflict and emotional upheaval, the movie explores themes of courage, love, and redemption. Filled with thrilling sequences, gripping dialogues, and powerful performances, Vedaa is a cinematic experience that captivates from start to finish.",
    downloadLink: "#",
  },
  {
    id: 7,
    title: "Thalapathy is the G.O.A.T.",
    genre: "Action,Drama,Thriller",
    cast: "Vijay, Kokila Mohan, Yogi Babu, Prashanth Thiagarajan, Prabhu Deva",
    trailer:[
      "https://www.youtube.com/embed/Uf8rt635LLo?si=MMYVzFUNRdYTxHiR"
    ],
    description: "Thalapathy (Vijay), often hailed as the G.O.A.T. of Indian cinema, has captivated audiences with his magnetic screen presence, versatile acting, and undeniable charm. His journey from a rising star to a cinema legend is marked by blockbuster hits, iconic roles, and a deep connection with his fans. Known for delivering larger-than-life performances, Thalapathy is celebrated for his action-packed films, heartfelt drama, and dynamic dance moves. With a career spanning decades, he continues to push boundaries and inspire millions, solidifying his legacy as one of the greatest of all time in Tamil cinema.",
    downloadLink: "https://drive.google.com/file/d/12u_rqx4gLFbuJeWqXT6bk83Jeeh7qbd6/view?usp=drive_link",
  },
  {
    id: 8,
    title: "Kahan Shuru Kaha Khatam",
    genre: "Comedy, Romantic",
    cast: "Dhvani Bhanushali, Aashim Gulati",
    trailer:[
      "https://www.youtube.com/embed/CaLFmah0xpc?si=si1oye0AAz0eAGcg"
    ],
    description: "Kahan Shuru Kaha Khatam is a gripping drama that explores the intertwined lives of three individuals, each on a quest to discover the meaning of their existence. As their paths cross unexpectedly, they find themselves caught in a whirlwind of emotions, secrets, and choices that will define their futures. The film beautifully weaves together themes of love, loss, and destiny, highlighting how beginnings and endings are often blurred, leaving the characters—and the audience—wondering where their journey truly started and where it will end.",
    downloadLink: "#",
  },
  {
    id: 9,
    title: "Devara Part 1",
    genre: "Action,Drama,Thriller",
    cast: "Jr. NTR, Janhvi Kapoor, Saif Ali khan",
    trailer:[
      "https://www.youtube.com/embed/Xg0vBOxV2to?si=Xu_b8ayqIu7pRFz4"
    ],
    description: " Devara: Part 1 is the beginning of an epic saga that tells the story of Devara, a fearless warrior destined to protect his kingdom from dark forces threatening its existence. Set in a mythic landscape filled with ancient secrets and untold power, Devara must confront not only external enemies but also the demons within himself. As war looms and loyalties are tested, the film unfolds a tale of sacrifice, courage, and redemption, setting the stage for an even greater conflict to come. With breathtaking action, intense drama, and a rich world steeped in tradition, Devara: Part 1 promises to be the start of a legendary journey.",
    downloadLink: "#",
  },
  {
    id: 10,
    title: "Locha Laapsi",
    genre: "Comedy,Thriller",
    cast: "Malhar Thakkar, Chirag Vora, Vaibhavi Upadhyay",
    trailer:[
      "https://www.youtube.com/embed/ns9RodI1rqU?si=NCQgOg2ef7gbAnDp"
    ],
    description: "Locha Laapsi is a heartwarming Gujarati comedy-drama that delves into the life of a small-town man caught between his dreams and the realities of family expectations. The film humorously captures the chaotic locha(trouble) that unfolds when the protagonist decides to pursue his passion, only to face a series of hilarious misunderstandings and emotional twists. With a perfect blend of comedy, drama, and Gujarati culture, Locha Laapsi explores themes of ambition, love, and the importance of staying true to oneself. It's a delightful cinematic treat filled with vibrant characters, witty dialogues, and a feel-good narrative.",
    downloadLink: "#",
  },
  // Add more movie objects here3
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
