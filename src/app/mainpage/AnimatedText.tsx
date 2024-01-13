'use client'
import { TypeAnimation } from "react-type-animation"

export default function AnimatedText () {
    return(
        <div>
            <TypeAnimation
                sequence={[
                    2000,
                    'Software Developer from Brown University',
                    2000,
                    'Software Developer at BAE Systems',
                    2000,
                    'Software Developer from New Hampshire',
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                style={{ fontSize: '2.5rem', display: 'inline-block' }}
                className="animatedText"
                />
        </div>
    )
}