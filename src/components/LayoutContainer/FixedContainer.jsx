import * as React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';

const FixedContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Container fixed>
        <Box sx={{ bgcolor: 'rgb(26, 74, 115);', height: '100vh' }}>
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

// Path: src/components/LayoutContainer/FluidContainer.jsx