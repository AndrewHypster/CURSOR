import { Component } from 'react';
import photos from '../../json/photos.json';
import Photo from './Photo';

export default class Photos extends Component {
  constructor () {
    super ()
    this.photos = photos
  }

  render () {
    return (
      <div className='wrapperPhotos'>
        <div className='photos'>
          {this.photos.map(photo => (<Photo photo={photo} />))}
        </div>
      </div>
    )
  }
}