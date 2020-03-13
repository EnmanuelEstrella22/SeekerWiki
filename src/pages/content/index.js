import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class WikiContent extends Component {

     render() {
          const { url } = this.props.location.state;
          return (
               <div className='login-box'>
                    <Link to='/' className='button button1'>&#8617;</Link>
                    <div>
                         <iframe src={url} />
                    </div>
               </div>
          )
     }
}

export default WikiContent;
