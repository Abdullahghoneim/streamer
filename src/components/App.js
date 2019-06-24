import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './streams/SteamCreate';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamEdite from './streams/StreamEdite';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className='ui container'>
        <BrowserRouter>
          <Header />
          <Route path='/' component={StreamList} exact />
          <Route path='/stream/new' component={StreamCreate} />
          <Route path='/stream/show' component={StreamShow} />
          <Route path='/stream/edite' component={StreamEdite} />
          <Route path='/stream/delete' component={StreamDelete} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
