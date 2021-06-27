import React from 'react'
import Checkmark from '../Components/Checkmark'
import ButtonPrimary from '../Components/Button-primary'
import hero from '../Assets/Hero Image.png'
const Header = () => {
    return (
        <header  className="hero">
<div className="hero__intro">
<h1 className="hero__intro--title">
    Share your unfiltered thoughts. Get paid.
</h1>
<p className="hero__intro--description">
Spense is an open platform for individuals to share their unfiltered thoughts.
<br/> Discuss the topics you love, and get paid for doing just that.
</p>
<ul className="hero__intro--benefits">
    <li className="hero__intro--benefits-list"><div className="hero__intro--benefits-list-line"><Checkmark /> Receive 99% off the earnings.</div></li>
    <li className="hero__intro--benefits-list"><div className="hero__intro--benefits-list-line"><Checkmark /> Get paid via Debit Card, ACH or PayPal.</div></li>
    <li className="hero__intro--benefits-list"><div className="hero__intro--benefits-list-line"><Checkmark /> Withdraw your earnings anytime.</div></li>
</ul>
<div className="hero__intro--form">
    <div className="hero__intro--form-input">
    <input type="email"
    placeholder='john@example.com'
    required
    className="hero__intro--form-input" />

    </div>
    <ButtonPrimary />
</div>

</div>
<div className='hero__img'>
<img src={hero} alt="hero" />
</div>
        </header>
    )
}

export default Header
