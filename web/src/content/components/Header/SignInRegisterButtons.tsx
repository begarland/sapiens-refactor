import * as React from 'react'
import InlineButtonContainer from '../../common/InlineButtonContainer/InlineButtonContainer'
import { AppTypes } from '../../App'
import { Modals } from '../../utils/Enums'
import { ButtonComponentTypes } from '../../common/ButtonComponent/ButtonComponent'

interface SignInRegisterButtonsTypes extends AppTypes {}

const SignInRegisterButtons = (props: SignInRegisterButtonsTypes) => {
    const SignInRegisterButtons: ButtonComponentTypes [] = [
        {id: 'sign-in-button', label: 'Sign in', onClick: props.toggleModal(Modals.SignIn)},
        {id: 'register-button', label: 'Register', onClick: props.toggleModal(Modals.Register)},
    ]

    return (
        <div id="sign-in-register-header-buttons-container">
            <InlineButtonContainer buttonArray={SignInRegisterButtons}/>
        </div>
    )
}

export default SignInRegisterButtons