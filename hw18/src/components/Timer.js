import { Component } from "react"
import './timer.css'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime: 1+this.props.time,
      time: this.props.time,
      minutes: 0,
      autostart: this.props.autostart,
      widthLine: 100,
    }
    this.whatIsBtn = 'Start';
    this.mount = true;
    // (() => {if (this.state.autostart) this.button()})();
  }

  componentDidMount () {
    if (this.state.autostart && this.mount) this.button();
    this.mount = false; // бо дід моюнт визивається два рази підряд :(
  }

  button () {
    this.props.onTime(this.whatIsBtn);
    if (this.whatIsBtn === 'Start') this.timerStart();
    else this.timerPause();
  }

  timerStart () {
    this.timer = setInterval(() => {
      this.setState({time: --this.state.time})
      this.toMinutes ();
    if (this.state.time === 0) this.setState({time: this.state.startTime})
      this.whatIsBtn = 'Pause'
    }, this.props.step)
  }

  timerPause () {
    clearInterval(this.timer);
    this.setState ({autostart: false});
    this.whatIsBtn = 'Start';
  }

  toMinutes () {
    const minutes = `${Math.floor(this.state.time/60)}:${this.state.time - Math.floor(this.state.time/60)*60}`
    this.props.onTick(minutes === '0:0'? 'Час вийшов!' : minutes)
    this.timeLine();
    this.setState({minutes: minutes})
  }

  timeLine () {
    const width = (this.state.time*100)/this.props.time
    this.setState({widthLine: width})
  }

  render () {
    return (
      <>
        <div className='timeLine'>
          <div className='timeBlock'><p>{this.state.minutes}</p></div>
          <div className='green' style={{width: this.state.widthLine + '%'}}></div>
        </div>
        <div className='buttons'>
          <p onClick={() => this.button()}>Start/Pause</p>
        </div>
      </>
    )
  }
}