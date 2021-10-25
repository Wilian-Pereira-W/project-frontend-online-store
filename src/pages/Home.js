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

  async getListCategories() {
    const { query } = this.state;
    const data = await api.getProductsFromCategoryAndQuery('', query);
    this.setState({
      productList: data.results,
    });
  }

  handChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { query, productList } = this.state;
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <form>
            <label htmlFor="query-input">
              <input
                data-testid="query-input"
                type="text"
                value={ query }
                onChange={ this.handChange }
                name="query"
              />
            </label>
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.getListCategories }
            >
              Buscar

            </button>
          </form>
          {productList.map((product) => (
            <Card
              key={ product.id }
              productList={ product }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
