import darkTheme from './theme/dark.js'

const inpGreen = e => { // робить інпут зеленим та дозволяє записати значення в хук
  e.nativeEvent.srcElement.style.border = `solid 1px ${darkTheme.input}`
  e.nativeEvent.srcElement.style.color = darkTheme.input
  return true
}

const inpRed = e => { // робить інпут червоним та забороняє записати значення в хук
  e.nativeEvent.srcElement.style.border = `solid 1px ${darkTheme.hover.link}`
  e.nativeEvent.srcElement.style.color = darkTheme.hover.link
  return false
}

export const name = e => {
  if (e.target.value.search(/\d/) >= 0 | e.target.value.length < 3) return inpRed (e) // Якщо це число або пусто
  else return inpGreen (e) // Якщо букви
}

export const email = e => {
  const v = e.target.value
  if (v.search(/@/) > 2 && v.split('@')[1].search(/\./) > 1 && v.split('@')[1].split('.')[1].length >= 2) return inpGreen (e)
  else return inpRed (e)
}

export const password = e => {
  if (e.target.value.length > 7 && e.target.value.search(/[A-Z]/) >=0 && e.target.value.search(/[a-z]/) >=0) return inpGreen (e)
  else return inpRed (e)
}