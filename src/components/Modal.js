import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductsConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductsConsumer>
                {value => {
                    const { modalOpened, productInModal, closeModal } = value;
                    const { title, img } = productInModal;
                    if (!modalOpened) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="product-modal">
                                    <h2>{title}</h2>
                                    <img src={img} />
                                    <div className="row">
                                        <div className="col-6">
                                            <ButtonContainer ><Link to="/" onClick={() => closeModal()}>store</Link></ButtonContainer>
                                        </div>
                                        <div className="col-6">
                                            <ButtonContainer cart ><Link to="/cart" onClick={() => closeModal()}>Go to cart</Link></ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}

            </ProductsConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    bottom: 0;
    background-color: rgba(138, 145, 152, 0.5);
    .product-modal {
        background-color: white;
        box-shadow: 1px 1px 1px #000;
        width: 600px;
        margin: 0 auto;
        position: absolute; 
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        padding: 50px;
    }
`;