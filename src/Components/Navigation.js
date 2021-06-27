import React from 'react'
import ButtonPrimary from './Button-primary'

const Navigation = () => {
    return (
        <nav className="nav">
<div className="nav__logo">
    <p>spense.</p>
</div>
<div className="nav__center">
    <p className="nav__center--pages">Business</p>
    <p className="nav__center--pages">Pricing</p>
    <p className="nav__center--pages">Features</p>
</div>
<div className="nav__action">
    <p className="nav__action--login">
        Login
    </p>
    <ButtonPrimary />
</div>
        </nav>
    )
}

export default Navigation
