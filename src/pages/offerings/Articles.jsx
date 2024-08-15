import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AuthBackground from 'assets/images/auth/AuthBackground';
import ArticlesHeader from 'sections/extra-pages/Articles/ArticlesHeader';
 // Import the new ArticlesHeader component

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
          <ArticlesHeader /> {/* Use the ArticlesHeader component */}
        </Grid>

        <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
          <img
            src="src/assets/images/Frame 1244830895.png" // Replace with your image path
            alt="Horizontal"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Articles;
