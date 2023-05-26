import { Component } from 'react';
import posts from '../../json/publications.json';
import Post from './Post';

export default class Publications extends Component {
  constructor (props) {
    super (props)
    this.posts = posts
  }

  render () {
    for (const post of posts) {
      return (
        <div className='wrapperPublic'>
          <div>
            {this.posts.map(post => (<Post post={post} key={post[0].id} />))}
          </div>
        </div>
      )
    }
  }
}