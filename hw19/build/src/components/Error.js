import { Component } from 'react';
import './error.css'

export default class Error extends Component {
  constructor () {
    super ()
  }

  render () {
    return (
      <div className='wrapperError'>
        <p className='error'>Error 404</p>
      </div>
    )
  }
}