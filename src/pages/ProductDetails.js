import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import EvaluationForm from '../components/EvaluationForm';

class ProductDetails extends React.Component {
  constructor() {
    super();

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

  render() {
    const { clickedProduct, freeShipping } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          { clickedProduct.title }
          { freeShipping && <p data-testid="free-shipping">Frete Grátis!</p> }
        </h1>
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
