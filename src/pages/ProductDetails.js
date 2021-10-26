import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.getProduct = this.getProduct.bind(this);

    this.state = {
      clickedProduct: {},
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

    this.setState({ clickedProduct: finalProduct });
  }

  render() {
    const { clickedProduct } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          { clickedProduct.title }
        </h1>
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
