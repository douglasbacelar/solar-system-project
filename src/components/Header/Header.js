import React from 'react';
import logo from './logo-sistema-solar.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ logo } alt="Logo Sistema Solar" />
      </header>
    );
  }
}

export default Header;
