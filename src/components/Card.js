import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';
import CardStyle from './Card.css'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: 'orange'
    },
  }));

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <div className='card'>
            <div className="render-img">
                <img width="140px" src={product.image} alt={product.name_product}/>
            </div>
            <div className="infos">
                    <p className='title'>
                        {children}
                    </p>
                    <div className="valores">
                        <div className="desconto">
                            <p className='valorReal'>
                                R$ {product.price.toFixed(2)}
                            </p>
                            <p className='valorDesconto'>
                                R$ 500,00
                            </p>
                        </div>
                        <button 
                        className='button'
                        onClick={()=>dispatch(cartActions.Add(cart, product))}
                        >
                        <i class="fas fa-cart-plus space"></i> Comprar
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default Card;
