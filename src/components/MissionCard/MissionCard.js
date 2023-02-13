import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-name">
          🛰️
          {' '}
          {name}
          {' '}
        </p>
        <hr />
        <section className="mission-info">
          <p data-testid="mission-year">
            🗓️
            {' '}
            {year}
            {' '}
          </p>
          <p data-testid="mission-country">
            📌
            {' '}
            {country}
            {' '}
          </p>
          <p data-testid="mission-destination">
            🚀
            {' '}
            {destination}
            {' '}
          </p>
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
