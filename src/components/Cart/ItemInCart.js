import React from 'react'
import styled from 'styled-components';
export default function ItemInCart(props) {
    const { id, img, title, price, count, total } = props.product;
    const { increment, decrement, deleteFromCart } = props.value;

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
                            <h5>{title}</h5>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="cell">
                            <h5>{price}</h5>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="cell">
                            <button onClick={() => decrement(id)} className="px-2 m-1" disabled={count > 0 ? false : true}>-</button>
                            {count}
                            <button onClick={() => increment(id)} className="px-2 m-1">+</button>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="cell">
                            <h5><i className="fa fa-trash" aria-hidden="true" onClick={() => deleteFromCart(id)}></i></h5>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="cell">
                            <h5>{total}</h5>
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
        text-align: center;
    }
`