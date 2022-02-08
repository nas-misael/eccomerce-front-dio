import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Grid, Typography, List, makeStyles, CardContent } from '@material-ui/core/';
import Item from '../components/Item';
import Card from '../components/Card';
import Common from '../Common.css'
import Home from '../css/Home.css'

const useStyles = makeStyles((theme) => ({
    
  }));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = { };
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1;
                    })
                    .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = { };

    for(let i = 0; i < arrayCategory.length; i++){
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    return(
        <section className='content container'>
            <div className='categorias'>
                <h5 className='categorias-title'>
                    Categorias
                </h5>
                <div>
                    {category.map(
                        category => {
                            return (
                                <div className='categoria-item'>
                                <Item
                                    key = {category.id} 
                                    name= {category.name}
                                    details={count[category.name]}
                                />
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
            <div className='products'>
                {products.map(item => {
                    return(
                        <div>
                            <Card
                                key={item.id_product}
                                product={item}
                                
                            >
                                {item.name_product}
                            </Card>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default HomePage;
