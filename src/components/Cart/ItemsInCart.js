import React from 'react';
import { ProductsConsumer } from '../../context';
import ItemInCart from './ItemInCart';
import CartEmpty from './CartEmpty';


export default function ItemsInCart() {
    return (
        <ProductsConsumer>
            {value => {
                const { cart } = value;
                return cart.map((item) => {
                    return (<ItemInCart key={item.id} product={item} value={value} />);
                });
            }}
        </ProductsConsumer>
    );
}
