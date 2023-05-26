import { Component } from "react";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render () {
    return (
      <>
        <h2>Error</h2>
        <Link to='/'><h2>Перейдіть сюди</h2></Link>
      </>
    )
  }
}