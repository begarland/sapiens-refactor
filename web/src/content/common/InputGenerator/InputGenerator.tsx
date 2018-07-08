import * as React from 'react'
import Select from './Inputs/Select'
import Input from './Inputs/Input'
import Checkbox from './Inputs/Checkbox'
import InputWithMovingPlaceholder from './InputWithMovingPlaceholder'
import {HTMLInputTypes} from '../../utils/Enums'

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
    nonstandardInputType?: string;


}

export interface InputGeneratorTypes {
    inputArray: SingleInputTypes[];
    onInputChange: (id: string, value: string | boolean) => void;
}



const InputGenerator = (props: InputGeneratorTypes) => {
    return (
        <div className={`input-container`}>
            {props.inputArray.map((input: SingleInputTypes, index: number)=> {
                if (input.inputType === HTMLInputTypes.Select){
                    return (
                        <Select {...input} key={index} onInputChange={props.onInputChange}/>
                    )
                } else if (input.inputType === HTMLInputTypes.CheckBox){
                    return (
                        <Checkbox {...input} key={index} onInputChange={props.onInputChange}/>
                    )
                } else if (input.inputType === HTMLInputTypes.Range){

                } else if (input.inputType === HTMLInputTypes.Date) {

                } else if (input.nonstandardInputType === HTMLInputTypes.WithMovingPlaceholder){
                    return(
                        <InputWithMovingPlaceholder {...input} key={index} onInputChange={props.onInputChange}/>
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