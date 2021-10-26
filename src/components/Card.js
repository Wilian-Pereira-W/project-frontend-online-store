import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { product: {
      title,
      price,
      thumbnail,
    } } = this.props;
    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ `Imagem: ${title}` } />
        <p>{ price }</p>
      </section>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
