import * as React from 'react'
import {AppTypes} from '../../../../App'
import InputGenerator, {SingleInputTypes} from '../../../../common/InputGenerator/InputGenerator'
import {Units} from '../../../../utils/Enums'

interface WeighInModalContentTypes extends AppTypes {}

const WeighInModalContent = (props: WeighInModalContentTypes) => {
    const weighIn = props.appState.inputs.weighIn
    const inputArray: SingleInputTypes [] = [
        {
            id: 'weight',
            label: 'Current Weight',
            inputType: 'number',
            data: weighIn.weight,
            additionalLabelClasses: 'weigh-in-label',
            additionalInputClasses: 'weigh-in-input',
            extraData: `${props.memberState.metric ? Units.WeightMetric : Units.WeightImperial}`,
            extraDataAdditionalClasses: 'weigh-in-extra-data'
        },]

    return (
        <div id="weigh-in-modal-content" className="modal-content">
            <InputGenerator inputArray={inputArray} onInputChange={props.inputChange('weighIn')}/>
        </div>
    )
}

export default WeighInModalContent