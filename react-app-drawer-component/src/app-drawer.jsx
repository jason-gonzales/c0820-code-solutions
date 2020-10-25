import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false

    };
    this.showPage = this.showPage.bind(this);

  }

  showPage() {
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true
      });
    } else {
      this.setState({
        isOpen: false
      });
    }
  }

  render() {
    if (this.state.isOpen) {
      return (
        <div className='container'>
          <div className='nav'>
            <h3>Menu</h3>
            <ul>
              <li onClick={this.showPage}><a href=''>About</a></li>
              <li onClick={this.showPage}><a href=''>Get Started</a></li>
              <li onClick={this.showPage}><a href=''>Sign In</a></li>
            </ul>
          </div >
          <div className='grey' onClick={this.showPage}>
          </div>
        </div>
      );
    } else {
      return (

        <div className='fas fa-bars' onClick={this.showPage}>
        </div>
      );
    }
  }
}

export default AppDrawer;
