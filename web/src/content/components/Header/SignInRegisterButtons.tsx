import * as React from 'react'
import InlineButtonContainer from '../../common/InlineButtonContainer/InlineButtonContainer'
import { AppTypes } from '../../App'
import { Modals, Paths } from '../../utils/Enums'
import { ButtonComponentTypes } from '../../common/ButtonComponent/ButtonComponent'

interface SignInRegisterButtonsTypes extends AppTypes {}

const SignInRegisterButtons = (props: SignInRegisterButtonsTypes) => {
    const SignInRegisterButtons: ButtonComponentTypes [] = [
        {id: 'sign-in-button', label: 'Sign in', onClick: props.toggleModal(Modals.SignIn)},
        {id: 'register-button', label: 'Register', onClick: props.navigateTo(Paths.Register)},
    ]

    const SignInButton: ButtonComponentTypes [] = [
        {id: 'sign-in-button', label: 'Sign in', onClick: props.toggleModal(Modals.SignIn)},
    ]

    let ButtonContent

    if (props.location.pathname.includes(Paths.Register)){
        ButtonContent = (
            <div id="sign-in-header-buttons-container">
                <InlineButtonContainer buttonArray={SignInButton}/>
            </div>
        )
    } else {
        ButtonContent = (
            <div id="sign-in-register-header-buttons-container">
                <InlineButtonContainer buttonArray={SignInRegisterButtons}/>
            </div>
        )
    }

    return (ButtonContent)
}

export default SignInRegisterButtons