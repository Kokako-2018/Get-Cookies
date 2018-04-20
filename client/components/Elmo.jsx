import React from 'react'


export default class Elmo extends React.Component {

    
    constructor(props) {

        super(props)
        this.state = {
            url: props.imageUrl
        }
    }

    

render() {

    return (
        <div>
            <img className="elmo" src={this.state.url} />
        </div>
    )
  }
}