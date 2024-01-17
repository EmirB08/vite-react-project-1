import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/system';

const FixedContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Container fixed>
        <Box sx={{ height: '100vh' }}>
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