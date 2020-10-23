import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: 0 };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState => ({
      click: prevState.click + 1
    }));
  }

  render() {
    const click = this.state.click;
    let color = '';

    switch (true) {
      case click > 18:
        color = 'white';
        break;
      case click > 14:
        color = 'yellow';
        break;
      case click > 11:
        color = 'orange';
        break;
      case click > 8:
        color = 'red';
        break;
      case click > 5:
        color = 'purple';
        break;
      case click > 2:
        color = 'navy';
        break;
      default:
        color = 'grey';
    }

    return (
      <button className={color} onClick={this.handleClick}>
        {'Hot Button'}
      </button>
    );
  }
}

export default HotButton;
