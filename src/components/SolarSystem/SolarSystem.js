import React from 'react';
import PlanetCard from '../PlanetCard/PlanetCard';
import Title from '../Title/Title';
import planets from '../../data/planets';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title
          headline="Planetas"
        />
        <div className="planets">
          { planets
            .map((planet) => (<PlanetCard
              key={ planet.name }
              planetImage={ planet.image }
              planetName={ planet.name }
            />)) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
