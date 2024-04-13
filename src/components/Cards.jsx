import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Cards = ({titleCard,subtitleCard,imageCard,titleNumber,titleType }) => {

  return (
    <Card 
        sx={{
            width:300, 
            maxWidth: 350, 
            my:2, 
            mb:3, 
            border:'1px solid lightgrey', 
            borderRadius:'20px', 
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'}}>
      <CardHeader
        title={['N°', titleNumber, ' - ', titleCard]}
      />
      <CardMedia
        component="img"
        height="300"
        image={imageCard}
      />
      <CardContent>
        <Typography 
          variant="body2" 
          color="text.primary"
          sx={{
            fontWeight:700,
            fontSize:'15px'
          }}
          >
          Tipo: {titleType}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cards;
