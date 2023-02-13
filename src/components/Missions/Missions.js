import React from 'react';
import Title from '../Title/Title';
import missions from '../../data/missions';
import MissionCard from '../MissionCard/MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    console.log(missions);
    return (
      <div data-testid="missions" className="mission-container">
        <Title
          headline="Missões"
        />
        { missions
          .map((mission) => (<MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
