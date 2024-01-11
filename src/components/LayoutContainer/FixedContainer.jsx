import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';

export default function FixedContainer( {children} ) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#fff', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
