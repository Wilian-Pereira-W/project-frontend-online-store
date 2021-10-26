import React from 'react';
import * as api from '../services/api';
import Card from '../components/Card';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      productList: [],
    };
    this.handChange = this.handChange.bind(this);
    this.getListCategories = this.getListCategories.bind(this);
  }

  async getProductList() {
    const { query } = this.state;
    const data = await api.getProductsFromCategoryAndQuery('', query);
    this.setState({
      productList: data.results,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { query, productList } = this.state;
    const { getProductList, handleChange } = this;
    
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
