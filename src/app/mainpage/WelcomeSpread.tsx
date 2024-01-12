'use client'
import './WelcomeSpread.css'
import AnimatedText from './AnimatedText'
import GetWindowDimensions from '../helperfunctions/GetWindowDimensions';

export default function WelcomeSpread() {
    const { width, height } = GetWindowDimensions();
    console.log(width, height)
    return(
        <div className='welcomeSpreadMain'>
            <img className='welcomeProfileImage' src="/images/anime-profile-pic-transparent.png" alt='Austin!'/>
            <div className='welcomeSpreadText'>
                <p className='welcomeStaticText'>Hi, I&apos;m <p className='name'>&nbsp;Austin&nbsp;</p> :D</p>
                <AnimatedText/>
            </div>

        </div>
    )
}
