'use client'
import { TypeAnimation } from "react-type-animation"

export default function AnimatedText () {
    return(
        <div>
            <TypeAnimation
                sequence={[
                    1000,
                    'I Write Code', // Types 'One'
                    1000, // Waits 1s
                    'I Develop Software', // Deletes 'One' and types 'Two'
                    1000, // Waits 2s
                    'I Am Very Confused', // Types 'Three' without deleting 'Two'
                    () => {
                    console.log('Sequence completed');
                    },
                ]}
                wrapper="span"
                cursor={true}
                repeat={1}
                style={{ fontSize: '2em', display: 'inline-block' }}
                />
        </div>
    )
}