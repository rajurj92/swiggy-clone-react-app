// function AboutUs(){
//     return(
//         <div><h1>AboutUs</h1></div>
//     )
// }
// export default AboutUs;
import React from "react";
import User from "./User";

class AboutUs extends React.Component {
   
    render(){
        return(
           <div><h1>AboutUs</h1>
           <User name = {"Akshay Saini"} location={"Hyderabad"}/>
           </div>
           
        )
    }

}
export default AboutUs;