// import styles
import styles from './ConfigPanel.scss';
// NPM imports
import React from 'react';
import $ from 'jquery';
// Import React Child Components:
// import { Link } from 'react-router';
    // Icons:
// import {Icon} from 'react-fa'; // Documentation @ https://github.com/andreypopp/react-fa
    // Grid:
// import { Grid, Cell } from 'radium-grid'; // Documentation @ https://github.com/FormidableLabs/radium-grid. Expanded article explaining use case @ https://formidable.com/blog/2016/06/20/radium-grid-a-react-grid-system-injected-with-the-power-of-radium/.
    // Pre-built, styles components in material styles.
// import { Button, Card, Row, Col } from 'react-materialize'; // Documentation @ https://react-materialize.github.io/
// import React child components

export default class ConfigPanel extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={styles.configPanelCont}>
        <AppNameHeadline/>
        <OrientationLabel/>
        <OrientationToggler/>
        <FeaturedImageSelector/>
        <ClientLogoSelector/>
        <ClientPhoneNumberInput/>
        <ClientWebsiteInput/>
        <OfferTextLine1Input/>
        <OfferTextLine2Input/>
        <OfferTextLine3Input/>
        <DisclaimerTextInput/>
        <BeginOfferDateInput/>
        <EndOfferDateInput/>
      </div>
    )
  }
}
