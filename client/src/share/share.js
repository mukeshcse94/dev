import React, { Component } from 'react';
import ReactShareSimplified from './reactShare'
import '../styles/shareStyles.css';

class Share extends Component {
  render() {
    const url = "https://www.github.com";
    const title = "React share simplified";
    return (
      <div className="App">
        <div className="align-inline" style={{ marginTop: '10px' }}>
          <span className="share-title">Share: </span>
          <ReactShareSimplified
            url={url}
            title={title}
            facebook={true}
            facebookClass="iconStyle"
            googlePlus={true}
            googlePlusClass="iconStyle"
            twitter={true}
            twitterClass="iconStyle"
            email={true}
            emailClass="iconStyle"
            whatsapp={true}
            whatsappClass="iconStyle"
            iconSize={32}
            addClass="align-inline"
          />
        </div>
      </div>
    );
  }
}

export default Share;


