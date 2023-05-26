import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default class Header extends Component {
  render(){
    return (
      <header className='mainHeader'>
        <nav>
          <ul>
            <li><Link to='/' >Main</Link></li>
            <li><Link to='/publications' >Publications</Link></li>
          </ul>

          <div className='title'>
            <h2 className='text'>HW19</h2>
          </div>

          <ul>
            <li><Link to='/photos' >Photos</Link></li>
            <li><Link to='/friends' >Friends</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}