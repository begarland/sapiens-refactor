import * as React from 'react'
import LabelComponent from '../../Label/Label'
import { SingleInputTypes } from '../InputGenerator'
import {HTMLInputTypes} from '../../../utils/Enums'

interface InputTypes extends SingleInputTypes {
    onInputChange: (id: string, value: string) => void;
}

const Input = (props: InputTypes) => {
    if (props.inputType === 'number'){
        return (
            <div className="inline-input-container">
                {props.label &&
                    <LabelComponent
                        label={props.label}
                        additionalClasses={props.additionalLabelClasses}
                    />
                }
                <input
                    id={props.id}
                    className={`input ${props.additionalInputClasses ? props.additionalInputClasses : ''}`}
                    type={HTMLInputTypes.Number}
                    value={props.data || 0}
                    onChange={(event) => {props.onInputChange(props.id, event.target.value)}}
                    min={`${props.min ? props.min : ""}`}
                    pattern="[0-9]*"
                />
                {props.extraData &&
                    <LabelComponent
                        label={props.extraData}
                        hideColon={true}
                        additionalClasses={props.extraDataAdditionalClasses}
                    />
                }
            </div>
        )
    } else if (props.nonstandardInputType === HTMLInputTypes.WithMovingPlaceholder) {
        return (
        <input
            id={props.id}
            className={`input ${props.additionalInputClasses ? props.additionalInputClasses : ''}`}
            type={(props.inputType ? props.inputType : 'text')}
            value={props.data || ''}
            onChange={(event) => {props.onInputChange(props.id, event.target.value)}}
        />
        )
    }
    return (
        <div className="inline-input-container">
            {props.label && <LabelComponent label={props.label} additionalClasses={props.additionalLabelClasses}/>}
            <input
                id={props.id}
                className={`input ${props.additionalInputClasses ? props.additionalInputClasses : ''}`}
                type={(props.inputType ? props.inputType : HTMLInputTypes.Text)}
                value={props.data || ''}
                onChange={(event) => {props.onInputChange(props.id, event.target.value)}}
            />
            {props.extraData &&
                <LabelComponent
                    label={props.extraData}
                    hideColon={true}
                    additionalClasses={props.extraDataAdditionalClasses}
                />
            }
        </div>
    )
}

export default Input