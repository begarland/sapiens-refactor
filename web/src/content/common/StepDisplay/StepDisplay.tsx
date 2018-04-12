import * as React from 'react'
import LabelComponent from '../LabelComponent/LabelComponent'

interface StepDisplayTypes {
    numSteps: number;
    currentStep: number;
}

const StepDisplay = (props: StepDisplayTypes) => {
    const step = (stepNumber, currentStep, index) => {
        return (
            <div key={index} className={`step-display ${currentStep ? 'current-step' : ''}`}>
                <LabelComponent label={stepNumber} hideColon={true} additionalClasses="step-label"/>
            </div>
        )
    }

    const steps = []
    for (let i = 0; i < props.numSteps; i++){
        let isCurrentStep = (props.currentStep === i+1)
        steps.push(step(i+1, isCurrentStep, i))
    }

    return (
        <div id="step-display-container">
            {steps}
        </div>
    )
}

export default StepDisplay