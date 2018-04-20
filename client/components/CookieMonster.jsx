import React from 'react'


export default class CookieMonster extends React.Component {

    
    constructor(props) {

        super(props)
        this.state = {
            url: props.imageUrl
        }
    }

    

render() {

    return (
        <div>
            <img className="spinner" src={this.state.url} />
        </div>
    )
  }
}