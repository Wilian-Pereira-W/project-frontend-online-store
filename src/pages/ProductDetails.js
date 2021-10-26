import React from 'react';
import * as api from '../services/api';
import mockedQueryResult from '../__mocks__/query';

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
      match: {
        params: {
          category, query,
        }
      }
    } = this.props;

    // const {results} = await api.getProductsFromCategoryAndQuery(category, query);
    const {results} = mockedQueryResult;
    console.log(results);
    const id = 'MLB923744806';
    const matching = results.find((product) => product.id === id);
    console.log(matching)

    this.setState({ clickedProduct: matching });
  }
  render() {
    const {
      match: { params: { category, id, query } } 
    } = this.props;
    const { clickedProduct } = this.state;
    return <p data-testid="product-detail-name">{ clickedProduct.title }</p>;
  }
}
export default ProductDetails;
