import { Component } from "react";
import { Link } from "react-router-dom";

export default class Forgot extends Component {
  render () {
    return (
      <>
        <h2>forgot password?</h2>
        <h3 onClick={() => {localStorage.clear()}}>нажміть щоб стерти дані</h3>
        <Link to='/'><h2>Перейдіть сюди</h2></Link>
      </>
    )
  }
}