import * as React from 'react'
import { AppTypes } from '../../../App'
import InputGenerator, { SingleInputTypes } from '../../../common/InputGenerator/InputGenerator'
import InlineButtonContainer from '../../../common/InlineButtonContainer/InlineButtonContainer'
import StepDisplay from '../../../common/StepDisplay/StepDisplay'
import {ButtonComponentTypes} from '../../../common/ButtonComponent/ButtonComponent'
import { ImperialMetricSelectOptions } from '../../../utils/CommonVariables'

interface CreateMemberTypes extends AppTypes {
    device: string;
}

const CreateMember = (props: CreateMemberTypes) => {
    const createMember = props.appState.inputs.createMember

    const stepOneArray: SingleInputTypes [] = [
        {id: `${props.device}-createMemberEmail`, label: 'Email', inputType: 'email', data: createMember.email,},
        {id: `${props.device}-createMemberConfirmEmail`, label: 'Confirm Email', inputType: 'email', data: createMember.confirmEmail,},
        {id: `${props.device}-createMemberPassword`, label: 'Password', inputType: 'password', data: createMember.password,},
        {id: `${props.device}-createMemberConfirmPassword`, label: 'Confirm Password', inputType: 'password', data: createMember.confirmPassword,},
        {id: `${props.device}-showPassword`, label: 'Show Password', inputType: 'checkbox', data: createMember.showPassword,},
    ]

    const stepTwoArray: SingleInputTypes [] = [
        {id: `${props.device}-name`, label: 'Name', inputType: 'text', data: createMember.name,},
        {id: `${props.device}-birthDate`, label: 'Date of Birth', inputType: 'date', data: createMember.birthDate},
        {id: `${props.device}-gender`, label: 'Gender', inputType: 'range', data: createMember.gender}
    ]

    const stepThreeArray: SingleInputTypes [] = [
        {id: `${props.device}-height`, label: 'Height', inputType: 'number', additionalInputClasses: 'height-weight-input', data: createMember.height},
        {id: `${props.device}-weight`, label: 'Weight', inputType: 'number', additionalInputClasses: 'height-weight-input', data: createMember.weight},
        {id: `${props.device}-metric`, inputType: 'select', selectOptions: ImperialMetricSelectOptions, data: createMember.metric}
    ]

    const stepFourArray: SingleInputTypes [] = [
        {id: `${props.device}-targetWeightChange`, inputType: 'range', data: createMember.targetWeightChange}
    ]

    const stepButtons: ButtonComponentTypes [] = [
        {id: 'back', label: 'Back', onClick: props.stepBack('createMember'), additionalClasses: `${createMember.step === 1 ? 'disabled-button' : '' }`},
        {id: 'next', label: 'Next', onClick: props.stepBack('createMember'), additionalClasses: `${createMember.step === 4 ? 'disabled-button' : '' }`},
    ]


    let StepContent

    if (createMember.step === 1) {
        StepContent = (
            <InputGenerator inputArray={stepOneArray} onInputChange={props.inputChange('createMember')}/>
        )
    } else if (createMember.step === 2) {
        StepContent = (
            <InputGenerator inputArray={stepTwoArray} onInputChange={props.inputChange('createMember')}/>
        )
    } else if (createMember.step === 3) {
        StepContent = (
            <InputGenerator inputArray={stepThreeArray} onInputChange={props.inputChange('createMember')}/>
        )
    } else {
        StepContent = (
            <InputGenerator inputArray={stepFourArray} onInputChange={props.inputChange('createMember')}/>

        )
    }

    return (
        <div id="create-member-display-container" className="member-details">
            <StepDisplay numSteps={4} currentStep={createMember.step}/>
            {StepContent}
            <InlineButtonContainer buttonArray={stepButtons}/>
        </div>
    )
}

export default CreateMember