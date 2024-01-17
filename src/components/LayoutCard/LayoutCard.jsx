import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const LayoutCard = ({ article }) => {
    return (
    <Card>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {article.description}
          {/* Adding more here after I test */}
        </Typography>
        
    </CardContent>
    </Card>
);
};


LayoutCard.propTypes = { 
    article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    }).isRequired
};

export default LayoutCard;
