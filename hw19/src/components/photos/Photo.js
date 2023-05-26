import { Component } from 'react';
import './photo.css';

export default class Photo extends Component {
  constructor (props) {
    super (props)

    this.photo = this.props.photo
    this.style = {
      border: "solid black 10px"
    }
  }

  hover (e) { e._targetInst.return.child.stateNode.style.display='flex' }

  leave (e) { e.target.style.display='none' }

  render () {
    return (
      <div className='photo'>
        <div className='like' onMouseLeave={e => this.leave(e)}>
          <img src='https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png' className='likeIcon' />
          <h1>{this.photo.likes}</h1>
        </div>
        <img src={this.photo.photo} onMouseEnter={e => this.hover(e)} />
      </div>
    )
  }
}