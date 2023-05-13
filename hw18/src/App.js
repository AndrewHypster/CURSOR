import { Component } from "react";
import Timer from './components/Timer.js';
import './App.css'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      step: '',
      time: '',
      autostart: false,
      startTimer: false
    }
  }

  render () {
    if (this.state.step !== '' && this.state.time !== '' && this.state.startTimer) return (
      <Timer time={this.state.time} 
             autostart={this.state.autostart} 
             step={this.state.step} 
             onTick={time => console.log("Залишилосьчасу: " + time)}
             onTime={timeLeft => console.log(timeLeft === 'Start'? 'Таймер запущено!' : 'Таймер на паузі!')}
      />
    )
    else return (
      <>
        <div className='inputs'>
          <input type='number' placeholder='Start timer' onInput={v => this.setState({time: v.target.valueAsNumber})}></input>
          <input type='number' placeholder='Step' onInput={v => this.setState({step: v.target.valueAsNumber})}></input>
        </div>
        <div className='buttons'>
          <p onClick={() => this.setState({autostart: !this.state.autostart})}>Autostart {this.state.autostart? `✔️`:'❌'}</p>
          <p onClick={() => this.setState({startTimer: !this.state.startTimer})}>startTimer</p>
        </div>
      </>
    )
  }
}