/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Email
          <input type ="email" value={this.state.email} onChange=
            {this.handleChange}/>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.getElementById('root')
);
