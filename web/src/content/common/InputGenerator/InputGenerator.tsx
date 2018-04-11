import * as React from 'react'
import Select from './Inputs/Select'
import Input from './Inputs/Input'
import Checkbox from './Inputs/Checkbox'

export interface SingleInputTypes {
    id: string;
    label?: string;
    additionalLabelClasses?: string;
    hideColon?: boolean;
    inputType?: string;
    additionalInputClasses?: string;
    selectOptions?: string[];
    data: any;

}

export interface InputGeneratorTypes {
    inputArray: SingleInputTypes[];
    onInputChange: (id: string, value: string | boolean) => void;
}



const InputGenerator = (props: InputGeneratorTypes) => {
    return (
        <div className="input-container">
            {props.inputArray.map((input: SingleInputTypes, index: number)=> {
                if (input.inputType === 'select'){
                    return (
                        <Select {...input} key={index} onInputChange={props.onInputChange}/>
                    )
                } else if (input.inputType === 'checkbox'){
                    return (
                        <Checkbox {...input} key={index} onInputChange={props.onInputChange}/>
                    )
                }
                return (
                    <Input {...input} key={index} onInputChange={props.onInputChange}/>
                )
            })}
        </div>
    )

}

export default InputGenerator