import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocalStorageFilled: false,
    };

    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
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
          <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
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
