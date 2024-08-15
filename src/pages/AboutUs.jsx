// material-ui
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// project imports
import AboutHeader from 'sections/extra-pages/about/AboutHeader';
import VisionSection from 'sections/extra-pages/about/VisionSection';
import CEOInfo from 'sections/extra-pages/about/CEOInfo';

// ==============================|| ABOUT US - MAIN ||============================== //

export default function AboutUs() {
  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 12 }}>
      <Grid item xs={12}>
        <AboutHeader />
      </Grid>
      <Grid item xs={12} sm={10} lg={9}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          <VisionSection />
        </Container>
      </Grid>
      <Grid item xs={12} sm={10} lg={9}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          <CEOInfo />
        </Container>
      </Grid>
    </Grid>
  );
}
