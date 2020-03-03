import React, { Component } from 'react';

import './style.css';

class SeekerWiki extends Component {

     state = {
          text: '',
          content: ''
     }

     handleSearch = (event) => {
          this.setState({
               text: event.target.value
          })
     }

     handleInputSearch = () => {
          fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&formatversion=2&titles=Pope%20Francis', {
               mode: 'no-cors'
          })
               .then(res => res.json()).then(resp => console.log(resp)).catch(err => console.warn(err))
     }
     render() {
          return (
               <div className='login-box'>
                    <div className='login-box1'>
                         <input type='text' onChange={event => this.handleSearch(event)} />
                         <input type='submit' value='Search' onClick={() => this.handleInputSearch()} />
                    </div>
                    <div className='login-box2'><h3 dangerouslySetInnerHTML={{ __html: this.state.content.snippet }}></h3>
                    </div>
               </div>
          )
     }
}

export default SeekerWiki;

