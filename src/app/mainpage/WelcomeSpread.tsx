'use client'
import './WelcomeSpread.css'
import AnimatedText from './AnimatedText'
import GetWindowDimensions from '../helperfunctions/GetWindowDimensions';
import { Icon } from '@iconify/react';


export default function WelcomeSpread() {
    const { width, height } = GetWindowDimensions();
    console.log(width, height);
    let isPortrait = false;
    let iconScaling = "3vh";
    if(width !== undefined && height !== undefined){
        isPortrait = width < height
        console.log(isPortrait)
        if(isPortrait){
            iconScaling = "3vw"
        }
    }

    return(
        <div className='welcomeSpreadMain'>
            <img className='welcomeProfileImage' src="/phansite/images/anime-profile-pic-transparent.png" alt='Austin!'/>
            <div className='welcomeSpreadText'>
                <div>
                    <p className='welcomeStaticText'>Hello, my name is</p>
                    <p className='welcomeName'>Austin Phan</p>
                    <AnimatedText/>
                    <div className='socialIconContainer'>
                        <a className='socialIcons' href='https://www.linkedin.com/in/austin-d-phan/' target='_blank'>
                            <Icon icon="line-md:linkedin" height={iconScaling}/>
                        </a>
                        <a className='socialIcons' href='https://github.com/Phan-2k2' target='_blank'>
                            <Icon icon="line-md:github-loop" height={iconScaling}/>
                        </a>
                        <a className='socialIcons' href='https://www.instagram.com/mr._phantaaastic/' target='_blank'>
                            <Icon icon="line-md:instagram" height={iconScaling}/>
                        </a>
                    </div>
                </div>
                <div className='downIcon'>
                    <Icon icon="ep:arrow-down" height={iconScaling}/>
                </div>
            </div>
        </div>
    )
}
