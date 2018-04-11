import * as React from 'react'
import {SingleInputTypes} from '../InputGenerator'
import LabelComponent from '../../LabelComponent/LabelComponent'

interface CheckboxTypes extends SingleInputTypes{
    onInputChange: (id: string, value: boolean) => void;
}

const Checkbox = (props: CheckboxTypes) => {
    return (
        <div className="inline-input-container">
            {props.label && <LabelComponent label={props.label} additionalClasses={props.additionalLabelClasses}/>}
            <input
                id={props.id}
                className={`checkbox ${props.additionalInputClasses ? props.additionalInputClasses : ''}`}
                type={(props.inputType ? props.inputType : 'text')}
                checked={props.data}
                onChange={(event) => {props.onInputChange(props.id, document.getElementById(props.id)["checked"])}}
            />
        </div>
    )
}

export default Checkbox
