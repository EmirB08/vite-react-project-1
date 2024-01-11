import * as React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';

const FixedContainer = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#fff', height: '100vh' }}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
};

FixedContainer.propTypes = {
  children: PropTypes.node
};

export default FixedContainer;
