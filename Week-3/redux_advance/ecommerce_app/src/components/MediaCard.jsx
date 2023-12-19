import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function MediaCard({ image, title, price, onClickTitle }) {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 350 }}
                image={image} //"/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />

            <CardContent>
                <CardActions> 
                    <Button size="small" onClick={onClickTitle}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                    </Button>
                </CardActions>
                <CardActions>
                    <Typography variant="body2" color="text.secondary">
                        {price} ₹
                    </Typography>
                </CardActions>
            </CardContent>
        </Card>
    );
}