import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';

class Home extends React.Component {
  render() {
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
        <CategoryList />
      </div>
    );
  }
}

export default Home;
