import React, { Component } from 'react';
import profilepic from '../img/profilepic.jpg';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingEffect text={['My name is Teerapath  Keawratana', 'I am a Software Developer']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;