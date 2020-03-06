import React, { Component } from 'react';

import './style.css';

class SeekerWiki extends Component {

     state = {
          text: '',
          titulo: '',
          content: [],
          language: 'en'
     }

     handleSearch = (event) => {
          this.setState({
               text: event.target.value
          })
     }

     handleSelecte = (event) => {
          this.setState({
               language: event.target.value
          })
     }

     handleInputSearch = () => {
          const { text, language } = this.state;
          const endpoint = `https://${language}.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${text}`;
          fetch(endpoint)
               .then(response => response.json())
               .then(data =>
                    this.setState({
                         content: data.query.search
                    })
               )
               .catch(() => console.log('An error occurred'));
     }
     render() {
          return (
               <div className='login-box'>
                    <div className='login-box1'>
                         <select onChange={event => this.handleSelecte(event)}>
                              <option value='en'>---Select language---</option>
                              <option value='en'>English</option>
                              <option value='es'>Spanish</option>
                         </select>
                         <input type='text' onChange={event => this.handleSearch(event)} />
                         <input type='submit' value='Search' onClick={() => this.handleInputSearch()} />
                    </div>
                    <div className='login-box2'>{this.state.content.map((search, index) => <div key={`article-${index}`}>
                         <a href={encodeURI(`https://en.wikipedia.org/wiki/${search.title}`)}><h3>{search.title}</h3></a>
                         <p> {search.snippet.replace(/<[^>]*>?/g, '')} </p>
                    </div>)}
                    </div>
               </div >
          )
     }
}

export default SeekerWiki;

