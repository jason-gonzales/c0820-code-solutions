import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false,
      iconClicked: false

    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    this.setState({
      iconClicked: true
    });
  }

  hideMenu() {
    this.setState({
      menuClicked: true,
      iconClicked: false
    });
  }

  render() {
    if (this.state.iconClicked) {
      return (
        <div className='container'>
          <div className='nav'>
            <h3>Menu</h3>
            <ul>
              <li onClick={this.hideMenu}><a href=''>About</a></li>
              <li onClick={this.hideMenu}><a href=''>Get Started</a></li>
              <li onClick={this.hideMenu}><a href=''>Sign In</a></li>
            </ul>
          </div >
          <div className='grey' onClick={this.hideMenu}>
          </div>
        </div>
      );
    } else if (this.state.menuClicked) {
      return (

        <div className='fas fa-bars' onClick={this.showMenu}>
        </div>
      );
    }
    return (

      <div className='fas fa-bars' onClick={this.showMenu}>
      </div>
    );
  }
}

export default AppDrawer;
