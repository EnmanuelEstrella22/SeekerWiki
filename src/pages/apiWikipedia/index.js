import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class WikiSearch extends Component {

     state = {
          query: '',
          content: [],
          language: 'en'
     }
     componentDidMount() {
          this.setState({
               content: this.getDataLocalStorage()[0],
               query: this.getDataLocalStorage()[1]
          })
     }

     handleSearch = (event) => (
          this.setState({
               query: event.target.value
          })
     );

     handleSelecte = (event) => (
          this.setState({
               language: event.target.value
          })
     );

     addDataLocalStorage = (data, query) => {
          let d = [];
          d.push(data);
          d.push(query);
          localStorage.setItem('Data', JSON.stringify(d));
     }

     getDataLocalStorage = () => (
          JSON.parse(localStorage.getItem('Data')) || [[], '']
     );

     handleSubmitSearch = () => {
          const { query, language } = this.state;
          const url = `https://${language}.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${query}`;
          fetch(url)
               .then(res => res.json())
               .then(data => data.query.search.length === 0 ?
                    alert('this content does not exist') : (
                         this.setState({
                              content: data.query.search
                         }), this.addDataLocalStorage(data.query.search, query))
               ).catch(() => console.log('An error occurred'));
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
                         <input type='text' value={this.state.query} onChange={event => this.handleSearch(event)} />
                         <input type='submit' value='&#x2315;' onClick={() => this.handleSubmitSearch()} />
                         <p>{this.state.content.length || ''}</p>
                    </div>
                    <hr />
                    <div className='login-box2'>{this.state.content.map((search, index) => <div key={`article-${index}`}>
                         <Link to={{
                              pathname: '/WikiContent',
                              state: {
                                   url: encodeURI(`https://en.wikipedia.org/wiki/${search.title}`)
                              }
                         }}><h3>{search.title}</h3></Link>
                         <p> {search.snippet.replace(/<[^>]*>?/g, '')} </p>
                         <hr />
                    </div>)}
                    </div>
               </div >
          )
     }
}

export default WikiSearch;
