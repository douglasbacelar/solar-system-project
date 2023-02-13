import React from 'react';
import logo from './logo-sistema-solar.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Sistema Solar</h1>
        <img src={ logo } alt="Logo Sistema Solar" />
      </header>
    );
  }
}

export default Header;
