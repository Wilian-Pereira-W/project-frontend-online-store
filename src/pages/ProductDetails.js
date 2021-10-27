import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import EvaluationForm from '../components/EvaluationForm';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.setToLocalStorage = this.setToLocalStorage.bind(this);
    this.getProduct = this.getProduct.bind(this);

    this.state = {
      clickedProduct: {},
      freeShipping: false,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const {
      match: { params: { category, id } },
    } = this.props;

    const { results } = await api.getProductsFromCategoryAndQuery(category, '');
    const finalProduct = results.find((product) => product.id === id);

    this.setState({
      clickedProduct: finalProduct,
      freeShipping: finalProduct.shipping.free_shipping,
    });
  }

  setToLocalStorage() {
    const { clickedProduct } = this.state;

    if (!JSON.parse(localStorage.getItem('addProducts'))) {
      localStorage.setItem('addProducts', JSON.stringify([clickedProduct]));
    } else {
      const recoveredFromLocal = JSON.parse(localStorage.getItem('addProducts'));
      recoveredFromLocal.push(clickedProduct);
      localStorage.setItem('addProducts', JSON.stringify(recoveredFromLocal));
    }
  }

  render() {
    const { clickedProduct, freeShipping } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/Cart">
          Carrinho de Compras
        </Link>
        <h1 data-testid="product-detail-name">
          { clickedProduct.title }
          { freeShipping && <p data-testid="free-shipping">Frete Grátis!</p> }
        </h1>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.setToLocalStorage }
        >
          Adicionar ao Carrinho
        </button>
        <EvaluationForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
