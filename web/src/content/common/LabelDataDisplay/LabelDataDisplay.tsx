import * as React from 'react'
import LabelComponent from '../Label/Label'

export interface LabelDataDisplayTypes {
    label: string;
    data: any;
    extraData?: string;
    additionalClasses?: string;
}

const LabelDataDisplay = (props: LabelDataDisplayTypes) => {
    let numberClass = (typeof(props.data) === "number" ? 'number-label' : '')
    return (
        <div className="label-data-display-container">
            <LabelComponent label={props.label} />
            <LabelComponent label={props.data} hideColon={true} additionalClasses={`data-label ${numberClass}`}/>
            <LabelComponent label={props.extraData} hideColon={true} additionalClasses={`data-label`}/>

        </div>
    )
}

export default LabelDataDisplay