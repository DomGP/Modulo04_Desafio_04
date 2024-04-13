import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = ({footerText}) => {
    return (
        <AppBar position="static" color="error">
            <Toolbar>
                <Box flexGrow={1}>
                    <Typography variant="body1" color="inherit">
                        {footerText}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
