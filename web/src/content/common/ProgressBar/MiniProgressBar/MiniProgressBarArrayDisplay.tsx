import * as React from 'react'
import MiniProgressBar, {MiniProgressBarProps} from './MiniProgressBar'


export interface MiniProgressBarArrayDisplayProps {
    array: MiniProgressBarProps[]
}

export const MiniProgressBarArrayDisplay = (props: MiniProgressBarArrayDisplayProps) => {
    return(
        <div id="array-display">
            {props.array.map(function(value: any, index: number) {
                console.log(value)
                return(
                    <div className="mini-progress-bar-with-label-container" key={index}>
                        <h4 className="progress-bar-label">{value.type}:</h4>
                        <MiniProgressBar
                            type={value.type}
                            barFills={value.barFills}
                        />
                        <div className="progress-bar-small-label-container">
                            <h5 className="progress-bar-small-label">
                                Consumed: {value.consumed} {value.units}
                            </h5>
                            <h5 className="progress-bar-small-label">
                                Daily Value: {value.allotted} {value.units}
                            </h5>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MiniProgressBarArrayDisplay