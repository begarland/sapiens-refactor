import * as React from 'react'
import {AppTypes} from '../../App'
import IconComponent from '../../common/IconComponent/IconComponent'
const wizardLogo = '/assets/images/logo.png'

interface HeaderTypes extends AppTypes {

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
            <IconComponent id="header-menu" faIcon="bars" onClick={props.toggleUserActions}/>


        </div>
    )
}

export default Header