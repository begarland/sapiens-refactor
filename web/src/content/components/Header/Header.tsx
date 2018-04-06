import * as React from 'react'
const wizardLogo = './assets/images/logo.png'

interface HeaderTypes {

}

const Header = (props: HeaderTypes) => {
    return (
        <div id="header-root">
            <img
                id="wizard-logo"
                className="header-logo-img"
                src={wizardLogo}
                alt="wizard-logo"
            />
            <h2 className="header-logo">Wellness Wizard</h2>
        </div>
    )
}

export default Header