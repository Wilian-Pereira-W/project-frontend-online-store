import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.setToLocalStorage = this.setToLocalStorage.bind(this);
  }

  setToLocalStorage() {
    const { product: { title, thumbnail, price, id } } = this.props;
    const putInLocalStorage = {
      title,
      thumbnail,
      price,
      id,
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
      shipping,
      key,
    }, product } = this.props;
    const freeShipping = shipping.free_shipping;

    return (
      <section data-testid="product">
        <Link
          key={ product.id }
          data-testid="product-detail-link"
          to={ `ProductDetails/${product.category_id}/${product.id}` }
        >
          <div>
            <h3>{ title }</h3>
            { freeShipping && <p data-testid="free-shipping">Frete Grátis!</p> }
            <img src={ thumbnail } alt={ `Imagem: ${title}` } />
            <p>{ price }</p>
          </div>
        </Link>
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

Card.defaultProp = {
  shipping: {
    freeShipping: false,
  },
};

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};

export default Card;
