import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const LayoutCardAlternative = ({ article }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="text.primary" gutterBottom variant="h5">
          {article.title}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {article.body}
        </Typography>
        <Typography color="text.secondary" variant="caption">
          Created At: {new Date(article.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

LayoutCardAlternative.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired
};

export default LayoutCardAlternative;

