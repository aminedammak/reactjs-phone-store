import React from 'react'
import styled from 'styled-components';
export default function ItemInCart(props) {
    const { id, img, title, price, count, total } = props.product;
    const { increment, decrement } = props.value;

    return (
        <ProductListRow>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="cell">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="cell">
                            <h3>{title}</h3>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="cell">
                            <h3>{price}</h3>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="cell">
                            <h3><button onClick={() => decrement(id)} className="px-2 m-1" disabled={count > 0 ? false : true}>-</button>{count}<button onClick={() => increment(id)} className="px-2 m-1">+</button></h3>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="cell">
                            <h3>Remove</h3>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="cell">
                            <h3>{total}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </ProductListRow>
    )
}

const ProductListRow = styled.div`
    img {
        width: 50px;
    }
    .cell {
        padding: 20px 10px;
    }
`