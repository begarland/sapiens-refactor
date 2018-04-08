import * as React from 'react'
import {AppTypes} from '../../App'
import UserActions from '../Content/UserActions/UserActions'
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
            <span
                id="header-menu-button"
                onClick={props.toggleUserActions}
            >
                <i
                    id="header-icon"
                    className="fas fa-bars"
                />
            </span>
        </div>
    )
}

export default Header