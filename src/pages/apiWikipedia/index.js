import React, { Component } from 'react';

import './style.css';

class SeekerWiki extends Component {

     state = {
          text: '',
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

          if (text === '') {
               this.setState({ content: [] })
          } else {
               const url = `https://${language}.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${text}`;
               fetch(url)
                    .then(res => res.json())
                    .then(data => data.query.search.length === 0 ?
                         alert('this content does not exist') :
                         this.setState({
                              content: data.query.search
                         })
                    ).catch(() => console.log('An error occurred'));
          }
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
                         <p>{this.state.content.length < 1 ? '' : this.state.content.length}</p>
                    </div>
                    <hr />
                    <div className='login-box2'>{this.state.content.map((search, index) => <div key={`article-${index}`}>
                         <a href={encodeURI(`https://en.wikipedia.org/wiki/${search.title}`)}>
                              <h3>{search.title}</h3>
                         </a>
                         <p> {search.snippet.replace(/<[^>]*>?/g, '')} </p>
                         <hr />
                    </div>)}
                    </div>
               </div >
          )
     }
}

export default SeekerWiki;

