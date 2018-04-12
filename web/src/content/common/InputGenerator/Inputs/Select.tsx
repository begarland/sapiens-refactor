import * as React from 'react'
import LabelComponent from '../../LabelComponent/LabelComponent'
import { SingleInputTypes } from '../InputGenerator'

interface SelectTypes extends SingleInputTypes {
    onInputChange: (id: string, value: string | boolean) => void;
}

const Select = (props: SelectTypes) => {
    return (
        <div className="inline-input-container">
            {props.label && <LabelComponent label={props.label} additionalClasses={props.additionalLabelClasses}/>}
            <select
                id={props.id}
                className={`select ${props.additionalInputClasses ? props.additionalInputClasses : ''}`}
                value={props.data}
                onChange={(event) => {props.onInputChange(props.id, event.target.value)}}
            >
                {props.selectOptions.map((option: {text: string, value: string | boolean}, optionIndex: number) => {
                    return(
                        <option
                            className={`select-option`}
                            key={optionIndex}
                            value={`${option.value}`}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select