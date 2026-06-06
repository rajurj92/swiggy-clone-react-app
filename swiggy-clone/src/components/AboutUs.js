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

            <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
           <User/> 
           </div>
           
        )
    }

}
export default AboutUs;