import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography, TextField, Button, Box, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';


// ==============================|| CUSTOM STYLED FOOTER ||============================== //

const FooterBlock = ({ isFull }) => {
  return (
    <div>
      {/* Footer Section */}
      <footer style={{ backgroundColor: '#f0f0f0', padding: '20px 0' }}>
        <Container>
          <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Box 
              sx={{ 
                width: 120,  // Set the width of the frame
                height: 120, // Set the height of the frame
                overflow: 'hidden', // Ensure that the image doesn't overflow the frame
                marginBottom: '10px' // Add some space below the image
              }}
            >
              <img 
                src="/src/assets/images/logo.png" 
                alt="Phoenixcoded" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain'  // Ensure the logo fits within the frame without distortion
                }} 
              />
            </Box>
            <Typography variant="body2" color="textSecondary">
              2717 Western Blvd #402-D Raleigh NC 27606<br />
              +1 571 9347292
            </Typography>
          </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="h4">Company</Typography>
              
              <Box mt={2}> {/* Adds margin-top to create space between Typography and the first Link */}
                <Link
                  className="header-link"
                  color="secondary.main"
                  component={RouterLink}
                  to="/about-us"
                  underline="none"
                >
                  About
                </Link>
              </Box>
              
              <Box mt={2}> {/* Adds margin-top to create space between the first Link and the second Link */}
                <Link
                  className="header-link"
                  color="secondary.main"
                  component={RouterLink}
                  to="/Articles"
                  underline="none"
                >
                  Articals
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="h4">Company</Typography>
              
              <Box mt={2}> {/* Adds margin-top to create space between Typography and the first Link */}
                <Link
                  className="header-link"
                  color="secondary.main"
                  component={RouterLink}
                  to="/contact-us"
                  underline="none"
                >
                  contact us
                </Link>
              </Box>
              
              <Box mt={2}> {/* Adds margin-top to create space between the first Link and the second Link */}
                <Link
                  className="header-link"
                  color="secondary.main"
                  component={RouterLink}
                  to="/"
                  underline="none"
                >
                  support
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h4">Legal Resources</Typography>
              <Link href="https://themeforest.net/page/item_support_policy" display="block" color="inherit" style={{ margin: '20px 0' }}>
                Terms & Condition
              </Link>
              <Link href="https://themeforest.net/licenses/standard" display="block" color="inherit" style={{ margin: '20px 0' }}>
                Privacy Policy
              </Link>
            </Grid>
          </Grid>
          <Box mt={3} textAlign="center">
            <IconButton href="https://www.facebook.com/Phoenixcoded/" aria-label="Facebook" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton href="https://www.instagram.com/Phoenixcoded/" aria-label="Instagram" target="_blank">
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com/phoenixcoded" aria-label="Twitter" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton href="https://in.linkedin.com/company/phoenixcoded" aria-label="LinkedIn" target="_blank">
              <LinkedIn />
            </IconButton>
          </Box>
        </Container>
      </footer>
    </div>
  );
};

FooterBlock.propTypes = { 
  isFull: PropTypes.bool 
};

export default FooterBlock;
