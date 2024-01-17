import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import LayoutCard from "../LayoutCard/LayoutCard.jsx";
import LayoutCardAlternative from "../LayoutCard/LayoutCardAlternative.jsx";
import PropTypes from 'prop-types';

export default function FullWidthGrid({ articles }) {
  const [open, setOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid item xs={12} md={6} key={index} onClick={() => handleCardClick(article)}>
            <LayoutCard article={article} />
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        {selectedArticle && <LayoutCardAlternative article={selectedArticle} />}
      </Dialog>
    </Box>
  );
}

FullWidthGrid.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  })).isRequired
};


