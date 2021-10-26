import React from 'react';
import ProductDetails from '../pages/ProductDetails';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends React.Component {

  render() {
    const { product: {
      title,
      price,
      thumbnail,
      category_id,
      id,
    }, query} = this.props;
    return (
      <Link data-testid="product-detail-link" to={ `ProductDetails/${ category_id }/${ id }/${ query }`} >
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ `Imagem: ${title}` } />
        <p>{ price }</p>
      </section>
      </Link>
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
