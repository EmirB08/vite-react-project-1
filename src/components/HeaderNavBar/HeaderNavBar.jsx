import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const NavBarHeader = () => (
	<AppBar
		position="static"
		sx={{ backgroundColor: "rgb(24, 94, 165)", marginBottom: "20px" }}>
		<Toolbar
			sx={{ minHeight: "45px !important", padding: "0px", margin: "0px" }}>
			<Typography level="h1" color="inherit" component="div">
				Blog Gallery
			</Typography>
			<Box display="flex" flexGrow={1} justifyContent="flex-end">
				<Button color="inherit">Home</Button>
				<Button color="inherit">About</Button>
				<Button color="inherit">Contact</Button>
			</Box>
		</Toolbar>
	</AppBar>
);

export default NavBarHeader;
