import { React, Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './components/Error.js';
import Friends from './components/Friends.js';
import Friend from './components/Friend.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Photos from './components/photos/Photos.js';
import Publications from './components/publications/Publications.js';

export default class App extends Component {
  render () {
    return (
      <>
        <Header />

        <Routes >
          <Route index element={<Main />} />
          <Route path='*' element={<Error />} />
          <Route path='publications' element={<Publications />} />
          <Route path='photos' element={<Photos />} />
          <Route path='friends' element={<Friends />} />
          <Route path='/friends/:id' element={<Friend />} />
        </Routes>
      </>
    )
  }
}