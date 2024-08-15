import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AuthBackground from 'assets/images/auth/AuthBackground';
import ArticlesHeader from 'sections/extra-pages/Articles/ArticlesHeader';
import ArticlesSection from 'sections/extra-pages/Articles/ArticlesSection'; // Assuming ArticlesSection is in the same directory

const Articles = () => {
  return (
    <div>
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 12 }}>
        <Grid item xs={12}>
          <ArticlesHeader />
        </Grid>

        <Grid item xs={12}>
          <ArticlesSection />
        </Grid>

       
      </Grid>
    </div>
  );
};

export default Articles;
