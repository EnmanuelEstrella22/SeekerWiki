import React, { Component } from 'react';

import './style.css';
import { Link } from 'react-router-dom';

class WikiContent extends Component {

     render() {
          const { url } = this.props.location.state;
          return (
               <div className='login-box'>
                    <Link to='/'>Home</Link>
                    <iframe src={url} />
               </div>
          )
     }

}

export default WikiContent;