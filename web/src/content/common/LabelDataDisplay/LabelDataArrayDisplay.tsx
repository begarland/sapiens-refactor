import * as React from 'react'
import LabelDataDisplay, {LabelDataDisplayTypes} from './LabelDataDisplay'

interface LabelDataArrayDisplayTypes {
    labelDataArray: LabelDataDisplayTypes[];
}

const LabelDataArrayDisplay = (props: LabelDataArrayDisplayTypes) => {
    return (
        <div className="label-data-array-display-container">
            {props.labelDataArray.map((labelData, index) =>
                <LabelDataDisplay
                    key={index}
                    label={labelData.label}
                    data={labelData.data}
                    extraData={labelData.extraData}
                />
            )}
        </div>
    )
}

export default LabelDataArrayDisplay