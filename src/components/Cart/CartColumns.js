import React from 'react';
import styled from 'styled-components';

export default function CartColumns() {
    return (
        <CartColumnsContainer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <h3>Products</h3>
                    </div>
                    <div className="col-lg-2">
                        <h3>Name of Product</h3>
                    </div>
                    <div className="col-lg-2">
                        <h3>Price</h3>
                    </div>
                    <div className="col-lg-2">
                        <h3>Quantity</h3>
                    </div>
                    <div className="col-lg-2">
                        <h3>Remove</h3>
                    </div>
                    <div className="col-lg-2">
                        <h3>Total</h3>
                    </div>
                </div>
            </div>
        </CartColumnsContainer>
    )
}

const CartColumnsContainer = styled.div`
    h3 {
        text-align: center;
    }
`