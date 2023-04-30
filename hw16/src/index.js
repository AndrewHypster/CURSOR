import React from 'react';
import ReactDOM from 'react-dom/client';
import Post from './Post';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

root.render(<Post />);