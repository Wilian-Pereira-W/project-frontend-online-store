import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { product: {
      title,
      price,
      thumbnail,
      shipping,
    } } = this.props;
    const freeShipping = shipping.free_shipping;

    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        { freeShipping && <p data-testid="free-shipping">Frete Grátis!</p> }
        <img src={ thumbnail } alt={ `Imagem: ${title}` } />
        <p>{ price }</p>
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};

export default Card;
