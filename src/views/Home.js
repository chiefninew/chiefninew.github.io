import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../style.css';

class Home extends Component {
  render() {
    return (
        <div className="Cover">
          <div className="content">
            <div style={{ height: '375px', width: '200px',zIndex: 0, bottom: '75px', borderWidth: 5, borderColor: 'rgba(2, 130, 119, 0.4)', borderStyle: 'solid', position: 'absolute' }}></div>
            <text style={{ fontSize: '50px', zIndex: 1, fontWeight: '100', marginBottom: '-15px' }}>Hello,</text>
            <text style={{ fontSize: '75px', zIndex: 1, marginBottom: '-5px' }}>I am <text style={{ fontWeight: '900' }}>NINO</text></text>
            <text style={{ fontSize: '25px', zIndex: 1, }}>
              a <text style={{ fontWeight: 'bold' }}>
                full stack
              </text> & <text style={{ fontWeight: 'bold' }}>
                mobile developer
              </text>
            </text>
          </div>
        </div>
    );
  }
}

export default Home;
