import React, { Component } from 'react'

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'myskills': ['HTML', 'CSS', 'JavaScript', 'Python', 'ReactJS', 'NodeJS & Express', 'MongoDB', 'SQL']
        }
    }

    render() {
        return (

            <div className="condiv skills">
                <div>
                    <h1 className="subtopic">My Skills</h1>
                    <ul>
                        {this.state.myskills.map((value) => {
                            return <li>{value}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h1 className='myproject'>My project</h1>
                    <div className='linktoproject'>
                        <div className='jamming'>
                            <a href="https://github.com/Teerapathtoon" target="_blank"><img src='#'  alt='jamming'></img></a>
                        </div>
                        <div className='etc'>
                        <a href="https://github.com/Teerapathtoon" target="_blank"><img src='#'  alt='etc'></img></a>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Skills;
