import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <AppBar position="static" color="error">
            <Toolbar>
                <Box flexGrow={1}>
                    <Typography variant="body1" color="inherit">
                        © 2024 PokeApi
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
