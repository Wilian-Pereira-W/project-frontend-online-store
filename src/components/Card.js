import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.setToLocalStorage = this.setToLocalStorage.bind(this);
  }

  setToLocalStorage() {
    const { product: { title, thumbnail, price } } = this.props;
    const putInLocalStorage = {
      title,
      thumbnail,
      price,
    };

    if (!JSON.parse(localStorage.getItem('addProducts'))) {
      localStorage.setItem('addProducts', JSON.stringify([putInLocalStorage]));
    } else {
      const recoveredFromLocal = JSON.parse(localStorage.getItem('addProducts'));
      recoveredFromLocal.push(putInLocalStorage);
      localStorage.setItem('addProducts', JSON.stringify(recoveredFromLocal));
    }
  }

  render() {
    const { product: {
      title,
      price,
      thumbnail,
      key,
    } } = this.props;

    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ `Imagem: ${title}` } />
        <p>{ price }</p>

        <button
          id={ key }
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.setToLocalStorage }
        >
          Adicionar ao Carrinho
        </button>
      </section>

    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
};
export default Card;
