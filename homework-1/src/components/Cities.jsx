//! koga pravime klasni komponenti react e mandatory da se uveze
import React from 'react';

import './../css/Cities.css'

export class Cities extends React.Component{
  render() {
    return(
      <div className='city-container'>
        <div>
          <h3>Amsterdam</h3>
          <img src="./../images/amsterdam.jpg"/>
        </div>
        <div>
          <h3>London</h3>
          <img src="./../images/london.jpg"/>
        </div>
        <div>
          <h3>Rome</h3>
          <img src="./../images/rome.jpg"/>
        </div>
        <div>
          <h3>Singapore</h3>
          <img src="./../images/singapore.jpg"/>
        </div>
      </div>
    )
  };
};