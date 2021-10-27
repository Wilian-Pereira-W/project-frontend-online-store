import React from 'react';

class EvaluationForm extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sendEvaluation = this.sendEvaluation.bind(this);

    this.state = {
      evaluation: 0,
      comments: '',
    };
  }

  handleChange(event) {
    this.setState({
      comments: event.target.value,
    });
  }

  handleClick(event) {
    const value = parseInt(event.target.value, 10);
    this.setState({
      evaluation: value,
    });
  }

  sendEvaluation() {}

  render() {
    const { comments, evaluation } = this.state;
    return (
      <form>
        <label htmlFor="evaluation">
          <input type="radio" value="1" name="evaluation" onClick={ this.handleClick } />
          <input type="radio" value="2" name="evaluation" onClick={ this.handleClick } />
          <input type="radio" value="3" name="evaluation" onClick={ this.handleClick } />
          <input type="radio" value="4" name="evaluation" onClick={ this.handleClick } />
          <input type="radio" value="5" name="evaluation" onClick={ this.handleClick } />
          <p>{ evaluation }</p>
        </label>
        <label htmlFor="comments">
          <textarea
            data-testid="product-detail-evaluation"
            name="comments"
            value={ comments }
            placeholder="Deixe seu comentário!"
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit" onClick={ this.sendEvaluation }>Enviar</button>
      </form>
    );
  }
}

export default EvaluationForm;
