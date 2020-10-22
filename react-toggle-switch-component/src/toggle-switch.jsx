import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    const toggle = this.state.isClicked;
    return (
      <div onClick={this.handleClick}>
        <div className={toggle ? 'switch-on' : 'switch-off'}>
          <div className={toggle ? 'ball-on' : 'ball-off'}>
          </div>
        </div>
        <div className={'text'}>
          {toggle ? 'ON' : 'OFF'}
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;
