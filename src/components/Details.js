import React, { Component } from 'react';
import { ProductsConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {

        return (
            <ProductsConsumer>
                {value => {
                    let { id, title, img, info, inCart } = value.detailsProduct;
                    return (
                        <div className="container">
                            <h3>{title}</h3>
                            <img src={img} alt={title} />
                            <p>{info}</p>
                            <ButtonContainer className="mr-2"><Link to="/">Back to products</Link></ButtonContainer>
                            <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                                value.addToCart(id);
                                value.openModal(id);
                            }}>Add to card</ButtonContainer>
                        </div>
                    );
                }}
            </ProductsConsumer>
        );
    }
}