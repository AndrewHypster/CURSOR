import React, {Fragment, useState} from 'react';
import API from './contacts.json';

const Contact = () => {
  const [contacts, setContacts] = useState(API);
  const res = [];

  const icons = (gender) => {
    console.log(gender);
    if (gender === 'male') return 'https://cdn-icons-png.flaticon.com/512/190/190598.png';
    if (gender === 'female') return 'https://cdn-icons-png.flaticon.com/512/201/201634.png';
    if (gender === undefined) return 'https://icon-library.com/images/anonymous-icon/anonymous-icon-3.jpg';
  }

  contacts.forEach(e => {
    res.push(<div className='contact'><p className='name'> <img src={icons(e.gender)} /> {e.firstName} {e.lastName}</p><p className='phone'>{e.phone}</p></div>)
  });

  const handleSearchChange = event => {
    event = event.target.value;
    // За ім'ям
    if(API.filter(e => e.firstName.toUpperCase().includes(event.toUpperCase())).length !== 0)
      setContacts(API.filter(e => e.firstName.toUpperCase().includes(event.toUpperCase())));
    // За прізвищем
    else if(API.filter(e => e.lastName.toUpperCase().includes(event.toUpperCase())).length !== 0)
      setContacts(API.filter(e => e.lastName.toUpperCase().includes(event.toUpperCase())));
    // За телефоном
    else if(API.filter(e => e.phone.includes(event)).length !== 0)
      setContacts(API.filter(e => e.phone.includes(event)));
    
    // CheckButton
    checkButton();
  }

  function checkButton () {
    const query = e => document.querySelector(e).innerHTML;
    if      (query('.checkBox') === 'Ч')  setContacts(contacts.filter((e) => e.gender === 'male'));
    else if (query('.checkBox') === 'Ж')  setContacts(contacts.filter((e) => e.gender === 'female'));
    else if (query('.checkBox') === '--') setContacts(contacts.filter((e) => e.gender === undefined));
  }

  const c = check();
  function* check() {
    while (true) {
      yield 'Ч'; // Чоловіки
      yield 'Ж'; // Жінки
      yield '--'; // Не вказано
      yield 'В'; // Всі
    }
  }
  const checkBox = () => {
    // checkButton();
    document.querySelector('.checkBox').innerHTML = c.next().value;
  }

  return (
    <Fragment>
      <header>
        <p className='title'>Контакти</p>
        <input placeholder='Ввести' onChange={event => handleSearchChange(event)} />
        <p onClick={() => checkBox()} className='checkBox'>В</p>
      </header>
      <div>{res}</div>
    </Fragment>
  );
}

export default Contact;