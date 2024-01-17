import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


const LayoutCardAlternative = ({ article }) => {
  return (
    <Card variant="outlined">
    <CardContent>
        <Typography color="text.primary" gutterBottom>
        {article.title}
        </Typography>
        {/* You can add other article details here in a different layout */}
   </CardContent>
   </Card>
);
};

LayoutCardAlternative.propTypes = {
    article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    }).isRequired
};

export default LayoutCardAlternative;
