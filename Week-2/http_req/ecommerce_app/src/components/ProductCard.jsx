import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { addToCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export function ProductCard({data, productId}){
    const [cartValue, setCartValue] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const content = (
        <div>
          {data['description']}
        </div>
      );
    
    const handleAddToCart = () => {
        const quantity = 1;
        console.log(`handleAddToCart - ${productId}, ${quantity};`)
        dispatch(addToCart({ productId, quantity }));
        setCartValue(true);
    }

    const handleGoToCart = () => {
        navigate(`/cart/`);
    }

    // useEffect(()=>{
    //     var element = document.querySelector('.loader');
    //     element.parentNode.removeChild(element);
    //     // const element = document.getElementsByClassName("d-flex");
    //     // element.remove(); // Removes the div with the 'div-02' id
    // }, [])

    return(
        <Root>
            <CardMedia
                sx={{ height: 350 }}
                image={data['image']}
                title={data['title']}
            />
            <Typography gutterBottom variant="h5" component="div">
                {data['title']}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data['price']} ₹
            </Typography>
            {content}
            <CardActions>
                {console.log('cartValue -->>>', cartValue)}
                {cartValue ? <button className="btn btn-primary" onClick={handleGoToCart}> Go to Cart </button>
                                : <button className="btn btn-primary" onClick={handleAddToCart}> Add to Cart </button> }
                {/* <Button size="small" onClick={cartValue ? handleAddToCart : handleGoToCart}>
                    {cartValue ? 'Add To Cart' : 'Go To Cart'}
                </Button> */}
            </CardActions>
        </Root>
    );

}