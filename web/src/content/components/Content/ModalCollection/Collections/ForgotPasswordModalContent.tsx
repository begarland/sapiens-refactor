import * as React from 'react'
import {AppTypes} from '../../../../App'
import InputGenerator, {SingleInputTypes} from '../../../../common/InputGenerator/InputGenerator'
import LabelComponent from '../../../../common/LabelComponent/LabelComponent'
import Spinner from '../../../../common/IconComponent/Spinner'


interface ForgotPasswordModalContentTypes extends AppTypes {

}

const ForgotPasswordModalContent = (props: ForgotPasswordModalContentTypes) => {
    const forgotPassword = props.appState.inputs.forgotPassword
    const spinner = props.appState.spinners.forgotPassword
    const inputArray: SingleInputTypes [] = [{id: 'email', label: 'Email', inputType: 'email', data: forgotPassword.email, additionalLabelClasses: 'sign-in-label'},]

    let Content

    if (forgotPassword.emailExistsInDB === false) {
        Content = (
            <div id="forgot-password-modal-content" className="modal-content">
                <LabelComponent additionalClasses="full-width-label modal-top-line" label="This email does not exist in our database." hideColon={true}/>
                <LabelComponent additionalClasses="full-width-label" label="Enter the email you registered with to receive a password reset email." hideColon={true}/>
                <InputGenerator inputArray={inputArray} onInputChange={props.inputChange('forgotPassword')}/>
            </div>
        )
    } else if (spinner) {
        Content = (
            <div id="forgot-password-modal-content" className="modal-content">
                <Spinner/>
            </div>
        )
    } else {
        Content = (
            <div id="forgot-password-modal-content" className="modal-content">
                <LabelComponent additionalClasses="full-width-label" label="Enter the email you registered with to receive a password reset email." hideColon={true}/>
                <InputGenerator inputArray={inputArray} onInputChange={props.inputChange('forgotPassword')}/>
            </div>
        )
    }



    return Content
}

export default ForgotPasswordModalContent