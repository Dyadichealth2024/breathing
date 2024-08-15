import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import AuthBackground from 'assets/images/auth/AuthBackground';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Sample data
const articles = [
  { title: "The Role Of Dyadic Health In Parenting", imgSrc: "src/assets/images/articles/image1.png" },
  { title: "The Role of Dyadic Health in Overall Wellbeing", imgSrc: "src/assets/images/articles/image2.jpg" },
  { title: "Dyadic Health In Romantic Relationships", imgSrc: "src/assets/images/articles/image3.png" },
  { title: "The Role Of Dyadic Health In Parenting", imgSrc: "src/assets/images/articles/image4.png" },
  { title: "Dyadic Health In Spousal Relationships", imgSrc: "src/assets/images/articles/image5.jpg" },
  // ... add more articles as needed
];

const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 20px;
`;

const ArticleCard = styled.div`
  width: 150px;
  height: 200px;
  background: ${props => props.bgColor || '#e43737'};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  text-align: center;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const ArticleTitle = styled.div`
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const Articles = () => {
  return (
    <div>
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 12 }}>
      <Grid item xs={12}>
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: 9, pb: 2 }}>
      <AuthBackground />
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
        <Box sx={{ width: { xs: '100%', sm: 252, md: 360, lg: 436 }, py: 6, mx: 'auto' }}>
          <Stack spacing={1}>
            <Typography align="center" variant="h2">
              Articles
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
      </Grid>
      <ArticleContainer>
        {articles.map((article, index) => (
          <ArticleCard key={index} bgColor={article.bgColor}>
            <ArticleImage src={article.imgSrc} alt={article.title} />
            <ArticleTitle>{article.title}</ArticleTitle>
          </ArticleCard>
        ))}
      </ArticleContainer>
      </Grid>
    </div>
  );
};

export default Articles;
