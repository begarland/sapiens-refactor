import * as React from 'react'
import InputGenerator, {SingleInputTypes} from '../InputGenerator/InputGenerator'

interface SliderValueInputTypes {
    id: string;
    units: string;
    deltaValue: number;
    onInputChange: (id: string, value: string | boolean) => void;
}

const SliderValueInput = (props: SliderValueInputTypes) => {

    const inputArray: SingleInputTypes [] = [
        {id: props.id, inputType: "number", min: "0", data: props.deltaValue , extraData: props.units, additionalInputClasses: 'slider-label', extraDataAdditionalClasses: 'slider-extra-data'}
    ]

    return (
        <InputGenerator inputArray={inputArray} onInputChange={props.onInputChange}/>
    )
}

export default SliderValueInput