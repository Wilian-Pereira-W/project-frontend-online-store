import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isLocalStorageFilled: true,
    // };

    // this.toggleLocalStorage = this.toggleLocalStorage.bind(this);
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  // componentDidMount() {
  //   if (!JSON.parse(localStorage.getItem('addProducts'))) {
  //     toggleLocalStorage();
  //   }
  // }

  getFromLocalStorage() {
    const shopCart = JSON.parse(localStorage.getItem('addProducts'));

    const renderizeItems = shopCart.map((item) => (
      <section key={ item.id } data-testid="product">
        <h3 data-testid="shopping-cart-product-name">{ item.title }</h3>
        <img src={ item.thumbnail } alt={ `Imagem: ${item.title}` } />
        <p>{ item.price }</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </section>
    ));
    return renderizeItems;
  }

  // toggleLocalStorage() {
  //   this.setState({
  //     isLocalStorageFilled: false,
  //   });
  // }

  render() {
    return (
      <>
        <div>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
        { this.getFromLocalStorage() }
      </>
    );
  }
}

export default Cart;
