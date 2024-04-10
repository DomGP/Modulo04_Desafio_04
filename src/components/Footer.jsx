import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Box flexGrow={1}>
                    <Typography variant="body1" color="inherit">
                        © 2024 Mi Sitio Web. Todos los derechos reservados.
                    </Typography>
                </Box>
                <Typography variant="body2" color="inherit">
                    Política de privacidad
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
