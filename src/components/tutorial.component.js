// import React, {Component} from "react";
// import tutorialService from "../services/tutorial.service";

// export default class Tutorial extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             guncellenecekTutorial : {
//                 id : null,
//                 title: "",
//                 description : "",
//                 published : false
//             }
//         }
//     }

//     componentDidMount(){
//         this.tutorialDetails(this.props.match.params.id);
//     }

//     tutorialDetails(id){
//         tutorialService.get(id)
//         .then(tutorialData => {
//             this.setState({
//                 guncellenecekTutorial : tutorialData.data
//             })
//         })
//         .catch(error => {"detail error : " + error} )
//     }

//     render(){
//         return(
//             <div>
                
//             </div>
//         )
//     }
 
// }