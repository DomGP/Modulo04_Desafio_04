import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Cards = ({titleCard,subtitleCard,imageCard,titleNumber,titleType }) => {

  return (
    <Card 
        sx={{ width:300, maxWidth: 350, my:2, mb:3 }}>
      <CardHeader
        title={['N°', titleNumber, ' - ', titleCard]}
        subheader={subtitleCard}
      />
      <CardMedia
        component="img"
        height="300"
        image={imageCard}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Tipo: {titleType}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cards;
