import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './components/contact.js';
import AddContact from './components/add-contact.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Fragment>
    <Contact />
    <AddContact />
  </Fragment>
);
