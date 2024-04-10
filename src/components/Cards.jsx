import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Cards = ({titleCard,subtitleCard,imageCard }) => {

  return (
    <Card 
        sx={{ maxWidth: 345, mt:3, ml:3 }}>
      <CardHeader
        title={titleCard}
        subheader={subtitleCard}
      />
      <CardMedia
        component="img"
        height="194"
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
