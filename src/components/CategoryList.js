import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    api.getCategories()
      .then((data) => {
        this.setState({ categoryList: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { categoryList } = this.state;
    const { handleCategorySelect } = this.props;

    return (
      <aside>
        {
          categoryList.map(({ id, name }) => (
            <label htmlFor={ id } key={ id } data-testid="category">
              <input
                type="radio"
                name="category"
                id={ id }
                onClick={ handleCategorySelect }
              />
              { name }
            </label>
          ))
        }
      </aside>
    );
  }
}

CategoryList.propTypes = ({
  handleCategorySelect: PropTypes.func.isRequired,
});

export default CategoryList;
