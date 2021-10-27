import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import setToLocalStorage from '../services/cartStorage';

class Card extends React.Component {
  render() {
    const { product: {
      title,
      price,
      thumbnail,
      id,
      shipping,
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
          id={ id }
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => setToLocalStorage(product) }
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
  key: '',
};

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    key: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};

export default Card;
