import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const LayoutCard = ({ article }) => {
	return (
		<Card
			sx={{
				height: "240px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				"&:hover": { cursor: "pointer", color: "rgb(23, 78, 166);" },
			}}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{article.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{article.description}
				</Typography>
			</CardContent>
			<Box sx={{ display: "flex", alignItems: "center" }}>
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
		</Card>
	);
};

LayoutCard.propTypes = {
	// gikk ganske eksplisitt her, men grei trening
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		author: PropTypes.shape({
			username: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
};

export default LayoutCard;
