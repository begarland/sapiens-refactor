import * as React from 'react'
import LabelComponent from '../../LabelComponent/LabelComponent'
import { SingleInputTypes } from '../InputGenerator'

interface SelectTypes extends SingleInputTypes {
    onInputChange: (id: string, value: string | boolean) => void;
}

const Select = (props: SelectTypes) => {
    let value = props.data
    if (typeof props.selectOptions[0].value === "boolean" && typeof props.selectOptions[1].value === "boolean"){
        let trueIndex
        let falseIndex
        props.selectOptions.forEach((option, index) => {
            if (option.value === true){
                trueIndex = index
            } else {
                falseIndex = index
            }
        })
        if (props.data === true){
            value = props.selectOptions[trueIndex].text
        } else {
            value = props.selectOptions[falseIndex].text
        }
    }
    return (
        <div className="inline-input-container">
            {props.label && <LabelComponent label={props.label} additionalClasses={props.additionalLabelClasses}/>}
            <select
                id={props.id}
                className={`select ${props.additionalInputClasses ? props.additionalInputClasses : ''}`}
                defaultValue={value}
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