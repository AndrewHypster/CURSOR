const checkProps = (...props) => props.some(e => e==='null')? false : true

const signUp = (fName, lName, email, pass, check, checkRemem) => {
  if (checkProps (fName, lName, email, pass) && localStorage.getItem('user') === null) {  // кидаю дані
    localStorage.setItem('user', JSON.stringify({
      firstName: fName,
      lastName: lName,
      email: email,
      password: pass,
      receiveInspiration: `${check}`,
      remember: checkRemem
    }))
    alert('Ви успішно зареєстровані')
  } else alert('Невірно введені дані, або ви вже зареєстровані')
}

const signIn = (...props) => { // беру дані
  const user = localStorage.getItem('user')
  console.log(props[3]);
  if (user === null) alert('Ви ще не зареєстровані')
  else {
    if (props[3] === true) { // запамятати користувача
      const userObj = JSON.parse(user)
      userObj.remember = true
      localStorage.setItem('user', JSON.stringify(userObj))
    } else {
      const userObj = JSON.parse(user)
      userObj.remember = false
      localStorage.setItem('user', JSON.stringify(userObj))
    }

    if (JSON.parse(user).email === props[0] && JSON.parse(user).password === props[1]) alert('Ви успішно ввійшли')
    else alert('Користувача не знайдено')
  }
}

export const ClickBtn = (fName, lName, email, pass, check, checkRemem, btn) => { // міг би зробити ...props, але би заплутався
  if (btn === 'SIGN UP') signUp (fName, lName, email, pass, check, checkRemem);
  else if (btn === 'SIGN IN') signIn (email, pass, check, checkRemem);
}

export const ClickInp = e => {
  const user = localStorage.getItem('user')
  if (user !== null && JSON.parse(user).remember){
    if (e.target.id === 'email') e.target.value = JSON.parse(user).email
    else if (e.target.id === 'password') e.target.value = JSON.parse(user).password
  }
}