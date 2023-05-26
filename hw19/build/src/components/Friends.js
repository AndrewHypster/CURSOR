import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import API from '../json/friends.json';
import './friends.css'

const Contact = () => {
  const [contacts, setContacts] = useState(API);
  const res = [];

  const icons = (gender) => {
    if (gender === 'male') return 'https://cdn-icons-png.flaticon.com/512/190/190598.png';
    if (gender === 'female') return 'https://cdn-icons-png.flaticon.com/512/201/201634.png';
    if (gender === undefined) return 'https://icon-library.com/images/anonymous-icon/anonymous-icon-3.jpg';
  }

  contacts.forEach(e => {
    console.log(e.id);
    res.push(<Link to={`${e.id}`}><div className='contact'><p className='name'> <img src={icons(e.gender)} /> {e.firstName} {e.lastName}</p><p className='phone'>{e.phone}</p></div></Link>)
  });

  const handleSearchChange = event => { // Сортує водночас за ім'ям, прізвищем та телефоном
    const newContacts = [];
    API.forEach(contact => {
      const val = Object.values(contact);
      if(val.slice(0,3).join('').toUpperCase().search(event.target.value.toUpperCase()) >=0) newContacts.push(contact);
      // в іф, в значенні контакта обрізає стать, зліплює в строку, букви до верхнього регістру і шукає в ній занчення з інпута
      // це було важко, але радості повні штани :)
    })
    setContacts(newContacts);
    // checkBox();
  }

  const c = check();
  function* check() {
    while (true) {
      yield 'Ч';  // Чоловіки
      yield 'Ж';  // Жінки
      yield '--'; // Не вказано
      yield 'В';  // Всі
    }
  }

  const checkBox = () => {
    const innerBox = document.querySelector('.checkBox');
    innerBox.innerHTML = c.next().value;
    let i = 0;
    const newContacts = [];
    contacts.forEach(contact => newContacts.push(contact));
    let gender;
    if (innerBox.innerHTML === 'Ч') gender = 'male';
    else if (innerBox.innerHTML === 'Ж') gender = 'female';
    else if (innerBox.innerHTML === '--') gender = undefined;
    contacts.forEach((contact) => {
      const val = Object.values(contact);
      if (innerBox.innerHTML !== 'В') {
        if (val[3] !== gender) {
          newContacts.splice(i, 1)
          i--;
        };
      }
      i++;
    });
    setContacts(newContacts);
  }

  return (
    <>
      <div className='wrapperFriends'>
        <div className='friends'>
          <header>
            <p className='title'>Контакти</p>
            <input placeholder='Ввести' onChange={event => handleSearchChange(event)} />
            <p onClick={() => checkBox()} className='checkBox'>В</p>
          </header>
            <div>{res}</div>
        </div>
      </div>
    </>
  );
}

export default Contact;