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
  flex-wrap: nowrap;
  gap: 16px;
  overflow-x: auto;
  padding: 20px;
  scrollbar-width: thin;
  scrollbar-color: #888 #e0e0e0;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }
`;

const ArticleCard = styled.div`
  min-width: 300px;
  background: ${props => props.bgColor || '#fff'};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  text-align: center;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ArticleTitle = styled.div`
  background-color: #a5d8ff;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
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
        <Grid item xs={12}>
          <ArticleContainer>
            {articles.map((article, index) => (
              <ArticleCard key={index} bgColor={article.bgColor}>
                <ArticleImage src={article.imgSrc} alt={article.title} />
                <ArticleTitle>{article.title}</ArticleTitle>
              </ArticleCard>
            ))}
          </ArticleContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Articles;
