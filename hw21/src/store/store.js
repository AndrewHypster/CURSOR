import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import UsersReduser from "./redusers/users.reduser";
import NewPostReducer from "./redusers/newPost.reducer";

const redusers = {
  users: UsersReduser,
  newPost: NewPostReducer
}
const rootReduer = combineReducers(redusers)
const store = createStore(rootReduer, composeWithDevTools())

export default store