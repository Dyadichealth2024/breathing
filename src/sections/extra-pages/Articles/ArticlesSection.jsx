// material-ui
import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    title: '3 Tips For Setting The Stage For Better Sex',
    image: 'image_url_1', // Replace with actual image URL
    link: '/article-1' // Replace with actual route
  },
  {
    title: 'Tips From Sex Experts To Increase Intimacy',
    image: 'image_url_2',
    link: '/article-2'
  },
  // Add more articles here
];

export default function ArticlesSection() {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
  
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out'
                }
              }}
            >
              <CardActionArea onClick={() => handleCardClick(article.link)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {article.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}