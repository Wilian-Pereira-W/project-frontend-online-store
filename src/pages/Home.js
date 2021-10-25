import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      categoryId: '',
    };
  }

  render() {
    const { query, categoryId } = this.state;
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <form onSubmit>
            <label htmlFor="query-input">
              <input data-testid="query-input" type="text" value={ query } />
            </label>
            <button data-testid="query-button" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
