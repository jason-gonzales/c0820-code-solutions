import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      time: 0,
    };

    this.time = this.time.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  time() {
    this.setState(prevState => ({
      time: prevState.time +1
    }));
  }

  start() {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }))
    this.timer = setInterval(
      ()=> this.time(),
      1000
      )
  }
  stop() {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }))
    clearInterval(this.timer);
  }

  reset() {
    if(!this.state.isPlaying) {
    this.setState(prevState => ({
      time: 0
    }))
  }
  }
  render() {
    let playIcon = this.state.isPlaying ? 'fas fa-pause' : 'fas fa-play';
    let play = this.state.isPlaying ? this.stop : this.start;
    return (
      <div className = 'container'>
        <div className = 'watch' onClick={this.reset}>
         <div className ='number'>{this.state.time}</div>
        </div>
        <div className ='icon'>
          <i className={playIcon} onClick = {play}></i>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
