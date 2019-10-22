import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ProductsConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductsConsumer>
                        {value => {
                            return (
                                <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                    <Link to="/details">
                                        <img src={img} alt={title} className="card-img" />
                                    </Link>
                                    <button className="card-btn" disabled={inCart ? true : false} onClick={() => { value.addToCart(id); value.openModal(id) }}>
                                        {inCart ? (<p className="m-0">In Cart</p>) : (<i className="fas fa-cart-plus" />)}
                                    </button>
                                </div>
                            );
                        }
                        }

                    </ProductsConsumer>
                    <div className="card-footer d-flex justify-content-between p-3">
                        <p className="mb-0">{title}</p>
                        <p className="mb-0">${price}</p>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
    .card {
        transition: all 1s linear;
    }
`