import React from 'react';
import { AppBar, Card, MuiThemeProvider, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Badges from './Badges';
import Rankings from './Rankings';
import CompetitionSelect from '../Competition/CompetitionSelect';
import ReactTelInput from 'react-telephone-input/lib/withStyles';
import axios from 'axios';
import db from '../../../../dbTools';

function handleInputChange(telNumber, selectedCountry) {
  if (telNumber.length === 17) {
    axios.get('/getAllUsers').then((foundusers) => {

      const matchedUser = foundusers.data.filter((user) => {
        return user.username === window.user
      });
      
    });
  }
}


function handleInputBlur(telNumber, selectedCountry) {
  console.log('Focus off the ReactTelephoneInput component. Tel number entered is: ', telNumber, ' selected country is: ', selectedCountry);
}

const DashBoard = props => (
  <MuiThemeProvider >
    <div className="Dashboard">
      <AppBar showMenuIconButton={false} title="Dashboard" style={{ backgroundColor: '#4FB5DB' }} />
      <Card>
        <div>
          <CompetitionSelect />
          <Link to="CreateCompetition">
            <RaisedButton fullWidth label="Create A Challenge" />
          </Link>
          <div style={{ textAlign: 'center' }}>Welcome {props.user.slice(0, props.user.indexOf('@'))}!</div>
          <div className="DashBoardFlex">
            <Badges />
            <Rankings />
          </div>
        </div>
      </Card>
      <div style={{ textAlign: 'center' }}>
        Enter Phone Number to receive text from BattleCode!
      <ReactTelInput
          style={{ position: 'center' }}
          defaultCountry="us"
          flagsImagePath='/path/to/images/flags.png'
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  </MuiThemeProvider >
);

DashBoard.propTypes = {
  user: PropTypes.string.isRequired,
};

export default DashBoard;
