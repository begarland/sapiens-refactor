import * as React from 'react'

export interface LabelComponentTypes {
    label: string;
    additionalClasses?: string;
    hideColon?: boolean;
}

const LabelComponent = (props: LabelComponentTypes) => {
    const colon = (props.hideColon ? '' : ':')
    return (
        <label className={`label ${props.additionalClasses ? props.additionalClasses : ''}`}>{props.label}{colon}</label>
    )
}

export default LabelComponent

