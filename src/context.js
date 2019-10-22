import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

//Provider
//Consumer

class ProductsProvider extends Component {

    state = {
        products: storeProducts,
        detailsProduct: detailProduct,
        cart: [],
        modalOpened: false,
        productInModal: {}
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach((product) => {
            tempProducts = [...tempProducts, product];
        });

        this.setState(() => ({
            products: tempProducts
        }));
    }

    getProduct = (id) => {
        return this.state.products.find(item => item.id === id);
    }

    handleDetail = (id) => {
        //find the product with id
        let product = this.getProduct(id);
        this.setState({
            detailsProduct: product
        })
    }

    addToCart = (id) => {
        //find the product with id
        let products = [...this.state.products].map(product => {
            if (product.id === id) {
                product.inCart = true;
                product.count = 1;
                product.total = product.price;
            }
            return product;
        });

        let cart = [...this.state.cart, this.getProduct(id)];


        this.setState(() => {
            return ({
                products,
                cart
            })
        });
    }

    deleteFromCart = (id) => {
        let productsListTemp = [...this.state.products];
        productsListTemp[id - 1].count = 0;
        productsListTemp[id - 1].total = 0;
        productsListTemp[id - 1].inCart = false;

        //Find the product to be deleted in the cart
        let productsInCartTemp = [...this.state.cart];

        productsInCartTemp = productsInCartTemp.filter(item => {
            if (item.id !== id) {
                return item;
            }
        });

        //update the state
        this.setState(state => {
            return {
                products: productsListTemp,
                cart: productsInCartTemp
            }
        });
    }

    clearCart = () => {
        //Empty the cart array
        let cartTemp = [...this.state.cart];
        cartTemp = [];

        //Update all products to be out of cart
        let productsTemp = [...this.state.products];
        productsTemp = productsTemp.map(item => {
            item.inCart = false
            item.count = 0;
            item.total = 0;
            return item;
        });

        //Update the state
        this.setState(state => {
            return {
                products: productsTemp,
                cart: cartTemp
            }
        })
    }


    openModal = (id) => {
        let productInModal = this.getProduct(id);

        this.setState({ modalOpened: true, productInModal })
    }

    closeModal = () => {
        this.setState({ modalOpened: false })
    }

    increment = (id) => {
        let productsListTemp = [...this.state.products];

        //Get the index of the product to be incremented in the products array
        productsListTemp[id - 1].count += 1;
        productsListTemp[id - 1].total = productsListTemp[id - 1].price * productsListTemp[id - 1].count;

        //update the state
        this.setState(state => {
            return {
                products: productsListTemp
            }
        })

    }

    decrement = (id) => {
        let productsListTemp = [...this.state.products];

        //Get the index of the product to be incremented in the products array
        if (productsListTemp[id - 1].count > 0) {
            productsListTemp[id - 1].count -= 1;
            productsListTemp[id - 1].total = productsListTemp[id - 1].price * productsListTemp[id - 1].count;

            if (productsListTemp[id - 1].count === 0) {
                productsListTemp[id - 1].inCart = false;
                this.deleteFromCart(id);
            }

            //update the state
            this.setState(state => {
                return {
                    products: productsListTemp
                }
            });
        }
    }



    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                deleteFromCart: this.deleteFromCart,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductsConsumer = ProductContext.Consumer;

export { ProductsProvider, ProductsConsumer };