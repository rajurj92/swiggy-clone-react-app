import React from "react";
import {useState} from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            userInfo:{
                name:"Dummy rajurj92",
                id: 49182648,
                location:"default",
                avatar_url : ""

            }
        

        }
    }

    async componentDidMount(){
        const res = await fetch("https://api.github.com/users/rajurj92");
        const data = await res.json();
        console.log(data);
        this.setState ({
            userInfo:data
        })

    }
     
    
    render(){
        // const {name, location} = this.props;
        const {name, location, id, avatar_url} = this.state.userInfo;

        return (this.setState  === 0) ? <h1>Loading</h1> :(
            <div><h1>{name}</h1>
            <h2>{location}</h2>
            <h3>{id}</h3>
            <img src={avatar_url} alt="avatar"/>
            {/* <p>{this.state.count}</p> */}
            {/* <button onClick={()=> {
                this.setState({
                count: this.state.count+1
                })
            }}>Update count</button>
             <button onClick={()=> {
                this.setState({
                count: this.state.count-1
                })
            }}>Decrease count</button> */}
            </div>
        )
    }
}

export default User;