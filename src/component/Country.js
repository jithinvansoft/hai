import React, { Component } from 'react'


class Country extends Component{
    constructor(props){
        super(props)
        
    }


   
    render(){

        return(
            <div>
                <h1>{this.props.country}</h1>
                <ul>{ this.props.member.map( (name) => (<li>{name}</li>) )}</ul>

            </div>

        )
    }
}
export default Country