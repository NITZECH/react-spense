import React from 'react'
import texteditor from '../Assets/Text Editor.png'
import ButtonSecondary from '../Components/Button-secondary'
const Feature = () => {
    return (
        <section  className='feature'>
            <div className="feature__image">
                <img src={texteditor} alt="text editor" />
            </div>
            <div className="feature__info">
            <h2 className="about__info--header">
                A text editor like no other.
            </h2>
            <p className="about__info--description">
                Our text editor pulls you into focuse mode with it's simplistic design and usability so you can put out your best writings.
            </p>
            <ButtonSecondary text='Text Editor Live Demo' />
            </div>
            
        </section>
    )
}

export default Feature
