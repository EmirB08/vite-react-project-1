import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

const LayoutCardAlternative = ({ article }) => {
    return (
    <Card variant="outlined">
    <CardContent>
        <Typography color="text.primary" gutterBottom variant="h5">
        {article.title}
        </Typography>
        <Typography color="text.secondary" variant="body2" sx={{ marginBottom: 2 }}>
        {article.body}
        </Typography>
        <Box display="flex" alignItems="center">
        <CardMedia
            sx={{ height: 22, width: 22, marginRight: 1 }} // sx styling for å overwrite default styling
            component="img"
            image={article.author.image}
            alt={article.author.username}
        />
        <Typography color="text.secondary" variant="body2" fontWeight="bold">
            {article.author.username}
        </Typography>
        </Box>
        <Typography color="text.secondary" variant="caption" fontWeight="bold">
        Created At: {new Date(article.createdAt).toLocaleDateString()}
        </Typography>
    </CardContent>
    </Card>
);
};

LayoutCardAlternative.propTypes = { // gikk ganske eksplisitt her, men grei trening
    article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string,
    }).isRequired,
}).isRequired
};

export default LayoutCardAlternative;


