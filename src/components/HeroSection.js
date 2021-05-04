import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import './Button.css'

export default function HeroSection() {
    return (
        <div className="hero-container">
            <vidoe src="../video/Police.mp4" autoPlay loop muted />
            <h1> Adventure awaits</h1>
            <p>What are you waiting for</p>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Get Started <i className='far fa-play-circle'/>
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Get Started 
                </Button>
            </div>
        </div>
    )
}
