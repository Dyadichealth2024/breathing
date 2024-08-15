import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function CEOInfo() {
  return (
    <Box sx={{ my: 4, py: 4, textAlign: 'center' }}>
      <Avatar
        alt="CEO"
        src="src/assets/images/aboutus/Sridhar-image-369x369.png" // Update the path to the actual image
        sx={{ width: 120, height: 120, margin: 'auto' }}
      />
      <Typography variant="h5" align="center" gutterBottom>
        Sridhar Rao Nagulavancha, CEO
      </Typography>
      <Typography variant="body1" align="center">
        Mr. Rao is the visionary behind our company, committed to making the world a better place.
      </Typography>
    </Box>
  );
}
    