import React from 'react'

import Cookie from './Cookie'
import CookieMonster from './CookieMonster'
import SongButton from './SongButton'
// import api from './api.js'
// import css from '/main.css'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false
        }
        this.startPlaying = this.startPlaying.bind(this)
    }

    startPlaying() {
        this.setState({playing: !this.state.playing})
    }


render() {
    return (
        <div>
            <div className={`${this.state.playing ? 'spinning' : ''} spinner`}> <img className='cookie' src='http://priya-sesame-street-server.herokuapp.com/images/cookie.png'/></div>
            <div> 
                <SongButton playing={this.state.playing}  startPlaying={this.startPlaying} />
            </div>
        </div>
    )
}
}