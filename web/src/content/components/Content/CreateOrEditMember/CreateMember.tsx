import * as React from 'react'
import { AppTypes } from '../../../App'
import InputGenerator, { SingleInputTypes } from '../../../common/InputGenerator/InputGenerator'
import InlineButtonContainer from '../../../common/InlineButtonContainer/InlineButtonContainer'
import StepDisplay from '../../../common/StepDisplay/StepDisplay'
import {ButtonComponentTypes} from '../../../common/ButtonComponent/ButtonComponent'
import { ImperialMetricSelectOptions } from '../../../utils/CommonVariables'
import {Units} from '../../../utils/Enums'

interface CreateMemberTypes extends AppTypes {
    device: string;
}

const CreateMember = (props: CreateMemberTypes) => {
    const createMember = props.appState.inputs.createMember

    const stepOneArray: SingleInputTypes [] = [
        {id: `${props.device}_email`, label: 'Email', inputType: 'email', data: createMember.email, additionalLabelClasses: 'create-member-label'},
        {id: `${props.device}_confirmEmail`, label: 'Confirm Email', inputType: 'email', data: createMember.confirmEmail, additionalLabelClasses: 'create-member-label'},
        {id: `${props.device}_password`, label: 'Password', inputType: `${createMember.showPassword ? 'text' : 'password' }`, data: createMember.password, additionalLabelClasses: 'create-member-label'},
        {id: `${props.device}_confirmPassword`, label: 'Confirm Password', inputType: `${createMember.showPassword ? 'text' : 'password' }`, data: createMember.confirmPassword, additionalLabelClasses: 'create-member-label'},
        {id: `${props.device}_showPassword`, label: 'Show Password', inputType: 'checkbox', data: createMember.showPassword, additionalLabelClasses: 'create-member-label'},
    ]

    const stepTwoArray: SingleInputTypes [] = [
        {id: `${props.device}_name`, label: 'Name', inputType: 'text', data: createMember.name, additionalLabelClasses: 'create-member-label'},
        {id: `${props.device}_birthDate`, label: 'Date of Birth', inputType: 'date', data: createMember.birthDate, additionalLabelClasses: 'create-member-label'},
        {id: `${props.device}_gender`, label: 'Gender', inputType: 'range', data: createMember.gender, additionalLabelClasses: 'create-member-label'},
    ]

    const stepThreeArray: SingleInputTypes [] = [
        {id: `${props.device}_metric`, label: 'Units', inputType: 'select', selectOptions: ImperialMetricSelectOptions, data: createMember.metric, additionalLabelClasses: 'create-member-label'},
        {id: `${props.device}_height`, label: 'Height', inputType: 'number', additionalInputClasses: 'height-weight-input', data: createMember.height, extraData: `${createMember.metric ? Units.HeightMetric: Units.HeightImperial}`, additionalLabelClasses: 'create-member-label', extraDataAdditionalClasses:'height-weight-label'},
        {id: `${props.device}_weight`, label: 'Weight', inputType: 'number', additionalInputClasses: 'height-weight-input', data: createMember.weight, extraData: `${createMember.metric ? Units.WeightMetric: Units.WeightMetric}`, additionalLabelClasses: 'create-member-label', extraDataAdditionalClasses:'height-weight-label'},
    ]

    const stepFourArray: SingleInputTypes [] = [
        {id: `${props.device}_targetWeightChange`, inputType: 'range', data: createMember.targetWeightChange, additionalLabelClasses: 'create-member-label'},
    ]

    const stepButtons: ButtonComponentTypes [] = [
        {id: 'back', label: 'Back', onClick: props.stepBack('createMember'), additionalClasses: `${createMember.step === 1 ? 'disabled-button' : '' }`},
        {id: 'next', label: 'Next', onClick: props.stepForward('createMember'), additionalClasses: `${createMember.step === createMember.numSteps ? 'disabled-button' : '' }`},
        {id: 'register', label: 'Register', onClick: props.stepForward('createMember'), additionalClasses: `${createMember.step === createMember.numSteps ? '' : 'disabled-button' }`},
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
            <StepDisplay numSteps={createMember.numSteps} currentStep={createMember.step}/>
            {StepContent}
            <InlineButtonContainer buttonArray={stepButtons}/>
        </div>
    )
}

export default CreateMember