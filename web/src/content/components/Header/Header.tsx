import * as React from 'react'
import {AppTypes} from '../../App'
import IconComponent from '../../common/IconComponent/IconComponent'
import SignInRegisterButtons from './SignInRegisterButtons'
const wizardLogo = '/assets/images/logo.png'

interface HeaderTypes extends AppTypes {

}

const Header = (props: HeaderTypes) => {
    return (
        <div id="header-root" className={`${props.appState.signedIn ? "" : "signed-out-header"}`}>
            <img
                id="wizard-logo"
                className="header-logo-img"
                src={wizardLogo}
                alt="wizard-logo"
            />
            <h2 className="header-logo">Wellness Wizard</h2>
            {props.appState.signedIn && <IconComponent id="header-menu" faIcon="bars" onClick={props.toggleUserActions}/>}
            {!props.appState.signedIn && <SignInRegisterButtons {...props} />}
        </div>
    )
}

export default Header