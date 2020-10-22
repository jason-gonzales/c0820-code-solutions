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

    if (click < 3) {
      color = 'grey';
    } else if (click >= 3 && click < 6) {
      color = 'navy';
    } else if (click >= 6 && click < 9) {
      color = 'purple';
    } else if (click >= 9 && click < 12) {
      color = 'red';
    } else if (click >= 12 && click < 15) {
      color = 'orange';
    } else if (click >= 15 && click < 18) {
      color = 'yellow';
    } else if (click > 18) {
      color = 'white';
    }

    return (
      <button className={color} onClick={this.handleClick}>
        {'Hot Button'}
      </button>
    );
  }
}

export default HotButton;
