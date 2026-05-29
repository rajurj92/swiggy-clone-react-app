import React from "react";
import {useState} from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count:0,

        }
    }
    render(){
        const {name, location} = this.props;

        return(
            <div><h1>User</h1>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <p>{this.state.count}</p>
            <button onClick={()=> {
                this.setState({
                count: this.state.count+1
                })
            }}>Update count</button>
             <button onClick={()=> {
                this.setState({
                count: this.state.count-1
                })
            }}>Decrease count</button>
            </div>
        )
    }
}

export default User;