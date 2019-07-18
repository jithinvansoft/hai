import React, { Component } from 'react';
class Add extends Component{
    constructor(props){
        super(props)
       this.state={
           
        }
        this.handleChange=this.handleChange.bind(this)
        this.submit=this.submit.bind(this)

    }
    handleChange(event){
        const val=event.target.value
        const country=event.target.name
        this.setState({
            [country]:val
        })
            
    }
    submit(event){

        this.props.onAdd (this.state.country, this.state.member)
        event.preventDefault()
    }

    

render(){

    return(
        <div>
        <form onSubmit={this.submit}>  
            <label>COUNTRY :
            <input type="text" name="country" value={this.state.country} onChange={this.handleChange}></input></label>  
            <label>MEMBER : 
            <input type="text" name="member"  value={this.state.member} onChange={this.handleChange}></input></label> 
            <input type="submit" value="add"></input>
        </form>
            
        </div>
    );

}


}
export default Add

  
   