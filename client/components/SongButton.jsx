import React from 'react'
import Sound from 'react-sound'


export default class Cookie extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         playing: false
    //     }
    //     this.startPlaying = this.startPlaying.bind(this)
    // }

    // startPlaying() {
    //     this.setState({playing: !this.state.playing})
    // }

    

render() {
    return (
        <div>
          <div className="button">
            <button className="playbutton" onClick={this.props.startPlaying}>Press Play!</button>  
            {this.props.playing && <Sound url="sounds/Cookie.mp3" playStatus={Sound.status.PLAYING} playFromPosition={1}/>}
          </div>
        </div>
    )
  }
}
