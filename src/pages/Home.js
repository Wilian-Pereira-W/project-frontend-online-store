import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CategoryList from '../components/CategoryList';
import Card from '../components/Card';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      currentCategory: '',
      productList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getProductList = this.getProductList.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleCategorySelect(event) {
    const { id } = event.target;
    const { getProductList } = this;
    this.setState({
      currentCategory: id,
    }, () => getProductList());
  }

  async getProductList() {
    const { query, currentCategory } = this.state;
    const data = await api.getProductsFromCategoryAndQuery(currentCategory, query);
    this.setState({
      productList: data.results,
    });
  }

  render() {
    const { query, productList } = this.state;
    const { getProductList, handleCategorySelect, handleChange } = this;

    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/Cart">
          Carrinho de Compras
        </Link>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryList handleCategorySelect={ handleCategorySelect } />
        <div className="search-form">
          <form>
            <label htmlFor="query-input">
              <input
                data-testid="query-input"
                type="text"
                value={ query }
                onChange={ handleChange }
                name="query"
              />
            </label>
            <button
              data-testid="query-button"
              type="button"
              onClick={ getProductList }
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="product-list">
          {productList.map((product) => (
            <Card
              key={ product.id }
              product={ product }
              query={ query }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
