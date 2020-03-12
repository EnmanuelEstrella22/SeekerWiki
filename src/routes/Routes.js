//Native Components
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import WikiSearch from '../pages/apiWikipedia';
import WikiContent from '../pages/content';
import ApiUser from '../pages/apiUser';


const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={WikiSearch} />
        <Route path='/WikiContent' render={(props) => <WikiContent {...props} isAuthed={true} />} />
        <Route path='/ApiUser' component={ApiUser} />
      </Switch>
    </div>
  );
};

export default Routes;
