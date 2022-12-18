 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Junior Software Developer" where="Generation Thailand" from="Sep 2022" to="Dec 2022" />
                 <Widecard title="Python Web Programming" where="Department of Skill Development, Ministry of Labour" from="10 Aug 2022" to="17 Aug 2022" />
                 <Widecard title="Mechanical Engineering" where="Mahidol University" from="2004" to="2007" />
             </div>
         );
     }
 }
 
 export default Education;