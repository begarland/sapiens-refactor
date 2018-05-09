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
    min?: string;
    additionalInputClasses?: string;
    selectOptions?: {text: string, value: string | boolean}[];
    data: any;
    extraData?: string;
    extraDataAdditionalClasses?: string;


}

export interface InputGeneratorTypes {
    inputArray: SingleInputTypes[];
    onInputChange: (id: string, value: string | boolean) => void;
}



const InputGenerator = (props: InputGeneratorTypes) => {
    return (
        <div className={`input-container`}>
            {props.inputArray.map((input: SingleInputTypes, index: number)=> {
                if (input.inputType === 'select'){
                    return (
                        <Select {...input} key={index} onInputChange={props.onInputChange}/>
                    )
                } else if (input.inputType === 'checkbox'){
                    return (
                        <Checkbox {...input} key={index} onInputChange={props.onInputChange}/>
                    )
                } else if (input.inputType === 'range'){

                } else if (input.inputType === 'date'){

                }
                return (
                    <Input {...input} key={index} onInputChange={props.onInputChange}/>
                )
            })}
        </div>
    )

}

export default InputGenerator