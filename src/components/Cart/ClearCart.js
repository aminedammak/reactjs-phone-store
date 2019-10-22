import React from 'react';
import { ProductsConsumer } from '../../context';

export default function ClearCart() {
    return (
        <div className="container-fluid text-center">
            <ProductsConsumer>
                {value => {
                    const { clearCart } = value;
                    return (
                        <button className="btn btn-danger " onClick={() => clearCart()}>Clear Cart</button>
                    );
                }}

            </ProductsConsumer>
        </div>
    )
}
