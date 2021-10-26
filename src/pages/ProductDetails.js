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
      match: { params: { category, id, query } },
    } = this.props;

    const {results} = await api.getProductsFromCategoryAndQuery(category, query);
    const finalProduct = results.find((product) => product.id === id);

    this.setState({ clickedProduct: finalProduct });
  }
  render() {
    const { clickedProduct } = this.state;
    return (
      <p data-testid="product-detail-name">
        { clickedProduct.title }
      </p>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetails;
