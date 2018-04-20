import React from 'react'

import Cookie from './Cookie'
import CookieMonster from './CookieMonster'
import Elmo from './Elmo'
import SongButton from './SongButton'
import {getCookie} from '../api.js'
// import css from '/main.css'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false,
            images: []
        }
        this.startPlaying = this.startPlaying.bind(this)
        this.updateImages = this.updateImages.bind(this)
    }

    componentDidMount() {
        getCookie(this.updateImages)
    }

    updateImages(err, array) {
        this.setState(
           {images: array} 
        )
    }

    startPlaying() {
        this.setState({playing: !this.state.playing})
    }


render() {
    return (
        <div>
            <div className={`${this.state.playing ? 'spinning' : ''} spinner`}> <img className='cookie' src='http://priya-sesame-street-server.herokuapp.com/images/cookie.png'/></div>
            <div> 
                {/* {this.state.images.length !== 0 && <CookieMonster imageUrl={this.state.images[1].imageUrl}/>} */}
                {this.state.images.length !== 0 && <Elmo imageUrl={this.state.images[0].imageUrl}/>} 
            </div>
            <div className={`${this.state.playing ? 'spinning' : ''} spinner`}> 
                <img className='cookie' src='http://priya-sesame-street-server.herokuapp.com/images/cookie.png'/>
            </div>
            <div className={`${this.state.playing ? 'slide-top' : ''} spinner`}>
                {this.state.images.length !== 0 && <CookieMonster imageUrl={this.state.images[1].imageUrl}/>}
                <SongButton playing={this.state.playing}  startPlaying={this.startPlaying} />
            </div>
            
        </div>
    )
}
}