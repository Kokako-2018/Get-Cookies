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

        }
    }


render() {
    return (
        <div>
            <h1>hello</h1>
            <div className='spinner'> <img class='cookie' src='http://priya-sesame-street-server.herokuapp.com/images/cookie.png'/></div>
        </div>
    )
}
}