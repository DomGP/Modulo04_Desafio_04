import Button from '@mui/material/Button';

const Boton = (props) => {
    return (
        <>
            <Button 
                variant="contained" 
                color='error'
                onClick={props.onClick}>{props.label}</Button>
        </>
    )
}

export default Boton 