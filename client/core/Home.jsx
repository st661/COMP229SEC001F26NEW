import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import unicornbikeImg from "./../assets/images/unicornbikeImg.jpg";

const Home = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 800,
        // maxWidth: 600,
        margin: "auto",
        mt: 5,
      }}
    >
      <Typography
        // variant="h6"
        variant="h2"
        sx={{
        //   px: 2.5,
          px: 10,
          pt: 3,
          pb: 2,
          color: theme.custom?.openTitle || theme.palette.primary.main,
        }}
      >
        Home Page
      </Typography>
      <CardMedia
        // sx={{ minHeight: 400 }}
        sx={{ minHeight: 600 }}
        image={unicornbikeImg}
        title="Unicorn Bike"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Welcome to the MERN Skeleton home page.
          We are glad to have you here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;