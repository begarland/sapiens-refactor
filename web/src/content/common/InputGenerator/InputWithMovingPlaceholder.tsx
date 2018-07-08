import * as React from 'react'
import Label from '../Label/Label'
import { SingleInputTypes } from './InputGenerator'
import Input from './Inputs/Input'

interface InputWithMovingPlaceholderTypes extends SingleInputTypes {
    onInputChange: (id: string, value: string) => void;
}

const InputWithMovingPlaceholder = (props: InputWithMovingPlaceholderTypes) => {
    return (
        <div className="input-with-moving-placeholder">
            <Input onInputChange={props.onInputChange} id={props.id} data={props.data || ''}/>
            <Label label={props.label} additionalClasses='moving-placeholder' hideColon={true}/>
        </div>
    )
}

export default InputWithMovingPlaceholder