import React from 'react'

export default class Cookie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


render() {
    return (
        <div>
            <img src={props.image}/>
        </div>
    )
  }
}