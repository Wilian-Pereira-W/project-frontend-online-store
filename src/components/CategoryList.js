import React from 'react';
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
    return (
      <aside>
        {
          categoryList.map(({ id, name }) => (
            <label htmlFor={ id } key={ id } data-testid="category">
              <input type="radio" name={ id } />
              { name }
            </label>
          ))
        }
      </aside>
    );
  }
}

export default CategoryList;
