import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LayoutCard from "../LayoutCard/LayoutCard.jsx";
import LayoutCardAlternative from "../LayoutCard/LayoutCardAlternative.jsx";


export default function FullWidthGrid({ articles }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid item xs={12} md={6} key={index}>
            {index % 4 === 0 || index % 4 === 1 ? (
              <LayoutCard article={article} />
            ) : (
              <LayoutCardAlternative article={article} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


FullWidthGrid.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  })).isRequired
};

