import * as React from 'react'
import {AppTypes} from '../../../../App'
import InputGenerator, {SingleInputTypes} from '../../../../common/InputGenerator/InputGenerator'

interface SignInModalContentTypes extends AppTypes {}

const SignInModalContent = (props: SignInModalContentTypes) => {
    const signIn = props.appState.inputs.signIn

    const inputArray: SingleInputTypes [] = [
        {id: 'email', label: 'Email', inputType: 'email', data: signIn.email, additionalLabelClasses: 'sign-in-label'},
        {id: 'password', label: 'Password', inputType: `${signIn.showPassword ? 'text' : 'password' }`, data: signIn.password, additionalLabelClasses: 'sign-in-label'},
        {id: 'showPassword', label: 'Show Password', inputType: 'checkbox', data: signIn.showPassword, additionalLabelClasses: 'sign-in-label'},
    ]

    return (
        <div id="sign-in-modal-content" className="modal-content">
            <InputGenerator inputArray={inputArray} onInputChange={props.inputChange('signIn')}/>
        </div>
    )
}

export default SignInModalContent