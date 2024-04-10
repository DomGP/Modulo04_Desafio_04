import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Buscador = ({busquedaPokemon, setBusquedaPokemon}) => {

    return (
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m:2, mt:3, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField 
                id="outlined-basic" 
                label="Busca tu Pokemon" 
                variant="outlined" 
                value={busquedaPokemon}
                onChange={(e) => setBusquedaPokemon(e.target.value)}/>
        </Box>
    )
}

export default Buscador