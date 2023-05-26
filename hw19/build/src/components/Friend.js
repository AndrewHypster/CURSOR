import React from 'react';
import { useParams } from 'react-router-dom';
import friends from '../json/friends.json';
import './friend.css';

export default function Friend () {

  let { id } = useParams();
  console.log(friends[id]);

  const icon = (gender) => {
    if (gender === 'male') return 'https://cdn-icons-png.flaticon.com/512/190/190598.png';
    if (gender === 'female') return 'https://cdn-icons-png.flaticon.com/512/201/201634.png';
    if (gender === undefined) return 'https://icon-library.com/images/anonymous-icon/anonymous-icon-3.jpg';
  }

  return (
    <div className='wrapperFriend'>
      <div className='friend'>
        <img src={icon(friends[id].gender)} />
        <h2>{friends[id].firstName} {friends[id].lastName}</h2>
        <h3>{friends[id].phone}</h3>
      </div>
    </div>
  )
}