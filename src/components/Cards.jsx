import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Cards = ({titleCard,subtitleCard,imageCard,titleNumber }) => {

  return (
    <Card 
        sx={{ maxWidth: 350, mt:3, ml:3, mb:3 }}>
      <CardHeader
        title={['N°', titleNumber, ' - ', titleCard]}
        subheader={subtitleCard}
      />
      <CardMedia
        component="img"
        height="200"
        image={imageCard}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cards;
