import * as React from 'react'
import {LabelComponentTypes} from './Label'

interface SpanLabelTypes extends LabelComponentTypes {}

const SpanLabel = (props: SpanLabelTypes) => {
    return (
        <span className={`span-label ${props.additionalClasses ? props.additionalClasses : ''}`}>{props.label}</span>
    )
}

export default SpanLabel