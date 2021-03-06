import * as React from 'react'
import LabelComponent from '../../LabelComponent/LabelComponent'
import { SingleInputTypes } from '../InputGenerator'

interface InputTypes extends SingleInputTypes {
    onInputChange: (id: string, value: string) => void;
}

const Input = (props: InputTypes) => {
    return (
        <div className="inline-input-container">
            {props.label && <LabelComponent label={props.label} additionalClasses={props.additionalLabelClasses}/>}
            <input
                id={props.id}
                className={`input ${props.additionalInputClasses ? props.additionalInputClasses : ''}`}
                type={(props.inputType ? props.inputType : 'text')}
                value={props.data || ''}
                onChange={(event) => {props.onInputChange(props.id, event.target.value)}}
            />
            {props.extraData && <LabelComponent label={props.extraData} hideColon={true} additionalClasses={props.extraDataAdditionalClasses}/>}
        </div>
    )
}

export default Input