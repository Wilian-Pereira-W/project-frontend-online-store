import React from 'react';
import * as cartStorage from '../services/cartStorage';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocalStorageFilled: false,
    };

    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    this.checkLocalStorage = this.checkLocalStorage.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    this.checkLocalStorage();
  }

  getFromLocalStorage() {
    const shopCart = JSON.parse(localStorage.getItem('addProducts'));
    const { isLocalStorageFilled } = this.state;

    if (isLocalStorageFilled) {
      const renderizeItems = shopCart.map((item) => (
        <section key={ item.id } data-testid="product">
          <h3 data-testid="shopping-cart-product-name">{ item.title }</h3>
          <img src={ item.thumbnail } alt={ `Imagem: ${item.title}` } />
          <p>{ item.price }</p>
          <p
            data-testid="shopping-cart-product-quantity"
          >
            Quantidade:
            {' '}
            { item.quantity }
          </p>
          <div>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.increase(item) }
            >
              +
            </button>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.decrease(item) }
            >
              -
            </button>
          </div>
        </section>
      ));
      return renderizeItems;
    }
  }

  checkLocalStorage() {
    if (!JSON.parse(localStorage.getItem('addProducts'))) {
      this.setState({
        isLocalStorageFilled: false,
      });
    } else {
      this.setState({
        isLocalStorageFilled: true,
      });
    }
  }

  increase(product) {
    cartStorage.increaseQuantity(product);
    this.checkLocalStorage();
  }

  decrease(product) {
    cartStorage.reduceQuantity(product);
    this.checkLocalStorage();
  }

  render() {
    const emptyMessage = (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );

    return (
      <div>
        { this.getFromLocalStorage() ? this.getFromLocalStorage() : emptyMessage }
      </div>
    );
  }
}

export default Cart;
