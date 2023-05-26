import { Component } from 'react';
import photos from '../json/main.json';
import './main.css';

export default class Main extends Component {
  constructor () {
    super ()
    this.photos = photos
    this.res = []
    this.i = 1

    for (const photo of this.photos) {
      if (this.i%2===0) {
        this.res.push(
        <div className={`${this.i%2===1? 'mainRight':'mainLeft'}`} key={this.i}>
          <img src={photo.photo} alt='img' />
          <div className='photoText'>
            <p>{photo.title}</p>
            <p className='mainParagraph'>{photo.paragraph}</p>
          </div>
        </div>)
      } else {
        this.res.push(
        <div className={`${this.i%2===1? 'mainRight':'mainLeft'}`} key={this.i}>
          <div className='photoText'>
            <p>{photo.title}</p>
            <p className='mainParagraph'>{photo.paragraph}</p>
          </div>
          <img src={photo.photo} alt='img' />
        </div>)
      }
      this.i++
    }
  }

  render(){
    return (
      <div className='wrapper'>
        {this.res}
      </div>
    )
  }
}