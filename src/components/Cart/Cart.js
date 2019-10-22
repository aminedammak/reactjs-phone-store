import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import ItemsInCart from './ItemsInCart';
import CartEmpty from './CartEmpty';
import ClearCart from './ClearCart';
import { ProductsConsumer } from '../../context';

export default class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductsConsumer >
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <div className="container-fluid">
                                    <Title name="Your" title="Cart" />
                                    <CartColumns />
                                    <ItemsInCart />
                                    <ClearCart />
                                </div>
                            );
                        } else {
                            return (
                                <div className="container-fluid">
                                    <CartEmpty />
                                </div>
                            );
                        }
                    }}
                </ProductsConsumer >
            </React.Fragment>
        )
    }
}